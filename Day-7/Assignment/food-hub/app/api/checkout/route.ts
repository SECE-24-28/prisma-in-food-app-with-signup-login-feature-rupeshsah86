import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

type CartItem = {
  item_id: number
  item_name: string
  price: number
  qty: number
}

export async function POST(req: NextRequest) {
  const { cust_id, cart } = await req.json()

  if (!cust_id) {
    return NextResponse.json({ error: 'Please login first' }, { status: 401 })
  }
  if (!cart || cart.length === 0) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
  }

  const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.qty, 0)

  const orderResult = await pool.query(
    'INSERT INTO orders (cust_id, total) VALUES ($1, $2) RETURNING order_id',
    [cust_id, total]
  )
  const order_id = orderResult.rows[0].order_id

  for (const item of cart) {
    await pool.query(
      'INSERT INTO order_items (order_id, item_id, quantity) VALUES ($1, $2, $3)',
      [order_id, item.item_id, item.qty]
    )
  }

  return NextResponse.json({ order_id })
}
