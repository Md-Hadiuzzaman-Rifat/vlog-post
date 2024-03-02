import React from "react";
export default function Root({ children }) {
  if (typeof window !== "undefined") {
    return (
      <>
        {children}
      </>
    );
  }
  return null;
}