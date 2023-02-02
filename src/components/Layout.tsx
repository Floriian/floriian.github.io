import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-screen bg-zinc-800 text-white">
      <Outlet />
    </div>
  );
}
