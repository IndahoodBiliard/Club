"use client";
import MainUi from "@/component/MainUI/mainUI";
import { bearListData } from "@/data/defaultData";
import { Col, Image, Row, Space } from "antd";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./beer.module.scss";

export default function Home() {
  const divRef = useRef(null);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    // Lấy chiều ngang của div và hiển thị nó trong console
    if (divRef.current) {
      const divWidth = (divRef.current as any).clientWidth;
      setClientWidth(divWidth);
      console.log("Chiều ngang của div:", divWidth, "px");
    }
  }, []);

  const renderComponent = () => {
    return bearListData.map((data) => {
      return (
        <Col key={data.id} xs={24} md={6} className={styles.areaData}>
          <div ref={divRef} className={styles.custom_div}>
          <Image
            width={'100%'}
            height={(clientWidth * 2) / 4}
            src={data.src}
          />
          </div>
          <Space size={10} direction='vertical' className={styles.showContent}>
            <h3>{data.name}</h3>
            <div>{data.price}</div>
          </Space>
        </Col>
      );
    });
  };

  return (
    <MainUi>
      <div className={styles.beer}>
        <Row gutter={{ xs: 20, sm: 20, md: 24, lg: 32 }}>
          {renderComponent()}
        </Row>
      </div>
    </MainUi>
  );
}
