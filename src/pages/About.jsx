import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import {
    FiTarget,
    FiMail
} from "react-icons/fi";
import { FaBolt, FaHandshake, FaArrowsRotate, FaNewspaper, FaBookOpen, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaUsers, FaPenNib } from "react-icons/fa";
import data from "../data/adasa-data.json";

export default function About() {


    const uniqueAuthorsMap = new Map();
    data.posts.forEach(post => {
        if (post.author && !uniqueAuthorsMap.has(post.author.name)) {
            uniqueAuthorsMap.set(post.author.name, post.author);
        }
    });
    const teamMembers = Array.from(uniqueAuthorsMap.values());

    const stats = [
        { value: "+2مليون", label: "قارئ شهرياً", icon: FaUsers },
        { value: "500+", label: "مقالة منشورة", icon: FaNewspaper },
        { value: "50+", label: "كاتب خبير", icon: FaPenNib },
        { value: "15+", label: "تصنيف", icon: FaBookOpen },
    ];

    const values = [
        {
            title: "الجودة أولاً",
            desc: "محتوى مدروس ومكتوب بخبرة",
            icon: FiTarget
        },
        {
            title: "تركيز عملي",
            desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
            icon: FaBolt
        },
        {
            title: "المجتمع",
            desc: "تعلم مع آلاف المصورين",
            icon: FaHandshake

        },

        {
            title: "دائماً محدث",
            desc: "أحدث الاتجاهات وأفضل الممارسات",
            icon: FaArrowsRotate
        }

    ];

    return (
        <div className="min-h-screen pb-0">


            <section className="bg-[#0c0c0c] border-b border-neutral-800 pt-20 pb-20 bg-grid-pattern relative overflow-hidden">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="w-full flex justify-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary mb-8 backdrop-blur-sm">
                            <div className="flex gap-1.5 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
                            </div>
                            <span>من نحن</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        مهمتنا هي {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffaa6c]">
                            الإعلام والإلهام
                        </span>
                    </h1>

                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-16">
                        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
                        لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
                        خلال محتوى عالي الجودة.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 flex flex-col items-center justify-center transition-all">
                                <stat.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-sm text-neutral-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <span className="block w-1.5 h-8 bg-gradient-to-b from-primary to-[#ffaa6c] rounded-full"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">قيمنا</h2>
                            <span className="block w-1.5 h-8 bg-gradient-to-b from-primary to-[#ffaa6c] rounded-full"></span>
                        </div>
                        <p className="text-neutral-500">المبادئ التي توجه كل ما نقوم بإنشائه</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <div key={i} className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">

                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                                <div className="relative">
                                    <val.icon className="text-4xl text-orange-500 mb-4 mx-auto block" />
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors"> {val.title} </h3>
                                    <p className="text-neutral-400 text-sm"> {val.desc} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 bg-[#0a0a0a] border-t border-neutral-800/50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-neutral-900/50 text-xs font-bold text-primary mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse"></span>
                            فريقنا
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">تعرف على كتابنا</h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">

                                <div className="relative mb-6">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-[#161616] group-hover:scale-105 group-hover:border-primary/20 transition-all duration-300"
                                    />
                                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-primary border-2 border-[#121212] rounded-full flex items-center justify-center text-white">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-primary">
                                    {member.name}
                                </h3>

                                <p className="text-sm font-medium text-primary mb-6">{member.role}</p>

                                <div className="flex items-center gap-3">
                                    <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-black transition-colors"><FaXTwitter className="w-4 h-4" /></a>
                                    <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-[#333] transition-colors"><FaGithub className="w-4 h-4" /></a>
                                    <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-[#0077b5] transition-colors"><FaLinkedinIn className="w-4 h-4" /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">                <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    لديك أسئلة؟ دعنا نتحدث!
                </h2>
                <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-[#121212] text-white hover:bg-black border-none px-8 font-bold h-14 rounded-xl flex items-center gap-2 w-full sm:w-auto transition-all duration-300 hover:-translate-y-1"
                    >
                        <FiMail className="w-5 h-5" />
                        تواصل معنا
                    </Button>
                    <Button
                        size="lg"
                        variant="bordered"
                        as={Link}
                        to="/blog"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 w-full sm:w-auto"
                    >
                        تصفح المقالات
                    </Button>
                </div>
            </div>
            </section>

        </div>
    );
}
