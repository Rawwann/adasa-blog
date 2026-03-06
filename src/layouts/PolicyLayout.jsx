import { Link } from "react-router-dom";
import { FiFileText, FiChevronLeft, FiMail } from "react-icons/fi";

export default function PolicyLayout({
  title,
  lastUpdated,
  introNode,
  children,
  footerText,
  footerLinkTo,
  footerLinkText,
}) {
  return (
    <div className="min-h-screen pb-20">
      <section className="bg-[#0c0c0c] border-b border-neutral-800 pt-32 pb-24 bg-grid-pattern relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-neutral-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <FiChevronLeft className="w-4 h-4" />
            <span className="text-primary">{title}</span>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
            <FiFileText className="w-8 h-8" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {title}
          </h1>
          <p className="text-neutral-500">آخر تحديث: {lastUpdated}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-4xl relative z-10 -mt-10">
        {introNode}

        <div className="space-y-16 pl-0 md:pl-20 relative">
          <div className="hidden md:block absolute top-4 bottom-4 right-8 w-px bg-neutral-800"></div>

          {children}

          <div className="relative group pt-8 border-t border-neutral-800/50">
            <div className="flex items-center justify-start gap-4 mb-4 relative z-10 md:absolute md:-right-14 md:top-8 text-right">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg shrink-0 shadow-lg shadow-orange-500/20">
                7
              </div>
              <h2 className="text-2xl font-bold text-white md:hidden text-right">
                معلومات الاتصال
              </h2>
            </div>

            <h2 className="hidden md:block text-2xl font-bold text-white mb-4 text-right pr-4">
              معلومات الاتصال
            </h2>

            <div className="text-neutral-400 leading-relaxed text-right md:pr-4">
              <p className="mb-6">
                إذا كان لديك أي أسئلة حول {title} هذه، يرجى التواصل معنا:
              </p>
              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-bold transition-colors"
              >
                <FiMail className="w-5 h-5" />
                hello@adasah.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-neutral-800/50 pt-10 text-neutral-500 text-sm">
          {footerText}{" "}
          <Link
            to={footerLinkTo}
            className="text-primary hover:text-primary-400"
          >
            {footerLinkText}
          </Link>
          .
        </div>
      </section>
    </div>
  );
}
