import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {
    isConnected: 0,
  };

  try {
    if (connection.isConnected === 0) {
      const db = await mongoose.connect(process.env.DB!);
      connection.isConnected = db.connections[0].readyState;
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
