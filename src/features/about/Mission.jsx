import { FaNewspaper } from "react-icons/fa6";
import { FaUsers, FaPenNib, FaBookOpen } from "react-icons/fa";
import SectionBadge from "../../components/ui/SectionBadge";
import GradientText from "../../components/ui/GradientText";

export default function Mission() {
  const stats = [
    { value: "+2مليون", label: "قارئ شهرياً", icon: FaUsers },
    { value: "500+", label: "مقالة منشورة", icon: FaNewspaper },
    { value: "50+", label: "كاتب خبير", icon: FaPenNib },
    { value: "15+", label: "تصنيف", icon: FaBookOpen },
  ];

  return (
    <section className="bg-[#0c0c0c] border-b border-neutral-800 pt-20 pb-20 bg-grid-pattern relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center md:items-start text-center md:text-start max-w-4xl">
        <div className="w-full flex justify-center md:justify-start">
          <SectionBadge>من نحن</SectionBadge>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          مهمتنا هي <GradientText>الإعلام والإلهام</GradientText>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-16">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
          ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 flex flex-col items-center justify-center transition-all"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
