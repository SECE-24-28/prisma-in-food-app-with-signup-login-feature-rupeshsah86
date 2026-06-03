import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const result = await pool.query('SELECT * FROM customers WHERE email = $1', [email])
  const user = result.rows[0]

  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  return NextResponse.json({ cust_id: user.cust_id, name: user.name, email: user.email })
}
