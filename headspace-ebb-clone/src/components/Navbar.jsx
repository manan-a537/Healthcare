import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full bg-white py-5 px-8 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-[#2d2c2b] font-bold text-2xl flex items-center">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
            <circle cx="20" cy="20" r="20" fill="#F4A72E" />
            <path d="M15 15.5C15.8284 15.5 16.5 14.8284 16.5 14C16.5 13.1716 15.8284 12.5 15 12.5C14.1716 12.5 13.5 13.1716 13.5 14C13.5 14.8284 14.1716 15.5 15 15.5Z" fill="#344964" />
            <path d="M25 15.5C25.8284 15.5 26.5 14.8284 26.5 14C26.5 13.1716 25.8284 12.5 25 12.5C24.1716 12.5 23.5 13.1716 23.5 14C23.5 14.8284 24.1716 15.5 25 15.5Z" fill="#344964" />
            <path d="M20 25C23.5 25 26 22.5 26 22.5" stroke="#344964" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Docure.ai
        </Link>
        <div className="hidden md:flex space-x-6 ml-10">
          <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea]">For You</Link>
          <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea]">For Business</Link>
          <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea]">For Providers</Link>
          <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea]">Our Plans</Link>
          <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea]">Resources</Link>
          <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea]">About</Link>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="#" className="text-[#2d2c2b] hover:text-[#0040ea] hidden md:block">Log in</Link>
        <Link href="#" className="hidden md:block">
          <Button className="bg-[#0040ea] hover:bg-[#0036c7] text-white font-bold px-6 py-2 rounded-full text-sm shadow-lg">
            Help
          </Button>
        </Link>
        <Link href="#">
          <Button className="bg-[#0040ea] hover:bg-[#0036c7] text-white font-bold px-6 py-2 rounded-full text-sm shadow-lg">
            Try for free
          </Button>
        </Link>
      </div>
    </nav>
  );
}
