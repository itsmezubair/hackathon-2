"use client"; // Add this line at the top of the file

import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react"; // Now works after the "use client" directive
import { IoMenu, IoClose } from "react-icons/io5"; // Importing hamburger and close icons

export default function Header() {
  // State to manage the hamburger menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar p-4 bg-white flex justify-between items-center border-b-2 border-gray-300">
        {/* Logo Section */}
        <div className="logo flex-shrink-0">
          <Image src={Logo} width={215} height={170} alt="Logo" />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="navbtns hidden sm:block">
          <ul className="flex space-x-6">
            <Link href={"/"}>
              <li className="hover:underline">Home</li>
            </Link>
            <Link href={"/shop"}>
              <li className="hover:underline">Shop</li>
            </Link>
            <Link href={"/blog"}>
              <li className="hover:underline">Blog</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:underline">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Icons Section (Always Visible) */}
        <div className="icons flex space-x-6">
          <MdPersonOutline />
          <CiSearch  />
          <GoHeart />
          <AiOutlineShoppingCart  />
        </div>

        {/* Mobile Hamburger Menu (Toggle) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            {menuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${menuOpen ? "block" : "hidden"} bg-white p-4 transition-all duration-300 ease-in-out`}>
        <ul className="space-y-4">
          <Link href={"/"}>
            <li className="hover:underline">Home</li>
          </Link>
          <Link href={"/shop"}>
            <li className="hover:underline">Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li className="hover:underline">Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:underline">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
