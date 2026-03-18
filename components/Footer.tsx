import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 relative z-20">
      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-poppins text-white tracking-tight">Moksha<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7500] to-[#13AFF0]">360</span></h3>
            <p className="text-base text-gray-400 font-light leading-relaxed">Bengaluru's premier artist management and entertainment company pushing the boundaries of music-tech.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-base text-gray-400 font-light">
              <li><Link href="/about" className="hover:text-[#13AFF0] transition-colors hover:translate-x-1 inline-block transform duration-300">About</Link></li>
              <li><Link href="/services" className="hover:text-[#13AFF0] transition-colors hover:translate-x-1 inline-block transform duration-300">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#13AFF0] transition-colors hover:translate-x-1 inline-block transform duration-300">Blog & Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg tracking-wide">Contact</h4>
            <ul className="space-y-4 text-base text-gray-400 font-light">
              <li className="hover:text-white transition-colors">Bengaluru, Karnataka</li>
              <li className="hover:text-white transition-colors hover:text-[#3D7500]">contact@moksha360.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-gray-600 font-light">
          © {new Date().getFullYear()} Moksha360. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
