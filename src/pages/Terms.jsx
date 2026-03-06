import { Link } from "react-router-dom";
import { FiFileText, FiAlertTriangle, FiX, FiMail, FiChevronLeft } from "react-icons/fi";

export default function Terms() {
    const sections = [
        {
            id: "1",
            title: "الموافقة على الشروط",
            content: "بالوصول، أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه."
        },
        {
            id: "2",
            title: "رخصة الاستخدام",
            content: "يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص، وليس نقل ملكية.",
            list: [
                "تعديل أو نسخ المواد",
                "استخدام المواد لأي غرض تجاري أو للعرض العام",
                "محاولة فك أو عكس هندسة أي برنامج على الموقع",
                "إزالة أي حقوق نشر أو علامات ملكية من المواد",
                "نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر"
            ]
        },
        {
            id: "3",
            title: "إخلاء المسؤولية",
            content: "المواد الموجودة على موقع عدسة مقدمة على أساس \"كما هي\". عدسة لا تقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى."
        },
        {
            id: "4",
            title: "القيود",
            content: "في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع."
        },
        {
            id: "5",
            title: "محتوى المستخدم",
            content: "إذا نشرت محتوى على موقعنا (مثل، التعليقات)، فإنك تمنحنا ترخيصاً غير حصري، وعالمي، ومجاني، لاستخدام هذا المحتوى، وإعادة إنتاجه، وتعديله، وتوزيعه.",
            subContent: "يجب ألا يكون محتواك:",
            list: [
                "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
                "انتهاك حقوق الملكية الفكرية للآخرين",
                "احتواء فيروسات أو أكواد ضارة",
                "انتهاك أي قوانين أو لوائح معمول بها",
                "الإعلان عن منتجات أو خدمات غير مصرح بها"
            ]
        },
        {
            id: "6",
            title: "التعديلات",
            content: "قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة."
        }
    ];

    return (
        <div className="min-h-screen pb-20">


            <section className="bg-[#0c0c0c] border-b border-neutral-800 pt-32 pb-24 bg-grid-pattern relative overflow-hidden text-center">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-neutral-500 mb-8">
                        <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
                        <FiChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-primary">شروط الخدمة</span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                        <FiFileText className="w-8 h-8" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        شروط الخدمة
                    </h1>
                    <p className="text-neutral-500">
                        آخر تحديث: 15 يناير 2026
                    </p>
                </div>
            </section>


            <section className="container mx-auto px-4 py-16 max-w-4xl relative z-10 -mt-10">


                <div className="bg-[#1a1500] border border-[#332a00] rounded-2xl p-6 mb-16 flex items-start gap-4">
                    <FiAlertTriangle className="text-[#ffb700] w-6 h-6 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-[#ffb700] font-bold mb-2">إشعار مهم</h3>
                        <p className="text-[#cc9200] text-sm leading-relaxed">
                            يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
                        </p>
                    </div>
                </div>


                <div className="space-y-16 pl-0 md:pl-20 relative">


                    <div className="hidden md:block absolute top-4 bottom-4 right-8 w-px bg-neutral-800"></div>

                    {sections.map((section) => (
                        <div key={section.id} className="relative group">


                            <div className="flex items-center gap-4 mb-4 relative z-10 md:absolute md:-right-14 md:top-0">
                                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg shrink-0 shadow-lg shadow-orange-500/20">                                    {section.id}
                                </div>
                                <h2 className="text-2xl font-bold text-white md:hidden">{section.title}</h2>
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


                    <div className="relative group pt-8 border-t border-neutral-800/50">
                        <div className="flex items-center justify-end gap-4 mb-4 relative z-10 md:absolute md:-right-14 md:top-8">
                            <h2 className="text-2xl font-bold text-white md:hidden">معلومات الاتصال</h2>
                            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg shrink-0 shadow-lg shadow-orange-500/20">
                                7
                            </div>
                        </div>

                        <h2 className="hidden md:block text-2xl font-bold text-white mb-4 text-right pr-4">
                            معلومات الاتصال
                        </h2>

                        <div className="text-neutral-400 leading-relaxed text-right md:pr-4">
                            <p className="mb-6">
                                إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا.
                            </p>
                            <a href="mailto:hello@adasah.com" className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-bold transition-colors">
                                <FiMail className="w-5 h-5" />
                                hello@adasah.com
                            </a>
                        </div>
                    </div>

                </div>


                <div className="mt-20 text-center border-t border-neutral-800/50 pt-10 text-neutral-500 text-sm">
                    باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً <Link to="/privacy" className="text-primary hover:text-primary-400">سياسة الخصوصية</Link>.
                </div>

            </section>
        </div>
    );
}
