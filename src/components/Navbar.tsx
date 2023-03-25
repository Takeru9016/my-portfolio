import Link from 'next/link';
import { useState } from 'react';
import { BiHomeAlt2, BiUser, BiBulb } from 'react-icons/bi';
import { IoMdCodeWorking } from 'react-icons/io';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  function handleLinkClick(id: any) {
    setActiveLink(id);
  }

  return (
    <>
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-4 left-1/2">
        <div className="flex justify-center items-center gap-20 md:gap-20 h-full max-w-lg mx-auto">
          <Link href="/">
            <div onClick={() => handleLinkClick("home")} className={`flex flex-col items-center justify-center cursor-pointer ${activeLink === "home" ? "text-pined" : "text-white"}`}>
              <BiHomeAlt2 className="h-6 w-6 md:hidden" />
              <p className="hidden md:block md:hover:rounded-full active:bg-vingo/25">About</p>
            </div>
          </Link>
          <Link href="/skills">
            <div onClick={() => handleLinkClick("skills")} className={`flex flex-col items-center justify-center cursor-pointer ${activeLink === "skills" ? "text-pined" : "text-white"}`}>
              <BiBulb className="h-6 w-6 md:hidden" />
              <p className="hidden md:block md:hover:rounded-full active:bg-vingo/25">Skills</p>
            </div>
          </Link>
          <Link href="/projects">
            <div onClick={() => handleLinkClick("projects")} className={`flex flex-col items-center justify-center cursor-pointer ${activeLink === "projects" ? "text-pined" : "text-white"}`}>
              <IoMdCodeWorking className="h-6 w-6 md:hidden" />
              <p className="hidden md:block md:hover:rounded-full active:bg-vingo/25">Projects</p>
            </div>
          </Link>
          <Link href="/contact">
            <div onClick={() => handleLinkClick("contact")} className={`flex flex-col items-center justify-center cursor-pointer ${activeLink === "contact" ? "text-pined" : "text-white"}`}>
              <BiUser className="h-6 w-6 md:hidden" />
              <p className="hidden md:block md:hover:rounded-full active:bg-vingo/25">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
