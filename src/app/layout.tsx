import "./globals.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/component/header";
import { Inter } from "next/font/google";
import styles from "./mainUI.module.scss";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import Loading from "./loading";
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
        <Suspense>
          <Header />
          <main className={styles.main}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </main>
        </Suspense>
        <Loading/>
      </body>
    </html>
  );
}
