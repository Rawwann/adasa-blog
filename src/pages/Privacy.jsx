import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { privacySections } from "../constants/legalContent";
import PolicyLayout from "../layouts/PolicyLayout";

export default function Privacy() {
  return (
    <PolicyLayout
      title="سياسة الخصوصية"
      lastUpdated="15 يناير 2026"
      footerText="باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً"
      footerLinkTo="/terms"
      footerLinkText="شروط الخدمة"
      introNode={
        /* Intro Notice */
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-16 flex items-start gap-4">
          <HiOutlineShieldCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
          <div>
            <h3 className="text-primary font-bold mb-2">خصوصيتك تهمنا</h3>
            <p className="text-primary-400 text-sm leading-relaxed">
              نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
            </p>
          </div>
        </div>
      }
    >
      {/* Sections Mapping */}
      {privacySections.map((section) => (
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

            {section.list && (
              <ul className="space-y-4 mt-4">
                {section.list.map((item, index) => {
                  const isDetailed = typeof item === "object";
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 group justify-start text-right"
                    >
                      <FaCheckCircle className="text-orange-500 w-5 h-5 shrink-0 mt-1" />

                      <p className="text-neutral-400 leading-relaxed">
                        {isDetailed ? (
                          <>
                            <span className="font-bold text-white ml-1">
                              {item.label}
                            </span>
                            <span>{item.desc}</span>
                          </>
                        ) : (
                          item
                        )}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      ))}
    </PolicyLayout>
  );
}
