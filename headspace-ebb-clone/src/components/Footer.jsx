import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="bg-headspace-light-orange py-16 px-6 md:px-10 lg:px-20">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-headspace-dark-blue mb-10">
            Chat with Elivia
          </h2>
          <Button className="headspace-button text-lg px-12">
            Try Docure.ai for free
          </Button>
        </div>
      </div>

      <div className="py-16 px-6 md:px-10 lg:px-20">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-headspace-dark-blue mb-6">Get Docure.ai</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Log in</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Sign up</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Download the app</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">About us</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-headspace-dark-blue mb-6">About us</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">About Headspace</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Our team</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Blog</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Press</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-headspace-dark-blue mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Help center</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">FAQs</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Terms & conditions</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Privacy policy</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Cookie policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-headspace-dark-blue mb-6">My Docure.ai</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Log in</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Get the app</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Account settings</Link></li>
              <li><Link href="#" className="text-sm text-headspace-dark-blue hover:text-headspace-blue">Redeem a code</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-16 pt-10 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8 mb-8 md:mb-0">
            <Link href="#" className="text-headspace-dark-blue hover:text-headspace-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link href="#" className="text-headspace-dark-blue hover:text-headspace-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" className="text-headspace-dark-blue hover:text-headspace-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Link>
            <Link href="#" className="text-headspace-dark-blue hover:text-headspace-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
          </div>
          <div className="text-sm text-headspace-dark-blue">
            &copy; 2025 Headspace Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
