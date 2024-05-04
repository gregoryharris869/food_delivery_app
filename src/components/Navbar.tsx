import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  // Temp user.
  const user = false;
  return (
    <nav className="md:h-24 flex justify-between items-center p-4 h-12 text-red-500 border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40 ">
      {/* Left Links */}
      <div className="hidden md:flex gap-8 flex-1">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-semibold flex-1 md:text-center">
        <Link href={"/"}>GetFoody</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-8 flex-1 justify-end">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png " alt="phone" width={20} height={20} />
          <span>123-456-7890</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
