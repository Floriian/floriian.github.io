import React from 'react';
import { motion } from 'framer-motion';
function Avatar() {
  return (
    <div className="flex justify-center">
      <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-cyan-500 bg-zinc-800">
        <p className="font-jetbrains text-2xl">Floriian</p>
      </div>
    </div>
  );
}

export default Avatar;
