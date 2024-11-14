export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  img: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
}

export interface IProduct {
  id: string;
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
  createdAt: Date;
}

export interface ISearchParams {
  params?: {
    id: string;
  };
  searchParams?: {
    q?: string;
    page?: string;
  };
}
