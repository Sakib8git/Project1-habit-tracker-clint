import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import HeroSlider from "../Components/Banner/HeroSlider";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen  text-base-content">
      <div className=" shadow-md mb-2 rounded-b-xl sticky top-0 z-50 bg-base-100">
        <header className="container mx-auto  ">
          <NavBar></NavBar>
        </header>
      </div>
      {/* <HeroSlider></HeroSlider> */}
      <main className=" flex-3">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
