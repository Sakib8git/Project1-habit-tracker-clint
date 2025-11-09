import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sky-100">
      <header className="container mx-auto">
        <NavBar></NavBar>
      </header>
      <main className="container mx-auto flex-3">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
