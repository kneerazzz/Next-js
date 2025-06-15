'use client'
import dynamic from "next/dynamic";


export default function Home() {
  const CustomTimeline = dynamic(() => import('../../components/CustomTimeline'), 
  {ssr: false,});
  return (
    <CustomTimeline />
  )
}
