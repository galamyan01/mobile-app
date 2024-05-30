import * as mongoose from 'mongoose';
import { carSchema } from './cars';

export const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  cars: [carSchema],
  price: { type: Number, required: true }
}, { timestamps: true });

export const Order = mongoose.model('order', orderSchema);