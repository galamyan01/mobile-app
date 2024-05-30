import { serve } from "bun";

import { connectToDatabase } from "./database";
import { userRouter, carRouter, basketRouter, orderRouter } from "./routers";

const port = process.env.PORT || 5000;

const CORS_HEADERS = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE, PATCH, HEAD',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
};

export class ClientResponse extends Response {
  constructor(body = null, init = null) {
    super(body, init);
    this.headers.set("Access-Control-Allow-Origin", "*");
    this.headers.set("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE, PATCH, HEAD");
    this.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
}

await connectToDatabase();
const router = async (req) => {
  if (req.method === 'OPTIONS') {
    const res = new Response('Departed', CORS_HEADERS);
    return res;
  }

  const url = new URL(req.url);
  console.log(url.pathname, 'url.pathname')
  if (url.pathname.startsWith("/user")) {
    return userRouter(req);
  }
  if (url.pathname.startsWith("/car")) {
    return carRouter(req);
  }
  if (url.pathname.startsWith("/basket")) {
    return basketRouter(req);
  }
  if (url.pathname.startsWith("/order")) {
    return orderRouter(req);
  }
};

serve({ port, fetch: router, });

console.log(`Server is running at http://localhost:${port}`);
