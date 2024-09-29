import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import SideBar from "./SideBar";

const HomePage = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div>
      <Navbar
        setIsSideBarOpen={setIsSideBarOpen}
        isSideBarOpen={isSideBarOpen}
      />
      <SideBar
        setIsSideBarOpen={setIsSideBarOpen}
        isSideBarOpen={isSideBarOpen}
      />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default HomePage;
