import { Order } from "../database";

export const createOrder = async (data) => {
  const order = await Order.create(data);
  order.save();
  return order
}

export const getOrders = async (userId) => {
  const orders = await Order.find({ userId });
  return orders
}

