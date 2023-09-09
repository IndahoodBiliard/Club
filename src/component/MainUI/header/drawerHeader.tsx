import React, { FC } from "react";
import Link from "next/link";
import { Avatar, Button, Drawer, Space } from "antd";
import styles from "../mainUI.module.scss";

type Props = {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawerHeader: FC<Props> = ({ showDrawer, setShowDrawer }) => {
  return (
    <Drawer
      placement="left"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
      closable={false}
      width={'41.7vw'}
      zIndex={100}
      rootClassName={styles.repon_drawer}
      bodyStyle={{ padding: "18px 26px 20px;" }}
    >
      <Space
        size={10}
        align="start"
        direction="vertical"
        className={styles.list_link}
      >
        <Link href="/beer">Discount</Link>
        <Link href="/beer">Beer</Link>
        <Link href="/">Cocktaiils</Link>
        <Link href="/">Milk tea</Link>
        <Link href="/">Food</Link>
      </Space>
    </Drawer>
  );
};

export default DrawerHeader;
