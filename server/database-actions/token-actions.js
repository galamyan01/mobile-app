import jwt from 'jsonwebtoken';
import { Token } from '../database';

export const SECRET_KEY = process.env.SECRET_KEY;

export const createToken = async (user) => {
  const accessToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: '30d' });


  const token = await findToken(user._id);
  if (token) {
    token.refreshToken = refreshToken;
    await token.save();
    return { accessToken, refreshToken };
  }

  const newToken = await Token.create({
    userId: user._id,
    refreshToken: refreshToken
  })
  await newToken.save();
  return { accessToken, refreshToken };
};


export const verifyToken = (token) => {
  const res = jwt.verify(token, SECRET_KEY)
  return res
};

export const findToken = async (userId) => {
  return await Token.findOne({ userId });
};
