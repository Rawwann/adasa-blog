import { Link } from "react-router-dom";
import { FiFolder, FiChevronLeft } from "react-icons/fi";
import { FaSun, FaUser, FaSlidersH } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import SectionHeader from "../../components/ui/SectionHeader";

const categoryIcons = {
  إضاءة: FaSun,
  بورتريه: FaUser,
  "مناظر طبيعية": FaMountainSun,
  تقنيات: FaSlidersH,
  معدات: FaSun,
};

export default function Categories({ categories }) {
  return (
    <section className="container mx-auto px-4 max-w-6xl border-t border-neutral-800/50 pt-20">
      <SectionHeader
        alignment="center"
        title="استكشف حسب الموضوع"
        subtitle="اعثر على محتوى مصمم حسب اهتماماتك"
        badge="التصنيفات"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.slice(0, 5).map((cat, i) => {
          const Icon = categoryIcons[cat.name] || FiFolder;
          return (
            <Link
              to={`/blog?category=${encodeURIComponent(cat.name)}`}
              key={i}
              className="relative bg-[#121212] border border-neutral-800 rounded-3xl p-8 min-w-[236px] flex flex-col items-center justify-center text-center transition-all group overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute center left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 z-20">
                <FiChevronLeft className="w-4 h-4 text-white" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <Icon className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  {cat.count} مقالة
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
