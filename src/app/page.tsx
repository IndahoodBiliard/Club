"use client";
import styles from "./page.module.scss";
import { Progress } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { carouselHomePage } from "@/data/defaultData";
import { DownOutlined } from "@ant-design/icons";

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [fadeInItemIndex, setFadeInItemIndex] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [progress, setProgress] = useState(0);
  const twoColors = { "0%": "#ffff", "100%": "#ffff" };
  //loading 3s
  useEffect(() => {
    var video = document.getElementById("video0") as any;
    setTimeout(() => {
      if (video.readyState === 4) {
        setIsloading(false);
      }
      // window.addEventListener('load', () => {
      //   // Trang đã tải hoàn tất
      //   setIsloading(false);
      // });
      setProgress(-10);
      playVideo(0);
    }, 3000);
    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);

  const playVideo = (id: number) => {
    const videoElement = document.getElementById(`video${id}`);
    if (videoElement) {
      (videoElement as any).play();
    }
  };

  const pauseVideo = (id: number) => {
    const videoElement = document.getElementById(`video${id}`);
    if (videoElement) {
      (videoElement as any).pause();
    }
  };

  const onSetCurrentItemIndex = useCallback(
    (data: number) => {
      pauseVideo(currentItemIndex);
      !fadeInItemIndex && setFadeInItemIndex(true);
      setTimeout(() => {
        setCurrentItemIndex(data);
        playVideo(data);
        setFadeInItemIndex(false);
      }, 300);
    },
    [fadeInItemIndex, currentItemIndex]
  );

  const goToNextPage = useCallback(
    (index: number) => {
      const scrollContainer = scrollContainerRef.current as any;
      if (
        !scrollContainer ||
        isLoading ||
        carouselHomePage.length - 1 === index
      )
        return;
      const visibleHeight = scrollContainer.clientHeight;
      const nextPageIndex = index + 1;
      if (nextPageIndex < carouselHomePage.length) {
        onSetCurrentItemIndex(nextPageIndex);
        scrollContainer.scrollTo({
          top: nextPageIndex * visibleHeight,
          behavior: "smooth",
        });
      }
    },
    [isLoading, onSetCurrentItemIndex]
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as any;
    function autoScroll() {
      goToNextPage(currentItemIndex);
    }
    function handleScroll() {
      setProgress(-10);
      setFadeInItemIndex(true);
      clearInterval(intervalId);
      let scrollTop = scrollContainer.scrollTop;
      const visibleHeight = scrollContainer.clientHeight as number;
      let itemScroolTo = Math.floor(scrollTop / visibleHeight);
      if (Math.abs(scrollTop - itemScroolTo * visibleHeight) <= 5) {
        intervalId = setInterval(autoScroll, 10000);
        onSetCurrentItemIndex(itemScroolTo);
      }
    }
    let intervalId = setInterval(autoScroll, 10000);
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(intervalId);
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, [currentItemIndex, goToNextPage, onSetCurrentItemIndex]);

  useEffect(() => {
    let interval: any;
    if (currentItemIndex < carouselHomePage.length - 1 && !fadeInItemIndex) {
      interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1);
        } else {
          clearInterval(interval);
        }
      }, 79);
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentItemIndex, fadeInItemIndex, progress]);

  const renderItemCarosel = () => {
    return carouselHomePage.map((data, index) => {
      return (
        <div
          key={data.id}
          className={[styles.bgrCarosel].join(" ")}
          aria-hidden="true"
        >
          <video
            id={`video${index}`}
            src={data.src}
            // autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          ></video>
        </div>
      );
    });
  };

  return (
    <>
      <div
        id="loading"
        className={[styles.loading, !isLoading ? styles.hiden : ""].join(" ")}
      >
        <img src="/Club/logomain.png" alt="logo" />
        {/* <img src="/Club/loading.gif" alt="My GIF" /> */}
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
      <div
        className={styles.buttonDown}
        onClick={() => goToNextPage(currentItemIndex)}
      >
        <Progress
          format={() => <DownOutlined style={{ color: "white" }} />}
          type="circle"
          percent={progress}
          strokeColor={twoColors}
        />
      </div>
    </>
  );
}
