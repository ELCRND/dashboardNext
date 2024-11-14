import SingleUser from "@/app/components/Users/SingleUser/SingleUser";
import { ISearchParams } from "@/app/types";

const SingleUserPage = ({ params }: ISearchParams) => {
  return <SingleUser params={params} />;
};

export default SingleUserPage;
