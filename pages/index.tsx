import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      id="app"
      className="  text-[#F9F9FF] h-screen snap-y snap-mandatory scroll-smooth"
    >
      <Head>
        <title>Zoel`s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      <div id="sections" className=" ">
        {/* Hero */}
        <section
          id="hero"
          className="snap-center w-[100%] h-[100vh] relative top-[2px] scroll-smooth scroll-y-mandatory bg-red-500 "
        >
          <Hero></Hero>
        </section>

        {/* About */}
        <section
          id="about"
          className="snap-center w-[100%] h-[100vh] relative  scroll-smooth scroll-y-mandatory bg-red-200 "
        >
          <About></About>
        </section>

        {/* Experience */}
        <section id="experience" className="snap-center">
          <Experience></Experience>
        </section>

        {/* Skills */}
        <section id="hero" className="snap-center">
          <Skills></Skills>
        </section>

        {/* Projects */}

        <section id="hero" className="snap-center">
          <Projects></Projects>
        </section>

        {/* Contact Me */}
      </div>
    </div>
  );
}
