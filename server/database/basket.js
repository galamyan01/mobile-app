import * as mongoose from 'mongoose';
import { carSchema } from './cars';

export const basketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  cars: [carSchema],
}, { timestamps: true });

export const Basket = mongoose.model('basket', basketSchema);