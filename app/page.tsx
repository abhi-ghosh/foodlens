"use client";
import {useState, useEffect} from "react";
import Navbar from "@/components/Navbar";
export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
  const toggleDark = (): void =>{
    setDark((prevDark) => !prevDark);
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <div className="">
      <Navbar dark={dark} toggleDark={toggleDark} />
    </div>
  );
}
