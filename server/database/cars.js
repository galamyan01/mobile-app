import * as mongoose from 'mongoose';

const carOption = new mongoose.Schema(
  {
    size: { type: String, required: true },
    currency: { type: String },
    price: { type: String, required: true },
    color: { type: String },
    image: { type: String },
    quantity: { type: Number },
  }
);

export const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    addInfo: { type: String },
    engine: { type: String },
    imagelink_square: { type: String },
    imagelink_portrait: { type: String },
    avitoLink: { type: String },
    prices: [carOption],
    average_rating: { type: Number },
    ratings_count: { type: Number },
    favourite: { type: Boolean },
    type: { type: String },
    index: { type: Number },
    color: { type: String },
    isNews: { type: Boolean },
    ItemPrice: { type: String },
  }
);

export const Car = mongoose.model('car', carSchema);