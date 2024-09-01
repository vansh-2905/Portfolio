import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
        
      <div className="">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
