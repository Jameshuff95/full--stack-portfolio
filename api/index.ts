// frontend/api/send-message.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import express, { Request, Response } from 'express';
import messageRoutes from './routes/messageRoutes';

const app = express();

app.use(express.json());
app.use('/api/messages', messageRoutes);

export default (req: VercelRequest, res: VercelResponse) => {
  const expressHandler = app as any; // Explicitly cast to any
  expressHandler(req, res);
};

/*

// Connect to your database
mongoose.connect(process.env.DATABASE_URL as string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch((error) => console.error('Database connection error:', error));

*/
