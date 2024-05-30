import { Car } from "../database/cars";

export const createCar = async (data) => {
  const car = await Car.create(data);
  car.save();
  return car
}

export const getCars = async () => {
  const cars = await Car.find();
  return cars
}

export const getCar = async (id) => {
  const car = await Car.findById(id);
  return car
}

export const editCar = async (data) => {
  const editedCar = await Car.findByIdAndUpdate(data._id, data, { new: true });
  return editedCar
}

export const deleteCar = async (id) => {
  const deletedCar = await Car.findByIdAndDelete(id);
  return deletedCar
}
