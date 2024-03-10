import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";


export default function Home() {
  return (
    <header className="">
       <Navbar/>
       <Main/>
       <Footer/>
      
     
    </header>
  );
}