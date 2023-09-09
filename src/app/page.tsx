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
  const [fadeInItemIndex, setFadeInItemIndex] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [progress, setProgress] = useState(0);
  let scrollTimeout: any;
  const twoColors = { "0%": "#ffff", "100%": "#ffff" };

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
      setProgress(-10);
    }, 3000);
  }, []);

  const onSetFadeInItemIndex = (data: number) => {
    console.log(data);
      !fadeInItemIndex && setFadeInItemIndex(true);
      setTimeout(() => {
        setCurrentItemIndex(data);
        setFadeInItemIndex(false);
      }, 300);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as any;
    function autoScroll() {
      setProgress(-10);
      setFadeInItemIndex(true);
      if (!scrollContainer || isLoading) return;
      const scrollHeight = scrollContainer.scrollHeight;
      const visibleHeight = scrollContainer.clientHeight;
      const maxScrollTop = scrollHeight - visibleHeight;
      const itemHeight = visibleHeight;
      let scrollTop = scrollContainer.scrollTop;
      if (scrollTop === maxScrollTop) {
        scrollTop = 0;
        setFadeInItemIndex(false)
      } else {
        scrollTop += visibleHeight;
        scrollContainer.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
        const newIndex = Math.floor(scrollTop / itemHeight);
        onSetFadeInItemIndex(newIndex);
        console.log("autoScroll", newIndex);
      }
    }

    let intervalId = setInterval(autoScroll, 5000);
    scrollContainer.addEventListener("scroll", handleScroll);

    function handleScroll() {
      setProgress(-10);
      setFadeInItemIndex(true);
      clearInterval(intervalId);
      intervalId = setInterval(autoScroll, 5000);
      clearTimeout(scrollTimeout);
      if (!scrollContainer || isLoading) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollTimeout = setTimeout(() => {
        const scrollHeight = scrollContainer.scrollHeight;
        const visibleHeight = scrollContainer.clientHeight;
        const maxScrollTop = scrollHeight - visibleHeight;
        const itemHeight = visibleHeight;
        let scrollTop = scrollContainer.scrollTop;
        const newIndex = Math.floor(scrollTop / itemHeight);
        onSetFadeInItemIndex(newIndex);
        if (scrollTop === maxScrollTop) {
          scrollTop = 0;
        } else {
        }
      }, 100);
    }
    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    let interval: any;
    if (currentItemIndex < carouselHomePage.length - 1) {
      interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1);
        } else {
          clearInterval(interval);
        }
      }, 35);
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
      onSetFadeInItemIndex(nextPageIndex);
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
        id="loading"
        className={[styles.loading, !isLoading ? styles.hiden : ""].join(" ")}
      >
        <div className={styles.logo}>IndaHood</div>
        <img src="/Club/loading.gif" alt="My GIF" />
      </div>
      <div
        id="scroll_container"
        ref={scrollContainerRef}
        className={styles.home_page}
      >
        {renderItemCarosel()}
      </div>
      <div className={styles.Content}>
        <p
          className={[
            styles.home__subtitle,
            styles.hone_text,
            fadeInItemIndex ? styles["fade-in-animation"] : "",
          ].join(" ")}
        >
          {carouselHomePage[currentItemIndex].subtitle}
        </p>
        <h2
          className={[
            styles.home__title,
            styles.hone_text,
            fadeInItemIndex ? styles["fade-in-animation"] : "",
          ].join(" ")}
        >
          {carouselHomePage[currentItemIndex].title}
        </h2>
        <div
          className={[
            styles.home__desc,
            styles.hone_text,
            fadeInItemIndex ? styles["fade-in-animation"] : "",
          ].join(" ")}
        >
          {carouselHomePage[currentItemIndex].desc}
        </div>
      </div>
      <div className={styles.buttonDown} onClick={() => goToNextPage()}>
        <Progress
          format={() => <DownOutlined style={{ color: "white" }} />}
          type="circle"
          percent={progress}
          strokeColor={twoColors}
        />
      </div>
    </MainUi>
  );
}
