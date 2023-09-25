import { FC, ReactNode, Suspense } from "react";
interface ListMenu {
  children: ReactNode;
}
const ListMenuLayout: FC<ListMenu> = ({ children }) => {
  return (
    // <Suspense fallback={<div>dddd</div>}>
      <>{children}</>
    // </Suspense>
  );
};

export default ListMenuLayout;
