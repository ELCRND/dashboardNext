import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");

  const quantItems = 5;
  try {
    connectToDB();
    const quantUsers = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(quantItems)
      .skip(quantItems * (+page - 1));
    return { users, quantUsers };
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getSingleUsers = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const fetchProducts = async (q: string, page: string) => {
  const regex = new RegExp(q, "i");

  const quantItems = 5;

  try {
    connectToDB();
    const quantProducts = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(quantItems)
      .skip(quantItems * (+page - 1));
    return { products, quantProducts };
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error(error as string);
  }
};
