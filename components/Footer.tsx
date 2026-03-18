import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-[#E5E5E5]">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins text-[#3D7500]">Moksha360</h3>
            <p className="text-sm text-gray-600">Bengaluru's premier artist management and entertainment company.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-[#13AFF0]">About</Link></li>
              <li><Link href="/services" className="hover:text-[#13AFF0]">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#13AFF0]">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-black">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Bengaluru, Karnataka</li>
              <li>contact@moksha360.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Moksha360. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
