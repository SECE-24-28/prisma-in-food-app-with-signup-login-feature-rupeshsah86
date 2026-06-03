import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()

  const existing = await pool.query('SELECT cust_id FROM customers WHERE email = $1', [email])
  if (existing.rows.length > 0) {
    return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
  }

  const hashed = await bcrypt.hash(password, 10)
  const result = await pool.query(
    'INSERT INTO customers (name, email, password) VALUES ($1, $2, $3) RETURNING cust_id, name, email',
    [name, email, hashed]
  )

  return NextResponse.json(result.rows[0])
}
