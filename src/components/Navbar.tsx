import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 h-12 text-red-500 border-b-2 border-b-red-500 uppercase">
      {/* Logo */}
      <div className="text-xl font-semibold">
        <Link href={"/"}>GetFoody</Link>
      </div>
      {/* Mobile Menu */}
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
