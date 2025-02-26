// frontend/api/send-message.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    const { name, message } = req.body;
    const client = await pool.connect();

    try {
      await client.query(
        'INSERT INTO messages (name, message) VALUES ($1, $2)',
        [name, message]
      );
      res.status(200).send('Form data received');
    } catch (error) {
      console.error('Database query error:', error);
      res.status(500).send('Internal Server Error');
    } finally {
      client.release();
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
