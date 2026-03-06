import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المدونة", path: "/blog" },
    { name: "من نحن", path: "/about" },
  ];

  return (
    <nav className="border-b border-neutral-800 bg-dark/95 backdrop-blur-sm sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="container mx-auto px-20 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full text-primary">
            <img src="\logo-GdqARQRt.png" alt="شعار مدونة عدسة للتصوير" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">عدسة</h1>
            <p className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
              عالم التصوير الفوتوغرافي
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 bg-dark-lighter rounded-full px-2 py-1 border border-neutral-800">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="البحث"
            className="hidden md:block p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
          >
            <FiSearch className="w-5 h-5" />
          </button>

          <Link to="/blog" className="hidden sm:flex items-center gap-3">
            <Button className="bg-primary hover:-translate-y-1 text-white font-medium rounded-full px-6 transition-all duration-300">
              ابدأ القراءة
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="القائمة إظهار/إخفاء"
            className="md:hidden p-3 text-neutral-300 hover:text-white rounded-xl transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0c0c0c] border-b border-neutral-800 shadow-xl z-50 p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t border-neutral-800 my-2 pt-4 flex items-center justify-between px-2">
              <span className="text-neutral-400 text-sm font-medium">
                بحث في المدونة
              </span>
              <button
                aria-label="البحث"
                className="p-2 text-neutral-400 hover:text-primary rounded-lg transition-all bg-neutral-900"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              <Button className="w-full bg-primary text-white font-bold rounded-xl py-6 text-base shadow-lg shadow-primary/20">
                ابدأ القراءة الآن
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
