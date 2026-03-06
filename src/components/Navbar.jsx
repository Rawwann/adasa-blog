import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Button } from "@heroui/react";

export default function Navbar() {
    const navLinks = [
        { name: "الرئيسية", path: "/" },
        { name: "المدونة", path: "/blog" },
        { name: "من نحن", path: "/about" },
    ];

    return (
        <nav className="border-b border-neutral-800 bg-dark/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-20 h-20 flex items-center justify-between">


                <Link to="/" className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full text-primary">
                        <img src="\logo-GdqARQRt.png" alt="3dasa-logo" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-wide">عدسة</h1>
                        <p className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                            عالم التصوير الفوتوغرافي
                        </p>
                    </div>
                </Link>



                <div className="hidden md:flex items-center gap-2 bg-dark-lighter rounded-full px-2 py-1 border border-neutral-800">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                    ? "bg-primary text-white"
                                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>


                <div className="flex items-center gap-4">
                    <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                        <FiSearch className="w-5 h-5" />
                    </button>

                    <Link to="/blog" className="flex items-center gap-3">
                        <Button
                            className="bg-primary hover:-translate-y-1 text-white font-medium rounded-full px-6 transition-all duration-300"
                        >

                            ابدأ القراءة
                        </Button>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
