import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#Projects", label: "Projects" },
  { href: "#About", label: "About" },
];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <div className="w-[92%] max-w-6xl bg-black border border-white/20 rounded-full px-6 py-3 shadow-lg shadow-[#fff1df] transition-shadow">
        {/* Desktop Nav */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex ">
            <a key="Home" href="#Home">
              <Stack>
                <Avatar className="cursor-pointer">M</Avatar>
              </Stack>
            </a>
            <h1 className="text-black font-bold text-lg tracking-wide px-1 m-1">
              Mohammed
            </h1>
          </div>

          {/* Links  */}
          {/* I'll remove the contact section now ! , "Contact" */}
          <ul className="hidden md:flex gap-8 text-black font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className=" text-black relative cursor-pointer group"
              >
                {link.label}

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </ul>

          {/* //////////////////////////////////////////////////:::: 
          // 
          
          this section here I'll modified from scratch and adding a better one than this 

          ////////////////::
          
          
          
          */}

          {/* Mobile Menu Button */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden p-1 text-white mt-0.5 bg-black rounded-lg focus:outline-none"
          >
            <MenuIcon className="mb-0.5" />
            <span className="">Menu</span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ${
            openMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-black text-center">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="py-2 border-b text-black border-white/10 cursor-pointer rounded"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 
        
        to this point 
        
        
        
        
        
        
        
        
        
        
        
        /////////////////////////////////// */}
      </div>
    </div>
  );
}
