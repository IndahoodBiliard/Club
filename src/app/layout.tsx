import "./globals.css";
import type { Metadata } from "next";
import Header from "@/component/header";
import { Inter } from "next/font/google";
import styles from "./mainUI.module.scss";

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
      <body className={styles.main_ui}>
        <Header />
        <main className={styles.main}>
          {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
          {children}
        </main>
      </body>
    </html>
  );
}
