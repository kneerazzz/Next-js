
'use client'
import React from "react";
import dynamic from 'next/dynamic';
const CustomTimeline = dynamic(() => import('./components/page'),
  {ssr: false});
export default function Home() {
  return (
    <CustomTimeline />
  )
}