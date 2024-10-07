import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToogle";

const Navbar = () => {
  return (
    <nav className="p-4 background/50 sticky top-0  shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">Biyash blog</div>
        <div className="hidden flex-1 md:flex justify-center space-x-6 text-sm">
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/food"
            className="hover:text-blue-500 transition duration-300"
          >
            items
          </Link>
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-300"
          >
            orders
          </Link>
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 mr-6">
          <Button className="hover:bg-blue-500 hover:text-white transition duration-300">
            Login
          </Button>
          <Button className="hover:bg-blue-500 hover:text-white transition duration-300">
            Signup
          </Button>
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger>
            <div className=" md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Biyash blog</SheetTitle>
              <SheetDescription>
                <div className=" flex flex-col  space-y-6 text-lg items-center">
                  <Link href="/">Home</Link>
                  <Link href="/">foods</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Contact</Link>
                  <div className=" flex flex-col items-center space-y-4  ">
                    <Button>Login</Button>
                    <Button>Signup</Button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
