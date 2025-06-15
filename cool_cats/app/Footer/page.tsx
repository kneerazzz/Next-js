import React from "react";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-black/85 text-gray-300 py-10 shadow-lg mt-5">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4 border-b-2 border-pink-600 inline-block pb-1">Company</h2>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/program" className="hover:text-white">Affilliate Program</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4 border-b-2 border-pink-600 inline-block pb-1">Get Help</h2>
                    <ul className="space-y-2">
                        <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link href="/shopping" className="hover:text-white">Shopping</Link></li>
                        <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
                        <li><Link href="/orderstatus" className="hover:text-white">Order Status</Link></li>
                        <li><Link href="/payment" className="hover:text-white">Payment Options</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-semibold text-lg mb-4 border-b-2 border-pink-600 inline-block pb-1">Cool Cats</h2>
                    <ul className="space-y-2">
                        <li><Link href="/create" className="hover:text-white">Create Meme</Link></li>
                        <li><Link href="/memes" className="hover:text-white">Memes</Link></li>
                        <li><Link href="/reference" className="hover:text-white">Reference</Link></li>
                        <li><Link href="/explore" className="hover:text-white">Explore</Link></li>

                    </ul>
                </div>
                <div className="">
                    <h2 className="text-white border-b-2 font-semibold text-lg border-pink-600 inline-block pb-1 mb-4">Follow Us</h2>

                    <div className="flex space-x-4 mt-4">
                        <Link href="https://facebook.com" target="_blank" className="bg-gray-700 hover:bg-pink-600 text-white transition duration-300 p-2 rounded-full">
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link href="https://x.com" target="_blank" className="bg-gray-700 hover:bg-pink-600 text-white transition duration-300 p-2 rounded-full"><i className="fab fa-twitter"></i></Link>


                        <Link href="https://instagram.com" target="_blank" className="rounded-full bg-gray-700 hover:bg-pink-600 text-white transition duration-300 p-2"><i className="fab fa-instagram"></i></Link>


                        <Link href="https://linkdin.com" target="_blank" className="text-white bg-gray-700 hover:bg-pink-600 transition duration-300 rounded-full p-2"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                  </div>
            </div>
        </footer>
    )
}