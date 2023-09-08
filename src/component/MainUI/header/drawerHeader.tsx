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
      width={341}
      zIndex={100}
      rootClassName={styles.repon_drawer}
      bodyStyle={{ padding: "64px 16px 16px 16px" }}
    >
      <Space size={24} align="start" direction="vertical">
        <Link href="/">home ádfsg ádf sdafsad ádas dá đá á dá da s dsfgh gfsadfg hsdfgd</Link>
        <Link href="/saringan/1">home</Link>
        <Link href="/">home</Link>
        <Link href="/">home</Link>
        <Link href="/">home</Link>
      </Space>
    </Drawer>
  );
};

export default DrawerHeader;
