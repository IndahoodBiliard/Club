import "./globals.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/component/header";
import { Inter } from "next/font/google";
import styles from "./mainUI.module.scss";
import StyledComponentsRegistry from "../lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indahood Biliard",
  description: "indahoodbiliard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[inter.className, styles.main_ui].join(" ")}
        suppressHydrationWarning={true}
      >
          {/* <NextNProgress options={{ easing: 'ease', speed: 500 }} /> */}
        {/* <Suspense> */}
          <Header />
        {/* </Suspense> */}
        <main className={styles.main}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
