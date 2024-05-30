import verifyToken from '../database-actions';

export const tokenMiddleware = (req) => {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Нет токена' });

  const isValid = verifyToken(token);
  if (isValid) {
    req.user = user;
    // return new Response("Невалидный токен", { status: 403 });
  }
  return new Response("Невалидный токен", { status: 403 });
};