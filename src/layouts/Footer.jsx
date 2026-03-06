import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FiChevronLeft } from "react-icons/fi";
import { Button, Input } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-bold text-xl">
                ع
              </div>
              <span className="text-2xl font-bold text-white">عدسة</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex items-center gap-3">
              {[FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="block w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              استكشف
            </h3>
            <ul className="space-y-4">
              {["الرئيسية", "المدونة", "من نحن"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={
                      item === "الرئيسية"
                        ? "/"
                        : `/${item === "المدونة" ? "blog" : "about"}`
                    }
                    className="group flex items-center gap-2 text-neutral-400 hover:text-primary transition-all duration-300 text-sm"
                  >
                    <FiChevronLeft className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="block w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              التصنيفات
            </h3>
            <ul className="space-y-4">
              {["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/blog?category=${item}`}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-primary transition-all duration-300 text-sm"
                  >
                    <FiChevronLeft className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="block w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                classNames={{
                  inputWrapper:
                    "h-14 bg-[#161616] border-[#262626] border-1 rounded-xl focus-within:!border-primary focus-within:!ring-0 focus-within:!ring-offset-0 outline-none transition-all duration-300 px-6",
                  input:
                    "text-sm text-white placeholder:text-neutral-600 outline-none",
                }}
                radius="full"
              />
              <Button className="w-full bg-primary hover:bg-primary-600 text-white font-bold rounded-xl h-14 text-sm transition-all duration-300 hover:-translate-y-1">
                اشترك
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <span>© 2026 عدسة. صنع بكل</span>
            <span className="text-primary">♥</span>
            <span>جميع الحقوق محفوظة.</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-neutral-400">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors flex items-center gap-1 group"
            >
              سياسة الخصوصية
            </Link>

            <Link
              to="/terms"
              className="hover:text-primary transition-colors flex items-center gap-1 group"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
