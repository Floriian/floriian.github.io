import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="w-full h-full bg-zinc-800 text-white">{children}</div>;
}
