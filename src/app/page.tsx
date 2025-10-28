import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Together from "./components/Together";
import Skills from "./components/Skills";
import Customers from "./components/Customers";
import Try from "./components/Try";
import Growbusiness from "./components/Growbusiness";
import BetterJobs from "./components/Betterjobs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Together />
      <Skills />
      <Customers />
      <Try />
      <Growbusiness />
      <BetterJobs />
    </>
  );
}
