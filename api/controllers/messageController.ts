// frontend/api/controllers/messageController.ts
import { Request, Response } from 'express';

export const receiveMessage = (req: Request, res: Response) => {
  const { name, message } = req.body;
  console.log(`Received message from ${name}: ${message}`);
  res.status(200).send('Form data received');
};
