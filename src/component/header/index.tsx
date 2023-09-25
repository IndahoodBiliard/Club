"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import DrawerHeader from "./drawerHeader";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  headerType?: "black";
};

const Header: FC<Props> = ({ headerType }) => {
  const pathname = usePathname();

  const [headerColor, setHeaderColor] = useState<string>(styles.white);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  console.log(pathname);

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
      className={[
        styles.header,
        pathname !== "/" ? styles.black : headerColor,
      ].join(" ")}
    >
      <button
        className={[styles.burger_btn, showDrawer ? styles.close : ""].join(
          " "
        )}
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <span></span> <span></span>
      </button>
      <Link href="/" className={styles.logo} onClick={()=> setShowDrawer(false)}>
        <Image src="/Club/logo.png" height={35.6} width={150} alt="logo" />
      </Link>
      <button
        className={[styles.burger_btn, showDrawer ? styles.close : ""].join(
          " "
        )}
        style={{ opacity: 0, visibility: "hidden" }}
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <span></span> <span></span>
      </button>
      <DrawerHeader showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </header>
  );
};

export default Header;
