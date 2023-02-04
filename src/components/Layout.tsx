import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

export default function Layout() {
  return (
    <div className="h-full w-full bg-zinc-800 text-white">
      {/* <Menu /> */}
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}
