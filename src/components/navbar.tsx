"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { title } from "process";

const navLinks = [
    {title: "Home", path: "#top"},
    {title: "About", path: "#about"},
    {title: "Skills", path: "#skills"},
    {title: "Projects", path: "#portfolio"},
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x:0,
            transition : {
                stiffness: 50,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition : {
                stiffness: 50,
                damping: 15
            }
        }
    }

    return (
        <div className="">
        <div className="text-white/90 pt-3 md:flex items-center flex justify-between " id="top" > 
            <Link href="#top" className="hidden md:flex ml-10 font-bold text-2xl font-sans">
                Vansh Kapoor</Link>
            <div className="hidden md:flex items-center justify-center px-4 py-2 mx-auto max-w-[600px] ">
                <div className="border-2 border-white/70 rounded-full h-[40px] flex items-center ">
                    <ul className="flex flex-row p-0.5 space-x-3">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    id={link.title}
                                    className={` pt-[0.38rem] pb-[0.4rem] rounded-full p-1.5 hover:text-orange-400/80 hover:font-bold `}
                                    
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

            <Link
                href= "#contact"
                id="Contact"
                className="transition ease-in-out delay-0 bg-orange-400 text-black/90 font-bold rounded-2xl p-2 
                            hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 hover:text-black duration-150 ml-2 md:mr-10"
            >   
                Contact me
            </Link>

            <div onClick={toggleNav} className="md:hidden absolte top-5 right-5  text-white/70 
            border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
            </div>        

            <motion.div
                initial = {false}
                animate = {nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

            </motion.div>

        </div>
        </div>
    )
}

export default Navbar;

