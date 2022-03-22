import React from "react";
import Header from "../components/header";
import Landing from "../components/landing/landing";
import PreviousDrop from "../components/previousDrops/previousDrops";
import Upcoming from "../components/upcoming/upcoming";
import Info from "../components/Info/Info.components";
import Partners from "../components/Partners/Partners.component";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <Landing />
      <Upcoming />
      <Info />
      <PreviousDrop />
      <Partners />
    </>
  );
}

export default Home;
