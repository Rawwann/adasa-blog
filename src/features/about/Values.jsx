import { FiTarget } from "react-icons/fi";
import { FaBolt, FaHandshake, FaArrowsRotate } from "react-icons/fa6";

export default function Values() {
  const values = [
    {
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة",
      icon: FiTarget,
    },
    {
      title: "تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: FaBolt,
    },
    {
      title: "المجتمع",
      desc: "تعلم مع آلاف المصورين",
      icon: FaHandshake,
    },

    {
      title: "دائماً محدث",
      desc: "أحدث الاتجاهات وأفضل الممارسات",
      icon: FaArrowsRotate,
    },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="block w-1.5 h-8 bg-gradient-to-b from-primary to-[#ffaa6c] rounded-full"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">قيمنا</h2>
            <span className="block w-1.5 h-8 bg-gradient-to-b from-primary to-[#ffaa6c] rounded-full"></span>
          </div>
          <p className="text-neutral-500">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={i}
              className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative">
                <val.icon className="text-4xl text-orange-500 mb-4 mx-auto block" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {" "}
                  {val.title}{" "}
                </h3>
                <p className="text-neutral-400 text-sm"> {val.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
