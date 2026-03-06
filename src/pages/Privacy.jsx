import { Link } from "react-router-dom";
import { FiFileText, FiMail, FiChevronLeft } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";



export default function Privacy() {
    const sections = [
        {
            id: "1",
            title: "مقدمة",
            content: "مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك."
        },
        {
            id: "2",
            title: "المعلومات التي نجمعها",
            content: "نحن نجمع أنواعاً مختلفة من المعلومات لأغراض مختلفة لتزويدك بخدمتنا وتحسينها وتطوير تجربة المستخدم:",
            list: [
                { label: "بيانات الهوية:", desc: "تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه." },
                { label: "بيانات الاتصال:", desc: "تشمل عنوان البريد الإلكتروني." },
                { label: "البيانات التقنية:", desc: "تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل." },
                { label: "بيانات الاستخدام:", desc: "تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا." }
            ]
        },
        {
            id: "3",
            title: "كيف نستخدم معلوماتك",
            content: "تستخدم عدسة البيانات التي يتم جمعها لأغراض تقديم أفضل خدمة ممكنة، وتشمل:",
            list: [
                "لتقديم خدمتنا والحفاظ عليها",
                "لإخطارك بالتغييرات في خدمتنا",
                "لتقديم دعم العملاء",
                "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا",
                "لمراقبة استخدام خدمتنا",
                "لاكتشاف ومنع ومعالجة المشاكل التقنية"
            ]
        },
        {
            id: "4",
            title: "ملفات تعريف الارتباط",
            content: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا."
        },
        {
            id: "5",
            title: "أمان البيانات",
            content: "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة."
        },
        {
            id: "6",
            title: "حقوقك",
            content: "بموجب ظروف معينة، لديك حقوق بموجب قوانين حماية البيانات فيما يتعلق ببياناتك الشخصية، ومنها:",
            list: [
                "طلب الوصول إلى بياناتك الشخصية",
                "طلب تصحيح بياناتك الشخصية",
                "طلب مسح بياناتك الشخصية",
                "الاعتراض على معالجة بياناتك الشخصية",
                "طلب تقييد معالجة بياناتك الشخصية",
                "الحق في سحب الموافقة"
            ]
        }
    ];

    return (
        <div className="min-h-screen pb-20">


            <section className="bg-[#0c0c0c] border-b border-neutral-800 pt-32 pb-24 bg-grid-pattern relative overflow-hidden text-center">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-neutral-500 mb-8">
                        <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
                        <FiChevronLeft className="w-4 h-4" />
                        <span className="text-primary">سياسة الخصوصية </span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                        <FiFileText className="w-8 h-8" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        سياسة الخصوصية
                    </h1>
                    <p className="text-neutral-500">
                        آخر تحديث: 15 يناير 2026
                    </p>
                </div>
            </section>


            <section className="container mx-auto px-4 py-16 max-w-4xl relative z-10 -mt-10">


                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-16 flex items-start gap-4">
                    <HiOutlineShieldCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-primary font-bold mb-2">خصوصيتك تهمنا</h3>
                        <p className="text-primary-400 text-sm leading-relaxed">
                            نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
                        </p>
                    </div>
                </div>


                <div className="space-y-16 pl-0 md:pl-20 relative">


                    <div className="hidden md:block absolute top-4 bottom-4 right-8 w-px bg-neutral-800"></div>

                    {sections.map((section) => (
                        <div key={section.id} className="relative group">


                            <div className="flex items-center gap-4 mb-4 relative z-10 md:absolute md:-right-14 md:top-0">
                                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg shrink-0 shadow-lg shadow-orange-500/20">
                                    {section.id}
                                </div>
                                <h2 className="text-2xl font-bold text-white md:hidden">{section.title}</h2>
                            </div>


                            <h2 className="hidden md:block text-2xl font-bold text-white mb-4 text-right pr-4">
                                {section.title}
                            </h2>

                            <div className="text-neutral-400 leading-relaxed text-right md:pr-4">
                                <p className="mb-4">{section.content}</p>

                                {section.list && (
                                    <ul className="space-y-4 mt-4">
                                        {section.list.map((item, index) => {
                                            const isDetailed = typeof item === 'object';

                                            return (
                                                <li key={index} className="flex items-start gap-3 group justify-start text-right">
                                                    <FaCheckCircle className="text-orange-500 w-5 h-5 shrink-0 mt-1" />

                                                    <p className="text-neutral-400 leading-relaxed">
                                                        {isDetailed ? (
                                                            <>
                                                                <span className="font-bold text-white ml-1">{item.label}</span>
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


                    <div className="relative group pt-8 border-t border-neutral-800/50">
                        <div className="flex items-center justify-end gap-4 mb-4 relative z-10 md:absolute md:-right-14 md:top-8">
                            <h2 className="text-2xl font-bold text-white md:hidden">تواصل معنا</h2>
                            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg shrink-0 shadow-lg shadow-orange-500/20">
                                7
                            </div>
                        </div>

                        <h2 className="hidden md:block text-2xl font-bold text-white mb-4 text-right pr-4">
                            تواصل معنا
                        </h2>

                        <div className="text-neutral-400 leading-relaxed text-right md:pr-4">
                            <p className="mb-6">
                                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
                            </p>
                            <a href="mailto:hello@adasah.com" className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-bold transition-colors">
                                <FiMail className="w-5 h-5" />
                                hello@adasah.com
                            </a>
                        </div>
                    </div>

                </div>


                <div className="mt-20 text-center border-t border-neutral-800/50 pt-10 text-neutral-500 text-sm">
                    باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً <Link to="/terms" className="text-primary hover:text-primary-400">شروط الخدمة</Link>.
                </div>

            </section>
        </div>
    );
}