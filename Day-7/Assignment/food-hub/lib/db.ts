import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'food_ordering',
  user: 'rupeshmacbook',
  password: '',
})

export default pool
