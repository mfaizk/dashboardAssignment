"use client";
import "./globals.css";
import SideBar from "./component/SideBar";
import { useState } from "react";

const moveLeft = "-276px";

export default function RootLayout({ children }) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <html lang="en">
      <SideBar moveLeft={moveLeft} sideBar={sideBar} setSideBar={setSideBar} />
      <body
        className={`${
          sideBar ? "ml-0 xl:ml-[276px]" : "ml-0"
        } transition-all duration-300 ease-linear delay-300`}
      >
        {children}
      </body>
    </html>
  );
}
