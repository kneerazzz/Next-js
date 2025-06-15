
'use client'
import Footer from "./Footer/page";
import Header from "./Header/page";
import MemeGrid from "@/components/Home/MemeGrid";

export default function Home() {
  //const data:any = authService.getCurrentUser();
  return (
    <>
      <Header />
      <MemeGrid />
      <Footer />
    </>
  );
}
