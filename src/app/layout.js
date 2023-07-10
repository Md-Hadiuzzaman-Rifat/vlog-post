"use client"
import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";
import AnimatedCursor from "react-animated-cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-7xl center">
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={4}
      />
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
