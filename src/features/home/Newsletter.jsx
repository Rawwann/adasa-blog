import { Button, Input } from "@heroui/react";
import { FiMail } from "react-icons/fi";
import GradientText from "../../components/ui/GradientText";

export default function Newsletter() {
  return (
    <section className="container mx-auto px-4 max-w-5xl mb-12">
      <div className="bg-[#121212] border border-neutral-800 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-primary/20">
            <FiMail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            اشترك في {""}
            <GradientText>نشرتنا الإخبارية</GradientText>
          </h2>
          <p className="text-lg text-neutral-400 mb-10">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
            onSubmit={(e) => e.preventDefault()}
          >
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
            <Button
              type="submit"
              className="h-14 px-8 bg-primary hover:bg-primary-600 text-white font-bold rounded-[14px] text-base shrink-0"
            >
              اشترك الآن
            </Button>
          </form>

          <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 flex-wrap">
            <div className="flex -space-x-2 space-x-reverse mr-2 border-l border-neutral-800 pl-4">
              {[
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
              ].map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt="صورة رمزية لأحد المشتركين"
                  className="w-8 h-8 rounded-full border-2 border-[#121212]"
                />
              ))}
            </div>
            <span className="flex items-center gap-2 font-medium text-neutral-400">
              انضم لـ{" "}
              <span className="text-white font-bold tracking-tight">
                10,000+
              </span>{" "}
              مصور
              <span className="w-1 h-1 rounded-full bg-neutral-700 mx-1"></span>
            </span>
            <span className="flex items-center gap-2">
              بدون إزعاج
              <span className="w-1 h-1 rounded-full bg-neutral-700 mx-1"></span>
            </span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}
