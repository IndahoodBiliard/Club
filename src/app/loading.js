"use client";
import NextNProgress from 'nextjs-progressbar';
export default function Loading() {
    return <NextNProgress options={{ easing: 'ease', speed: 500 }} />
  }