import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData: Iterable<readonly [PropertyKey, any]>) => {
  "use server";
  try {
    const data = Object.fromEntries(formData);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    connectToDB();
    const newUser = new User({ ...data, password: hashedPassword });
    await newUser.save();
  } catch (error) {
    throw new Error(error as string);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: Iterable<readonly [PropertyKey, any]>) => {
  "use server";
  try {
    connectToDB();
    const newProduct = new Product(Object.fromEntries(formData));
    await newProduct.save();
  } catch (error) {
    throw new Error(error as string);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const removeProduct = async (formData: Iterable<readonly [PropertyKey, any]>) => {
  "use server";
  try {
    connectToDB();

    const { id } = Object.fromEntries(formData);
    console.log(Object.fromEntries(formData), id);
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error as string);
  }

  revalidatePath("/dashboard/products");
};

export const removeUser = async (formData: Iterable<readonly [PropertyKey, any]>) => {
  "use server";

  try {
    connectToDB();
    const { id } = Object.fromEntries(formData);
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error as string);
  }
  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData: Iterable<readonly [PropertyKey, any]>) => {
  "use server";

  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  const hashedPassword = await bcrypt.hash(password, 10);

  const updateFields: {
    [i: string]: any;
  } = {
    username,
    email,
    password: hashedPassword,
    phone,
    address,
    isAdmin,
    isActive,
  };

  Object.keys(updateFields).forEach(
    (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
  );
  try {
    connectToDB();
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error(error as string);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData: Iterable<readonly [PropertyKey, any]>) => {
  "use server";

  const { id, title, desc, password, price, stock, color, size } =
    Object.fromEntries(formData);

  const updateFields: {
    [i: string]: any;
  } = {
    title,
    desc,
    price,
    stock,
    color,
    size,
  };

  Object.keys(updateFields).forEach(
    (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
  );
  try {
    connectToDB();
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error(error as string);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
