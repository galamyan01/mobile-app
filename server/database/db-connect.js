import * as mongoose from 'mongoose';
const uri = process.env.DATABASE_URL;

export async function connectToDatabase() {
  try {
    return mongoose.connect(uri);
    console.log("Connected to database");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
}