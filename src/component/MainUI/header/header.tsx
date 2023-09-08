"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, Button, Drawer, Space } from "antd";
import styles from "../mainUI.module.scss";
import DrawerHeader from "./drawerHeader";
import SearchButtonMobile from "./searchButtonForMobile";

type Props = {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC = () => {
  const [headerColor, setHeaderColor] = useState<string>(styles.white);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setHeaderColor(styles.black);
    } else {
      setHeaderColor(styles.white);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={[styles.header, headerColor].join(" ")}>
    <button className={[styles.burger_btn, showDrawer ? styles.close : ''].join(' ')} onClick={()=> setShowDrawer(!showDrawer)}><span></span> <span></span></button>
      <div className={styles.logo}>IndaHood</div>
      <SearchButtonMobile/>
      <DrawerHeader showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </header>
  );
};

export default Header;
