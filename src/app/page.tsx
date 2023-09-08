"use client"
import Link from "next/link";
import MainUi from "@/component/MainUI/mainUI";
import styles from "./page.module.scss";
import { Button, Carousel } from "antd";
import { useRef } from "react";
import { carouselHomePage } from "@/data/defaultData";

export default function Home() {

  const slider = useRef<any>(null);

  const renderItemCarosel = () => {
    return carouselHomePage.map(data => {
      return <div key={data.id}>
      <div
        className={styles.bgrCarosel}
        aria-hidden="true"
      >
        <video data-v-6b59c062="" data-index="5" data-active="5" src={data.src} autoPlay={true} loop={true} muted={true} playsInline={true}></video>
      </div>
    </div>
    })
  };

  return (
    <MainUi>
      <div className={styles.home_page}>
        <div className={styles.carosel_area}>
          <Carousel
            ref={slider}
            className="carouselHome"
            autoplay
            autoplaySpeed={5000}
          >
            {renderItemCarosel()}
          </Carousel>
        </div>
        nulla dignissimos incidunt cupiditate! Explicabo, placeat exercitationem
        expedita soluta asperiores odio molestias atque nisi hic sapiente qui
        repellat quia ea laudantium tenetur molestiae cum at libero, quas vitae
        est!
      </div>
    </MainUi>
  );
}
