"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, Button, Drawer, Space } from "antd";
import styles from "../mainUI.module.scss";
import DrawerHeader from "./drawerHeader";
import SearchButtonMobile from "./searchButtonForMobile";

type Props = {
  headerType?: "black";
};

const Header: FC<Props> = ({ headerType }) => {
  const [headerColor, setHeaderColor] = useState<string>(styles.white);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const listenScrollEvent = () => {
    if (headerType) {
      setHeaderColor(styles.black);
    } else if (window.scrollY > 50) {
      setHeaderColor(styles.black);
    } else {
      setHeaderColor(styles.white);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={[styles.header, headerType ? styles.black : headerColor].join(
        " "
      )}
    >
      <button
        className={[styles.burger_btn, showDrawer ? styles.close : ""].join(
          " "
        )}
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <span></span> <span></span>
      </button>
      <Link href="/" className={styles.logo}>
        IndaHood
      </Link>
      {/* <SearchButtonMobile/> */}
      s
      <DrawerHeader showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </header>
  );
};

export default Header;
