import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      className="h-64 w-64 bg-red-500"
      ref={ref}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{
        duration: 0.7,
      }}
    >
      Stack
    </motion.div>
  );
}

export default Stack;
