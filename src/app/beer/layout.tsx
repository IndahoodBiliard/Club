import Header from "@/component/header";
import { FC, ReactNode } from "react";
interface ListMenu {
  children: ReactNode;
}
const ListMenuLayout: FC<ListMenu> = ({ children }) => {
  return (
    <>
      <Header headerType="black"/>
      <main>{children}</main>
    </>
  );
};

export default ListMenuLayout;
