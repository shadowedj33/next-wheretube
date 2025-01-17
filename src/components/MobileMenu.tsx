"use client"

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <div className="flex flex-col gap-[4.5px] cursor-pointer" onClick={()=>setIsOpen(prev=>!prev)}>
                <div className={`w-6 h-1 bg-red-800 rounded-sm ${ isOpen ? "rotate-45" : "" } origin-left ease-in-out duration-500 `} />
                <div className={`w-6 h-1 bg-red-800 rounded-sm ${ isOpen ? "opacity-0" : "" } ease-in-out duration -500 `} />
                <div className={`w-6 h-1 bg-red-800 rounded-sm ${ isOpen ? "-rotate-45" : "" } origin-left ease-in-out duration-500 `} />
            </div>
            {isOpen && (
                <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center font-medium text-xl z-10">
                    <Link href="/">Home</Link>
                    <Link href="/">Following</Link>
                    <Link href="/">Explore</Link>
                    <Link href="/">Stories</Link>
                    <Link href="/">Login</Link>
                </div>
            )}
        </div>

    );
};

export default MobileMenu;