import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get('search') || ''
  const filter = req.nextUrl.searchParams.get('filter') || 'all'
  const sort   = req.nextUrl.searchParams.get('sort')   || ''

  let query = 'SELECT * FROM menu_items WHERE 1=1'
  const params: string[] = []

  if (search) {
    params.push(`%${search}%`)
    query += ` AND item_name ILIKE $${params.length}`
  }
  if (filter === 'veg')    query += ' AND is_veg = TRUE'
  if (filter === 'nonveg') query += ' AND is_veg = FALSE'
  if (sort === 'price_asc')  query += ' ORDER BY price ASC'
  if (sort === 'price_desc') query += ' ORDER BY price DESC'

  const result = await pool.query(query, params)
  return NextResponse.json(result.rows)
}
