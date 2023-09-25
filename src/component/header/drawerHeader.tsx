import React, { FC } from "react";
import Link from "next/link";
import { Drawer, Space } from "antd";
import styles from "./header.module.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { dataListMenu } from "@/data/defaultData";

type Props = {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawerHeader: FC<Props> = ({ showDrawer, setShowDrawer }) => {
  const renderLink = () => {
    return dataListMenu.map((item) => (
      <Link
        onClick={() => setShowDrawer(false)}
        key={item.key}
        href={`${item.href}#${item.key}`}
      >
        {item.title}
      </Link>
    ));
  };
  return (
    <Drawer
      placement="left"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
      closable={false}
      width={"41.7vw"}
      zIndex={100}
      rootClassName={styles.repon_drawer}
      bodyStyle={{ padding: "18px 26px 20px" }}
    >
      <div className={styles.sidebar_area}>
        <Space
          size={10}
          align="start"
          direction="vertical"
          className={styles.list_link}
        >
          {renderLink()}
        </Space>
        <Space className={styles.sidebar_social}>
          <a
            href="https://www.facebook.com/IndahoodBiliardClubQ6"
            target="_blank"
          >
            <FacebookOutlined />
          </a>
          <a href=" https://www.instagram.com/indahood_club_" target="_blank">
            <InstagramOutlined />
          </a>
          <a
            href=" https://www.youtube.com/channel/UCeUIF6N7p9Zsb-UaRBucrqw"
            target="_blank"
          >
            <YoutubeOutlined />
          </a>
        </Space>
      </div>
    </Drawer>
  );
};

export default DrawerHeader;
