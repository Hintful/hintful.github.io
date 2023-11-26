'use client'

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
    const items = [
        // {
        //     name: "About",
        //     link: "/about"
        // },
        {
            name: "Project",
            link: "/project"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    return (
        <div>
            { /* Top nav bar */ }
            <nav className="py-8 w-full left-0 top-0 fixed z-10 blur-backdrop">
                <div className="container max-w-3xl mx-auto h-full px-12 pt-2">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <div>
                            {/* Full size menu */}
                            <ul className="hidden md:flex gap-x-6 text-slate-200 text-sm font-semibold">
                                {
                                    items.map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={item.link}>
                                                <p className="hover:text-slate-600 transition duration-75 ease-in-out">{item.name}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>

                            { /* Hamburger menu button */ }
                            <div className="flex md:hidden">
                                <div className="text-slate-200 font-semibold border p-2.5 rounded-md hover:bg-white/10"
                                    onClick={() => setHamburgerMenu(!hamburgerMenu)}
                                >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512" fill="#ffffff">
                                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </nav>
            { /* Hamburger menu */ }
            <div className={`border-white top-24 right-12 p-3 rounded-lg z-20 backdrop-blur-md bg-white/5 shadow-lg ${hamburgerMenu ? 'fixed' : 'hidden'}`}>
                <div>
                    <ul className="text-slate-200 text-sm font-semibold ">
                        {
                            items.map((item, idx) => (
                                <li className="px-1 py-1.5" key={idx}>
                                    <Link href={item.link}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        
     );
}
 
export default Navbar;