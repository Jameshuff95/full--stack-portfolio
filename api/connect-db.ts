// frontend/api/connect-db.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async (req: VercelRequest, res: VercelResponse) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM your_table');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    client.release();
  }
};
