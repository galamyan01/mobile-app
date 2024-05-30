import { userController } from "../controllers";

export const userRouter = async (req) => {
  const { url, method } = req;
  const newUrl = new URL(url)

  const basePath = newUrl.pathname.slice(newUrl.pathname.lastIndexOf('/') + 1);
  const action = userController[basePath];
  switch (method) {
    case "GET":
      return action(req);
    case "POST":
      return action(req);
  }
  if (!action) {
    return new Response("Not found", { status: 404 });
  }
}