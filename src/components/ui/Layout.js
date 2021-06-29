import React from "react";
import MainContent from "./MainContent";
import Navigation from "./Navigation";

function Layout() {
  return (
    <>
      <div className="container">
        <Navigation />
        <MainContent />
      </div>
    </>
  );
}

export default Layout;
