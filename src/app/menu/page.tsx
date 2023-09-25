"use client";
import { dataListMenu, FoodType } from "@/data/defaultData";
import { Anchor, Col, Divider, Row, Image } from "antd";
import { useEffect, useRef } from "react";
import styles from "./beer.module.scss";
import NextNProgress from "nextjs-progressbar";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const activeLink = document.querySelector(".ant-anchor-link-active");
      const container = document.querySelector(".ant-anchor");
      if (activeLink && container) {
        const containerWidth = container.clientWidth;
        const activeLinkOffset = (activeLink as any).offsetLeft;
        const activeLinkWidth = activeLink.clientWidth;
        container.scrollTo({
          left: activeLinkOffset - (containerWidth - activeLinkWidth) / 2,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderListMenu = () => {
    return dataListMenu.map((data, index) => {
      return (
        <div key={index} id={data.key} className={styles.listMenu}>
          <Divider
            orientation="left"
            style={{
              borderColor: "#7cb305",
              color: "#fff",
              fontSize: 28,
            }}
          >
            {data.title}
          </Divider>
          <Row gutter={[16, 16]}>{renderComponent(data.data)}</Row>
        </div>
      );
    });
  };

  const renderComponent = (data: FoodType[]) => {
    return data.map((item) => {
      return (
        <Col key={item.id} xs={24} md={12} className={styles.areaData}>
          <div className={styles.imageArea}>
            <Image src={item.src} className="image" alt={item.name} />
          </div>
          <div className={styles.showContent}>
            <div>
              <h3>
                {item.name}
                <br />
                (&nbsp;{item.subTitle}&nbsp;)
              </h3>
              {/* <h3>(&nbsp;{item.subTitle}&nbsp;)</h3> */}
            </div>
            <p>{item.detail}</p>
            <div>{item.price}</div>
          </div>
        </Col>
      );
    });
  };

  return (
    <div className={styles.beer}>
      <div className={styles.anchor_listMenu}>
        <Anchor
          style={{ display: "flex" }}
          bounds={80}
          direction="horizontal"
          items={dataListMenu.map(({ title, key }) => ({
            title,
            key,
            href: `#${key}`,
          }))}
        />
      </div>
      <div style={{ width: "100%" }} className={styles.dataListMenu}>
        <NextNProgress options={{ easing: "ease", speed: 500 }} />
        {renderListMenu()}
      </div>
    </div>
  );
}
