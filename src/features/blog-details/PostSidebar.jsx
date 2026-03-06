import { Link } from "react-router-dom";
import { FiList, FiCalendar, FiClock, FiMail } from "react-icons/fi";
import { Button } from "@heroui/react";

export default function PostSidebar({ toc, dateStr, readTime }) {
  return (
    <aside className="lg:col-span-3 order-2 space-y-4">
      <div className="sticky top-24 space-y-4">
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-5 hidden lg:block">
          <h3 className="text-base font-bold text-white mb-6 flex items-center justify-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-primary">
              <FiList className="w-4 h-4" />
            </div>
            محتويات المقال
          </h3>
          <ul className="space-y-1" dir="rtl">
            {toc.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors shrink-0">
                    {i + 1}
                  </span>

                  <span className="line-clamp-1 text-right flex-1 font-medium text-sm">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-4 text-center">
            <FiCalendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-bold text-white leading-snug">
              {dateStr}
            </p>
            <p className="text-xs text-neutral-500 mt-1">تاريخ النشر</p>
          </div>
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-4 text-center">
            <FiClock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-bold text-white">{readTime}</p>
            <p className="text-xs text-neutral-500 mt-1">وقت القراءة</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1a1208] to-[#0f0f0f] border border-primary/20 rounded-2xl p-5 text-center">
          <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-3">
            <FiMail className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-white mb-1 text-sm">لا تفوّت جديدنا</h4>
          <p className="text-xs text-neutral-400 mb-4">
            اشترك للحصول على أحدث المقالات
          </p>
          <Button
            as={Link}
            to="/"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-sm h-10"
          >
            تصفح المزيد
          </Button>
        </div>
      </div>
    </aside>
  );
}
