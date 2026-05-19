import Image from "next/image";
import { AppBar } from "./components/AppBar";
import { Hero } from "./components/Hero";
import { UseSection } from "./components/UseSection";

export default function Home() {
  return (
    <div className="">
      <AppBar/>
      <Hero/>
      <UseSection/>
    </div>
  );
}
