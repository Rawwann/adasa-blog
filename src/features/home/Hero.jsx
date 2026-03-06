import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { FiArrowLeft, FiInfo } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa6";
import { FaUsers, FaPenNib, FaFolderOpen } from "react-icons/fa";
import GradientText from "../../components/ui/GradientText";
import SectionBadge from "../../components/ui/SectionBadge";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 min-h-[85vh] flex flex-col items-center justify-center border-b border-neutral-800/50 bg-grid-pattern overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="w-full flex justify-center">
          <SectionBadge>مرحباً بك في عدسة</SectionBadge>
        </div>
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          اكتشف <GradientText>فن</GradientText>
          <br />
          التصوير الفوتوغرافي
        </h1>

        <p className="text-center mx-auto text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24 w-full justify-center">
          <Button
            as={Link}
            to="/blog"
            size="lg"
            className="bg-primary text-white font-bold px-8 rounded-full flex items-center justify-center gap-2 group w-full sm:w-auto h-14 hover:-translate-y-1 transition-all duration-200"
          >
            استكشف المقالات
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
          </Button>

          <Button
            as={Link}
            to="/about"
            size="lg"
            variant="bordered"
            className="border border-neutral-700 text-white hover:bg-primary/20 hover:border-primary hover:text-primary font-medium px-8 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto h-14 transition-all duration-200 group"
          >
            <FiInfo className="text-white group-hover:text-primary transition-colors duration-200" />
            اعرف المزيد
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
          {[
            { label: "مقالة", value: "50+", icon: FaNewspaper },
            { label: "قارئ", value: "+10ألف", icon: FaUsers },
            { label: "تصنيفات", value: "4", icon: FaFolderOpen },
            { label: "كُتاب", value: "6", icon: FaPenNib },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f]/80 backdrop-blur-md border border-neutral-800 hover:border-neutral-700 transition-colors rounded-3xl p-6 flex flex-col items-center text-center group"
            >
              <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-primary mb-1">
                {stat.value}
              </h4>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
