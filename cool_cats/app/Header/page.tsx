import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Header() {
    //const status  = useSelector((state: any) => state.user.status)
    const picture = "https://i.pinimg.com/736x/c5/b1/d3/c5b1d30cf3f31852453d6cd6512e85e8.jpg";
    return (
        <header className="bg-gray-200 rounded-lg shadow-md sticky top-0 z-50 mb-3">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"> 
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    <img src={picture} alt="Cool Cats" className="h-10 w-auto object-contain rounded-full"/>
                </Link>


                <div className="flex items-center border border-gray-400 rounded-full px-3 py-2 bg-white shadow-sm focus-within:ring-1 focus-within:ring-gray-500">
                    <input type="text" placeholder="Search" className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400" />
                    <button className="ml-2 cursor-pointer text-blue-600 hover:text-blue-800"><i className="fas fa-search"></i></button>
                </div>


                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/memes" className="text-gray-700 hover:text-blue-600 transition">
                        Memes
                    </Link>
                    <Link href="/create" className="text-gray-700 hover:text-blue transition">Create</Link>
                    <Link href="/Login" className="text-gray-700 hover:text-blue-600 transition">
                        Login
                    </Link>
                    <Link href="/SignUp" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md transition">
                        Signup
                    </Link>
                </div>
            </nav>
        </header>
    )
}