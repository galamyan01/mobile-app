
import { Token } from "../database/tokens";
import { createToken, verifyToken, findToken } from "./token-actions";
import { User } from "../database";

export async function registerAction(userData) {
  const {
    fullname,
    email,
    password,
    avatar
  } = userData

  const isExistsUser = await User.findOne({ email });

  if (isExistsUser) {
    throw new Error('Пользователь с таким email уже существует');
  }

  const hashedPassword = await Bun.password.hash(password);

  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
    avatar,
    role: "user"
  });


  const { password: _, ...userWithoutPassword } = user.toObject();
  const tokens = await createToken(userWithoutPassword);

  return { ...userWithoutPassword, ...tokens };
}

export async function loginAction(userData) {
  const { email, password } = userData;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Неправильная почта или пароль');
  }

  const isMatch = await Bun.password.verify(password, user.password);
  if (!isMatch) {
    throw new Error('Неправильная почта или пароль');
  }

  const { password: _, ...userWithoutPassword } = user.toObject();

  const tokens = await createToken(userWithoutPassword);
  return { ...tokens, ...userWithoutPassword }
}

export async function logoutAction(refreshToken) {
  return Token.findOneAndDelete({ refreshToken });
}

export async function refreshAction(refreshToken) {
  if (!refreshToken) {
    throw new Error('Токен не передан');
  }

  const userData = verifyToken(refreshToken);
  if (!userData) {
    throw new Error('Токен недействителен');
  }
  const token = await findToken(userData.user._id);
  if (!token || token.refreshToken !== refreshToken) {

  }
  const user = await User.findById(userData.user._id);
  const { password: _, ...userWithoutPassword } = user.toObject();
  const tokens = await createToken(userWithoutPassword);
  return { ...tokens, ...userWithoutPassword };
}


