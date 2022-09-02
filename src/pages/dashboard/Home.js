import React from "react";
import { Sidebar, Navbar } from "./components";
import { useGlobalContext } from "../../context";

const DashboardScreen = () => {
  const { activeMenu } = useGlobalContext();
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:secondary-dark-bg">Sidebar w-0</div>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardScreen;
