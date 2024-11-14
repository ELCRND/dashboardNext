import Products from "@/app/components/Products/Products";
import { ISearchParams } from "@/app/types";

const ProductsPage = ({ searchParams }: ISearchParams) => {
  return <Products searchParams={searchParams} />;
};

export default ProductsPage;
