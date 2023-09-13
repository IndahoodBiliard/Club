"use client";
import MainUi from "@/component/MainUI/mainUI";
import { dataListMenu, bearListData } from "@/data/defaultData";
import { Anchor, Col, Divider, Image, Row, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import styles from "./beer.module.scss";

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
      const container = document.querySelector(
        ".ant-anchor"
      );
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
        <div key={index} id={data.key}>
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
            {renderComponent()}
          </Row>
        </div>
      );
    });
  };

  const renderComponent = () => {
    return bearListData.map((data) => {
      return (
        <Col key={data.id} xs={24} md={6} className={styles.areaData}>
          <div ref={divRef} className={styles.custom_div}>
            <Image
              width={"100%"}
              height={(clientWidth * 2) / 4}
              src={data.src}
            />
          </div>
          <Space size={10} direction="vertical" className={styles.showContent}>
            <h3>{data.name}</h3>
            <div>{data.price}</div>
          </Space>
        </Col>
      );
    });
  };

  return (
    <MainUi headerType="black">
      <div className={styles.beer}>
        <div className={styles.anchor_listMenu}>
          <Anchor
            // bounds={20}
            targetOffset={80}
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
    </MainUi>
  );
}
