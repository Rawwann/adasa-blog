import { FiAlertTriangle, FiX } from "react-icons/fi";
import { termsSections } from "../constants/legalContent";
import PolicyLayout from "../layouts/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout
      title="شروط الخدمة"
      lastUpdated="15 يناير 2026"
      footerText="باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً"
      footerLinkTo="/privacy"
      footerLinkText="سياسة الخصوصية"
      introNode={
        /* Intro Notice */
        <div className="bg-[#1a1500] border border-[#332a00] rounded-2xl p-6 mb-16 flex items-start gap-4">
          <FiAlertTriangle className="text-[#ffb700] w-6 h-6 shrink-0 mt-1" />
          <div>
            <h3 className="text-[#ffb700] font-bold mb-2">إشعار مهم</h3>
            <p className="text-[#cc9200] text-sm leading-relaxed">
              يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو
              استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </div>
        </div>
      }
    >
      {/* Sections Mapping */}
      {termsSections.map((section) => (
        <div key={section.id} className="relative group">
          <div className="flex items-center justify-start gap-4 mb-4 relative z-10 md:absolute md:-right-14 md:top-0 text-right">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg shrink-0 shadow-lg shadow-orange-500/20">
              {section.id}
            </div>
            <h2 className="text-2xl font-bold text-white md:hidden text-right">
              {section.title}
            </h2>
          </div>

          <h2 className="hidden md:block text-2xl font-bold text-white mb-4 text-right pr-4">
            {section.title}
          </h2>

          <div className="text-neutral-400 leading-relaxed text-right md:pr-4">
            <p className="mb-4">{section.content}</p>

            {section.subContent && (
              <p className="mb-4 text-neutral-300">{section.subContent}</p>
            )}

            {section.list && (
              <ul className="space-y-3 mt-4">
                {section.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiX className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </PolicyLayout>
  );
}
