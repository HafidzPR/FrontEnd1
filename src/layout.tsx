import React from "react";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
