'use client'
import { useEffect, useState } from 'react'

type MenuItem = {
  item_id: number
  item_name: string
  price: number
  description: string
  image_url: string
  is_veg: boolean
}

type CartItem = MenuItem & { qty: number }

export default function Home() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('')

  useEffect(() => {
    const params = new URLSearchParams({ search, filter, sort })
    fetch('/api/menu?' + params)
      .then(res => res.json())
      .then(data => setItems(data))
  }, [search, filter, sort])

  function addToCart(item: MenuItem) {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const existing = cart.find(i => i.item_id === item.item_id)
    if (existing) {
      existing.qty += 1
    } else {
      cart.push({ ...item, qty: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cartUpdated'))
    alert(item.item_name + ' added to cart!')
  }

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        &nbsp;
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
        </select>
        &nbsp;
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="price_asc">Low to High</option>
          <option value="price_desc">High to Low</option>
        </select>
      </p>

      <br />

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.item_id}>
              <td>{item.item_name}</td>
              <td>Rs. {Number(item.price).toFixed(2)}</td>
              <td>{item.description}</td>
              <td>{item.is_veg ? 'Veg' : 'Non-Veg'}</td>
              <td><button onClick={() => addToCart(item)}>Add to Cart</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <br /><hr />
      <div id="about">
        <h2>About Us</h2>
        <p>FoodHub is an online food ordering platform. Browse items, add to cart and place orders.</p>
      </div>

      <hr />
      <div id="contact">
        <h2>Contact Us</h2>
        <form onSubmit={e => { e.preventDefault(); alert('Message sent!') }}>
          <p><input type="text" placeholder="Your Name" required /></p>
          <p><input type="email" placeholder="Your Email" required /></p>
          <p><textarea placeholder="Message" required /></p>
          <p><button type="submit">Send</button></p>
        </form>
      </div>
    </div>
  )
}
