'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()
    if (!res.ok) {
      setError(data.error)
      return
    }

    localStorage.setItem('user', JSON.stringify(data))
    window.dispatchEvent(new Event('cartUpdated'))
    router.push('/')
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <p>
          <label>Email: </label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </p>
        <p>
          <label>Password: </label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        </p>
        <p><button type="submit">Login</button></p>
      </form>
      <p>No account? <Link href="/signup">Sign Up</Link></p>
    </div>
  )
}
