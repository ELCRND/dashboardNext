import Users from "@/app/components/Users/Users";
import { ISearchParams } from "@/app/types";

const UsersPage = ({ searchParams }: ISearchParams) => {
  return <Users searchParams={searchParams} />;
};

export default UsersPage;
