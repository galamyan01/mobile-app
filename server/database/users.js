import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true, min: 2, max: 30 },
  email: { type: String, required: true, min: 6, max: 30, unique: true },
  password: { type: String, required: true, min: 8, max: 70 },
  avatar: { type: String },
  role: [{ type: String, default: "user" }],
});

export const User = mongoose.model('user', userSchema);