import { Basket } from "../database";

export const createbasket = async (data) => {
  const basket = await Basket.create(data);
  basket.save();
  return basket
}

export const editbasket = async (userId, cars) => {
  const basket = await Basket.findOneAndUpdate({ userId }, { cars }, { new: true });
  return basket;
}

export const getbasket = async (userId) => {
  const basket = await Basket.findOne({ userId });
  if (!basket) {
    const basket = await Basket.create({ userId, cars: [] });
    return basket
  }
  return basket
}

