import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { routes } from '../pages';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import classNames from 'classnames';

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPos, setScrollPos] = useState<number>(0);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest <= 0.1) {
      setScrollPos(latest);
    }
    if (latest > 0.1) {
      setScrollPos(1);
    }
  });

  const navClass = classNames({
    'fixed border-b-[1px] border-zinc-500 bg-zinc-800': scrollPos === 1,
    block: scrollPos === 0,
  });

  return (
    <nav
      className={
        'flex h-16 w-full items-center justify-between self-center ' + navClass
      }
    >
      <motion.p
        className={'m-5 font-jetbrains text-xl tracking-wide'}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: scrollPos,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Floriian
      </motion.p>
      <ul className="flex w-full list-none justify-end">
        {[1, 2, 3].map((d, i) => (
          <li key={i}>
            <MenuLinks />
          </li>
        ))}
      </ul>
      <CloseButton
        open={open}
        setOpen={setOpen}
      />
    </nav>
  );
}

function MenuLinks() {
  return (
    <>
      {routes.map((route) => (
        <Link
          key={route.path}
          className="mr-5  hidden text-xl transition-colors duration-150 hover:text-zinc-400 md:block"
          to={route.path!}
        >
          LINK
        </Link>
      ))}
    </>
  );
}

type CloseButtonProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function CloseButton({ open, setOpen }: CloseButtonProps) {
  const animate = open ? { rotate: 90 } : { rotate: 0 };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <motion.button
      className="m-2 text-2xl md:hidden"
      onClick={() => handleClose()}
      animate={animate}
    >
      <RxHamburgerMenu />
    </motion.button>
  );
}
