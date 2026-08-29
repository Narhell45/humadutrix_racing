'use client';

import Link from "next/link";

import { useState } from 'react';

const Navbar = () => {

   const [active, setActive] = useState(false)
   console.log(active);

   const handleClick = () => {
    // console.log("TestingClick");
    setActive(!active);
   }

  return (
    <div className="navbar py-6">
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="text-3xl font-bold">Ngoding</h1>
                </div>
                <ul className={`menu flex items-center gap-12 md:static absolute ${active ? "top-24 opacity-100" : "top-20 opacity-0"} left-1/2 
                -translate-x-1/2 md:-translate-x-0 md:flex-row flex-col md:bg-transparent bg-slate-700 w-full md:w-auto md:py-0 py-10
                text-white md:text-black transition-all md:opacity-100 md:transition-none md:text-base text-xl`}> 
                    <li>
                        <Link href={"#beranda"}>Beranda</Link>
                    </li>
                    <li>
                        <Link href={"#layanan"}>Layanan</Link>
                    </li>
                    <li>
                        <Link href={"#proyek"}>Proyek</Link>
                    </li>
                    <li>
                        <Link href={"#kontak"}>Kontak</Link>
                    </li>
                </ul>
                <div className="md:hidden block" onClick={() => handleClick()}>
                    <i className="ri-menu-4-line ri-2x font-bold"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar