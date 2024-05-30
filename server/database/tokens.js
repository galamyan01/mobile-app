import * as mongoose from 'mongoose';

export const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  refreshToken: { type: String, required: true },
}, { timestamps: true });

export const Token = mongoose.model('token', tokenSchema);