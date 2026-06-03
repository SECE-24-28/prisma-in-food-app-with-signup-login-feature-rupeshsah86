'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [name, setName] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const router = useRouter()

  function refresh() {
    const user = localStorage.getItem('user')
    setName(user ? JSON.parse(user).name : '')
    const cart = localStorage.getItem('cart')
    if (cart) {
      const items = JSON.parse(cart)
      setCartCount(items.reduce((s: number, i: { qty: number }) => s + i.qty, 0))
    } else {
      setCartCount(0)
    }
  }

  useEffect(() => {
    refresh()
    window.addEventListener('cartUpdated', refresh)
    return () => window.removeEventListener('cartUpdated', refresh)
  }, [])

  function logout() {
    localStorage.removeItem('user')
    refresh()
    router.push('/')
  }

  return (
    <div>
      <b>FoodHub</b> &nbsp;|&nbsp;
      <Link href="/">Home</Link> &nbsp;|&nbsp;
      <Link href="/#about">About</Link> &nbsp;|&nbsp;
      <Link href="/#contact">Contact</Link> &nbsp;|&nbsp;
      <Link href="/cart">Cart ({cartCount})</Link> &nbsp;|&nbsp;
      {name ? (
        <span>Hi, {name} &nbsp;<button onClick={logout}>Logout</button></span>
      ) : (
        <span><Link href="/login">Login</Link> &nbsp;|&nbsp; <Link href="/signup">Signup</Link></span>
      )}
      <hr />
    </div>
  )
}
