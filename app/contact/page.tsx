import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Moksha360",
  description: "Get in touch with Moksha360 for artist management, agency representation, or general inquiries in Bengaluru.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3D7500] mb-8 font-poppins">Contact Us</h1>
      <p className="text-lg font-opensans text-gray-700 max-w-3xl mb-12">
        Ready to take your music career to the next level? Fill out the form below.
      </p>
      {/* Contact Form component will go here */}
    </main>
  );
}
