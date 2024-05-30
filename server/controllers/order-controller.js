import {
  getOrders,
  createOrder,
  verifyToken
} from '../database-actions'


export const orderController = {
  createorder: async (req) => {
    try {
      const accessToken = req.headers.get("Authorization").split(' ')[1]
      const user = verifyToken(accessToken)
      const body = await req.json()
      const order = await createOrder({ ...body, userId: user.user._id })
      return new Response(JSON.stringify(order), { status: 201 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },

  getorders: async (req) => {
    try {
      const accessToken = req.headers.get("Authorization").split(' ')[1]
      const user = verifyToken(accessToken)
      const orders = await getOrders(user.user._id)
      return new Response(JSON.stringify(orders), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
}