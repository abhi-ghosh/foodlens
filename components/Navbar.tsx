import {JSX} from "react";
import Image from "next/image";
import { Sun2,  Moon } from 'reicon-react';
import logo from "@/assets/foodlenslogo.webp";
import {motion} from "motion/react";
type NavbarProps = {
  dark: boolean;
  toggleDark: () => void;
}
type IconAniType = {
  initial: { rotate: number };
  animate: { rotate: number };
  exit: { rotate: number };
  transition: {
    type: "spring";
    stiffness: number;
    damping: number;
  };
};
export default function Navbar({dark, toggleDark}:NavbarProps): JSX.Element {
const iconAni: IconAniType = {
  initial: { rotate: 180 },
  animate: { rotate: 0 },
  exit: { rotate: -180 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 12,
  },
};
  return (
    <nav className="py-4 px-4 md:px-6 border-b border-black/10 dark:border-gray-700 flex
      justify-between items-center"
    >
      <div className="flex text-2xl gap-3 font-black items-center">
        <Image
          width={32}
          height={32}
          src={logo}
          alt="FoodLens Logo"
        />
        <h1 className="font-heading dark:text-white theme-transition">
          Food<span className="text-brand">Lens</span>
        </h1>
      </div>
      <div className="flex gap-4 items-center">
        <h3 className="text-sm dark:text-gray-400 theme-transition
          hidden md:block"
        >
          Smarter food choices, instantly
        </h3>
        <button className="squircle border border-black/10 bg-brand w-10
          h-10 flex items-center justify-center dark:bg-transparent
          dark:border-gray-700 theme-transition hover:scale-105 active:scale-95
          transition-transform duration-200 ease-in-out"
          onClick={toggleDark}
        >
          {!dark
            ? <motion.div key="moon" {...iconAni}>
                <Moon size={24} color="white"/>
              </motion.div>
            : <motion.div key="sun" {...iconAni}>
                <Sun2 size={24} color="white"/>
              </motion.div>
          }
        </button>
      </div>
    </nav>
  )
}