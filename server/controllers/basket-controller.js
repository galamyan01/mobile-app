import {
  getbasket,
  createbasket,
  editbasket,
  verifyToken
} from '../database-actions'


export const basketController = {
  getbasket: async (req) => {
    try {
      const accessToken = req.headers.get("Authorization").split(' ')[1]
      const user = verifyToken(accessToken)
      const basket = await getbasket(user.user._id)
      return new Response(JSON.stringify(basket), { status: 200 })
    } catch (error) {
      console.error("An error occurred in getbasket:", error)
      return new Response(error.message, { status: 400 })
    }
  },
  editbasket: async (req) => {
    try {
      const accessToken = req.headers.get("Authorization").split(' ')[1]
      const user = verifyToken(accessToken)
      const body = await req.json()
      const basket = await editbasket(user.user._id, body.cars)
      return new Response(JSON.stringify(basket), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },

}