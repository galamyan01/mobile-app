import { registerAction, refreshAction, loginAction, logoutAction } from "../database-actions"


export const userController = {
  register: async (req) => {
    try {
      const { fullname, email, password, avatar } = await req.json()
      if (!fullname || !email || !password) {
        throw new Error('Необходимо заполнить все поля')
      }
      const user = await registerAction({ fullname, email, password, avatar })

      if (!user) {
        throw new Error('Ошибка регистрации')
      }

      return new Response(JSON.stringify(user), { status: 201 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  login: async (req) => {
    try {
      const { email, password } = await req.json()

      if (!email || !password) {
        throw new Error('Необходимо заполнить все поля')
      }

      const user = await loginAction({ email, password })

      return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  refresh: async (req) => {
    try {
      const { refreshToken } = await req.json()
      if (!refreshToken) {
        throw new Error('Необходимо передать refreshToken')
      }

      const user = await refreshAction(refreshToken)

      return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  logout: async (req) => {
    try {
      const { refreshToken } = await req.json()
      if (!refreshToken) {
        throw new Error('Необходимо передать refreshToken')
      }
      await logoutAction(refreshToken)
      return new Response('OK', { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  }
}

