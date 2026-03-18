import Link from "next/link";
import { Button } from "./Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-poppins text-[#3D7500]">Moksha360</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/about" className="text-sm font-medium hover:text-[#13AFF0] transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium hover:text-[#13AFF0] transition-colors">Services</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[#13AFF0] transition-colors">Blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
          {/* Mobile menu button placeholder */}
          <button className="md:hidden p-2 text-gray-600">Menu</button>
        </div>
      </div>
    </header>
  );
}
