"use client";
import { dataListMenu, FoodType } from "@/data/defaultData";
import { Anchor, Card, Col, Divider, Row, Space, Image } from "antd";
import { useEffect, useRef, useState } from "react";
import styles from "./beer.module.scss";
// import Image from "next/image";
export default function Home() {
  const divRef = useRef(null);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const divWidth = (divRef.current as any).clientWidth;
      setClientWidth(divWidth);
      console.log("Chiều ngang của div:", divWidth, "px");
    }
  }, []);

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
          <Row gutter={{ xs: 20, sm: 20, md: 24, lg: 32 }}>
            {renderComponent(data.data)}
          </Row>
        </div>
      );
    });
  };

  const renderComponent = (data: FoodType[]) => {
    return data.map((item) => {
      return (
        <Col key={item.id} xs={24} md={6} className={styles.areaData}>
          <div ref={divRef} className={styles.custom_div}>
            {/* <Image
              // width={'100%'}
              // height={'40vw'}
              src={data.src}
              alt="description of image"
              style={{ width: "100%", height: "auto" }}
            /> */}
            <Image src={item.src} className="image" style={{ width: "100%", height: "100px" }} alt="ALT_TEXT" />
          </div>
          <Space size={10} direction="vertical" className={styles.showContent}>
            <div>
              <h3>{item.name}</h3>
              <h3>(&nbsp;{item.subTitle}&nbsp;)</h3>
            </div>
            <p>(&nbsp;{item.detail}&nbsp;)</p>
            <div>{item.price}</div>
          </Space>
        </Col>
      );
    });
  };

  return (
    <div className={styles.beer}>
      <div className={styles.anchor_listMenu}>
        <Anchor
          // affix={false}
          style={{ display: "flex" }}
          bounds={80}
          // offsetTop={0}
          // targetOffset={80}
          direction="horizontal"
          items={dataListMenu.map(({ title, key }) => ({
            title,
            key,
            href: `#${key}`,
          }))}
        />
      </div>
      <div style={{ width: "100%" }} className={styles.dataListMenu}>
        {renderListMenu()}
      </div>
    </div>
  );
}
