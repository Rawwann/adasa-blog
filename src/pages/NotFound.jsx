import { Link } from "react-router-dom";
import { FiHome, FiFileText, FiFrown } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      className="min-h-screen pb-20 pt-32 bg-[#0c0c0c] bg-grid-pattern relative overflow-hidden flex flex-col items-center justify-center text-center"
      dir="rtl"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center md:items-center text-center md:text-center px-4">
        <h1 className="text-[140px] md:text-[200px] font-extrabold leading-none text-gradient-primary mb-2 tracking-tighter">
          404
        </h1>

        <div className="relative flex items-center justify-center w-36 h-36 mb-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-primary"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-2 -left-3 w-4 h-4 rounded-full bg-primary"
          />
          <div className="w-32 h-32 rounded-full bg-[#2a1a06] border-1 border-primary flex items-center justify-center ">
            <FiFrown className="w-14 h-14 text-primary" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          عفواً! الصفحة غير موجودة
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed text-sm md:text-base">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center md:justify-start mb-16">
          <Link
            to="/"
            className="btn-gradient px-8 py-3.5 rounded-full font-bold text-white flex items-center gap-3 group hover:-translate-y-1 transition-transform w-full sm:w-auto justify-center"
          >
            <FiHome className="w-5 h-5 group-hover:scale-110 transition-transform" />
            الذهاب للرئيسية
          </Link>
          <Link
            to="/blog"
            className="px-8 py-3.5 rounded-full font-bold text-white flex items-center gap-3 border border-neutral-700 hover:border-neutral-500 transition-colors w-full sm:w-auto justify-center group bg-[#161616]/50 backdrop-blur-sm"
          >
            <FiFileText className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
            تصفح المقالات
          </Link>
        </div>

        <div className="border-t border-neutral-800/50 pt-8 w-full max-w-sm flex flex-col items-center md:items-start">
          <p className="text-neutral-500 text-xs mb-4">قد تجد هذه مفيدة:</p>
          <div className="flex items-center justify-center gap-6 text-sm font-medium">
            <Link
              to="/blog"
              className="text-primary hover:text-primary-400 transition-colors"
            >
              المدونة
            </Link>

            <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>

            <Link
              to="/about"
              className="text-primary hover:text-primary-400 transition-colors"
            >
              من نحن
            </Link>

            <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>

            <Link
              to="/privacy"
              className="text-primary hover:text-primary-400 transition-colors"
            >
              الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
