"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.scss";
import AnimatedCursor from "react-animated-cursor";
import { SessionProvider } from "next-auth/react";
import ScrollComponent from "@/components/ScrollComponent/ScrollComponent";
import Root from "@/theme/Root";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-100% bg-[#1D1D1D]">
        <div className="max-w-[1400px] center scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-black">
          <SessionProvider>
            {/* <Root>
              <AnimatedCursor
                innerSize={30}
                outerSize={20}
                color="255, 255 ,255"
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={4}
              />
            </Root>  */}

            <ScrollComponent></ScrollComponent>
            <Navbar></Navbar>
            {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
