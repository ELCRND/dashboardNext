import SingleProduct from "@/app/components/Products/SingleProduct/SingleProduct";
import { ISearchParams } from "@/app/types";

const SingleProductPage = ({ params }: ISearchParams) => {
  return <SingleProduct params={params} />;
};

export default SingleProductPage;
