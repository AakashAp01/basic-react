
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
