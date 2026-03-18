import Link from "next/link";
import { Button } from "./Button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3D7500] to-[#13AFF0] p-[2px] shadow-[0_0_20px_rgba(19,175,240,0.3)] group-hover:shadow-[0_0_30px_rgba(19,175,240,0.6)] transition-all duration-500">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
              <span className="text-white font-bold font-poppins text-lg">M</span>
            </div>
          </div>
          <span className="text-3xl font-bold font-poppins text-white tracking-tight">Moksha<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7500] to-[#13AFF0]">360</span></span>
        </Link>
        <nav className="hidden md:flex gap-10 items-center">
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Insights</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary" size="md">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
