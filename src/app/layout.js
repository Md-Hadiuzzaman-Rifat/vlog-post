"use client"
import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";
import AnimatedCursor from "react-animated-cursor";
import { SessionProvider } from "next-auth/react";
import ScrollComponent from "@/components/ScrollComponent/ScrollComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1400px] center scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-black">
        <SessionProvider>
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={10}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={4}
          /> */}
          <ScrollComponent></ScrollComponent>
          <Navbar></Navbar>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
