import { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { IoBagSharp, IoSettings } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbReportAnalytics, TbHelpHexagonFilled } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";

export type Item = {
  title: string;
  list: Array<{
    title: string;
    path: string;
    Icon: IconType;
  }>;
};

export const menuItems: Array<Item> = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        Icon: MdSpaceDashboard,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        Icon: ImUsers,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        Icon: IoBagSharp,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        Icon: GiTakeMyMoney,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        Icon: GrMoney,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        Icon: TbReportAnalytics,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        Icon: RiTeamFill,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        Icon: IoSettings,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        Icon: TbHelpHexagonFilled,
      },
    ],
  },
];
