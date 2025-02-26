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
