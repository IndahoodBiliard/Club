"use client";
import Link from "next/link";
import MainUi from "@/component/MainUI/mainUI";
import styles from "./page.module.scss";
import { Button, Carousel, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { carouselHomePage, CarouselHomePageType } from "@/data/defaultData";
import Icon, { DownOutlined } from "@ant-design/icons";

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  let scrollTimeout: any;
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as any;
    function autoScroll() {
      setProgress(-10);
      if (!scrollContainer) return;
      const scrollHeight = scrollContainer.scrollHeight;
      const visibleHeight = scrollContainer.clientHeight;
      const maxScrollTop = scrollHeight - visibleHeight;
      const itemHeight = visibleHeight;
      let scrollTop = scrollContainer.scrollTop;
      if (scrollTop === maxScrollTop) {
        scrollTop = 0;
      } else {
        scrollTop += visibleHeight;
        scrollContainer.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
        const newIndex = Math.floor(scrollTop / itemHeight);
        setCurrentItemIndex(newIndex);
        console.log("autoScroll", newIndex);
      }
    }

    let intervalId = setInterval(autoScroll, 5000);
    scrollContainer.addEventListener("scroll", handleScroll);

    function handleScroll() {
      setProgress(-10);
      clearInterval(intervalId);
      intervalId = setInterval(autoScroll, 5000);
      clearTimeout(scrollTimeout);
      if (!scrollContainer) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollTimeout = setTimeout(() => {
        const scrollHeight = scrollContainer.scrollHeight;
        const visibleHeight = scrollContainer.clientHeight;
        const maxScrollTop = scrollHeight - visibleHeight;
        const itemHeight = visibleHeight;
        let scrollTop = scrollContainer.scrollTop;
        if (scrollTop === maxScrollTop) {
          scrollTop = 0;
        } else {
          const newIndex = Math.floor(scrollTop / itemHeight);
          setCurrentItemIndex(newIndex);
        }
      }, 500);
    }
    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval: any;
    if (currentItemIndex < carouselHomePage.length-1) {
      interval = setInterval(() => {
        if (progress < 99) {
          setProgress(progress + 1);
        } else {
          clearInterval(interval);
          
        }
      }, 30);
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentItemIndex, progress]);

  function goToNextPage() {
    const scrollContainer = scrollContainerRef.current as any;

    if (!scrollContainer) return;

    const visibleHeight = scrollContainer.clientHeight;
    const nextPageIndex = currentItemIndex + 1;

    if (nextPageIndex * visibleHeight < scrollContainer.scrollHeight) {
      scrollContainer.scrollTo({
        top: nextPageIndex * visibleHeight,
        behavior: "smooth",
      });

      // Wait for the scrolling to complete and then update the page index
      setTimeout(() => {
        setCurrentItemIndex(nextPageIndex);
      }, 500); // Adjust the delay as needed
    }
  }

  const renderItemCarosel = () => {
    return carouselHomePage.map((data) => {
      return (
        <div
          key={data.id}
          className={[styles.bgrCarosel].join(" ")}
          aria-hidden="true"
        >
          <video
            data-v-6b59c062=""
            data-index="5"
            data-active="5"
            src={data.src}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          ></video>
        </div>
      );
    });
  };

  return (
    <MainUi>
      <div
        id="scroll_container"
        ref={scrollContainerRef}
        className={styles.home_page}
      >
        {renderItemCarosel()}
      </div>
      <Button type="link" onClick={() => goToNextPage()}>
        {progress}
        <Progress
          className={styles.buttonDown}
          format={() => <DownOutlined style={{ color: "white" }} />}
          type="circle"
          percent={progress}
        />
      </Button>
    </MainUi>
  );
}
