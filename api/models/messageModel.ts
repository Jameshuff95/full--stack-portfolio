/*

// frontend/api/models/messageModel.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
  name: string;
  message: string;
}

const messageSchema: Schema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;

*/