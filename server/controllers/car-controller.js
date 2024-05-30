
import {
  getCars,
  getCar,
  createCar,
  editCar,
  deleteCar
} from "../database-actions";


export const carController = {
  createcar: async (req) => {
    try {
      const body = await req.json()
      const car = await createCar(body)
      return new Response(JSON.stringify(car), { status: 201 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  editcar: async (req) => {
    try {
      const body = await req.json()
      const car = await editCar(body)
      return new Response(JSON.stringify(car), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  deletecar: async (req) => {
    try {
      const body = await req.json()
      const car = await deleteCar(body.id)
      return new Response(JSON.stringify(car), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  getcars: async (req) => {
    try {
      const cars = await getCars()
      return new Response(JSON.stringify(cars), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
  getcar: async (req) => {
    try {
      const body = await req.json()
      const car = await getCar(body.id)
      return new Response(JSON.stringify(car), { status: 200 })
    } catch (error) {
      return new Response(error.message, { status: 400 })
    }
  },
}

