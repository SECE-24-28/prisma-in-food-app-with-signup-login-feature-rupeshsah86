'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type CartItem = {
  item_id: number
  item_name: string
  price: number
  qty: number
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  function removeItem(id: number) {
    const updated = cart.filter(i => i.item_id !== id)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const total = cart.reduce((sum, i) => sum + Number(i.price) * i.qty, 0)

  async function handleCheckout() {
    const user = localStorage.getItem('user')
    if (!user) {
      setIsError(true)
      setMsg('Please login to place an order.')
      return
    }

    const { cust_id } = JSON.parse(user)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cust_id, cart }),
    })

    const data = await res.json()
    if (!res.ok) {
      setIsError(true)
      setMsg(data.error)
      return
    }

    localStorage.removeItem('cart')
    setCart([])
    window.dispatchEvent(new Event('cartUpdated'))
    setIsError(false)
    setMsg('Order #' + data.order_id + ' placed successfully!')
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {msg && <p style={{ color: isError ? 'red' : 'green' }}>{msg}</p>}

      {cart.length === 0 ? (
        <p>Cart is empty. <Link href="/">Browse Menu</Link></p>
      ) : (
        <>
          <table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.item_id}>
                  <td>{item.item_name}</td>
                  <td>Rs. {Number(item.price).toFixed(2)}</td>
                  <td>{item.qty}</td>
                  <td>Rs. {(Number(item.price) * item.qty).toFixed(2)}</td>
                  <td><button onClick={() => removeItem(item.item_id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><b>Total: Rs. {total.toFixed(2)}</b></p>
          <button onClick={handleCheckout}>Place Order</button>
          &nbsp;
          <Link href="/">Continue Shopping</Link>
        </>
      )}
    </div>
  )
}
