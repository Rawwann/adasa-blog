import { Link } from "react-router-dom";
import { Button, Input } from "@heroui/react";
import { FiArrowLeft, FiInfo, FiFolder, FiChevronLeft, FiMail } from "react-icons/fi";
import { FaNewspaper, FaMountainSun } from "react-icons/fa6";
import { FaUsers, FaPenNib, FaFolderOpen, FaSun, FaSlidersH, FaUser } from "react-icons/fa";
import data from "../data/adasa-data.json";
import PostCard from "../components/postCard/PostCard";
import FeaturedPostCard from "../components/postCard/FeaturedPostCard";

const { posts, categories } = data;

const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
const recentPosts = posts.filter(p => !p.featured).slice(0, 3);

const categoryIcons = {
    "إضاءة": FaSun,
    "بورتريه": FaUser,
    "مناظر طبيعية": FaMountainSun,
    "تقنيات": FaSlidersH,
    "معدات": FaSun,
};

export default function Home() {
    return (
        <div className="dark bg-[#0f0f0f] text-white min-h-screen space-y-32 pb-20 relative">

            <section className="relative pt-24 pb-16 min-h-[85vh] flex flex-col items-center justify-center border-b border-neutral-800/50 bg-grid-pattern overflow-hidden">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                    <div className="w-full flex justify-center">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary mb-8 backdrop-blur-sm">
                            <div className="flex gap-1.5 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
                            </div>
                            <span> مرحباً بك في عدسة </span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        اكتشف {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffaa6c]">
                            فن
                        </span>
                        <br />
                        التصوير الفوتوغرافي
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-24 w-full justify-center">

                        <Button
                            as={Link}
                            to="/blog"
                            size="lg"
                            className="
              bg-primary
              text-white font-bold px-8
              rounded-full
              flex items-center gap-2 group
              w-full sm:w-auto h-14
              hover:-translate-y-1
              transition-all duration-200
            "
                        >
                            استكشف المقالات
                            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
                        </Button>


                        <Button
                            as={Link}
                            to="/about"
                            size="lg"
                            variant="bordered"
                            className="
        border border-neutral-700
        text-white
        hover:bg-primary/20
        hover:border-primary
        hover:text-primary
        font-medium px-8
        rounded-full
        flex items-center gap-2
        w-full sm:w-auto h-14
        transition-all duration-200
        group
    "
                        >
                            <FiInfo className="text-white group-hover:text-primary transition-colors duration-200" />
                            اعرف المزيد
                        </Button>
                    </div>



                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
                        {[
                            { label: "مقالة", value: "50+", icon: FaNewspaper },
                            { label: "قارئ", value: "+10ألف", icon: FaUsers },
                            { label: "تصنيفات", value: "4", icon: FaFolderOpen },
                            { label: "كُتاب", value: "6", icon: FaPenNib },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#0f0f0f]/80 backdrop-blur-md border border-neutral-800 hover:border-neutral-700 transition-colors rounded-3xl p-6 flex flex-col items-center text-center group">
                                <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="text-2xl font-bold text-primary mb-1">{stat.value}</h4>
                                <p className="text-sm text-neutral-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary mb-8 backdrop-blur-sm">
                            <div className="flex gap-1.5 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
                            </div>
                            <span> مميز </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            مقالات مختارة
                        </h2>
                        <p className="text-neutral-400">محتوى منتقى لبدء رحلة تعلمك</p>
                    </div>
                    <Button
                        as={Link}
                        to="/blog?featured=true"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 border-none"
                    >
                        عرض الكل
                        <FiChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="flex flex-col gap-10">
                    {featuredPosts.map((post) => (
                        <FeaturedPostCard key={post.id} post={post} />
                    ))}
                </div>
            </section>


            <section className="container mx-auto px-4 max-w-6xl border-t border-neutral-800/50 pt-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary mb-8 backdrop-blur-sm">
                        <div className="flex gap-1.5 items-center">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
                        </div>
                        <span> التصنيفات </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">استكشف حسب الموضوع</h2>
                    <p className="text-neutral-400">اعثر على محتوى مصمم حسب اهتماماتك</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.slice(0, 5).map((cat, i) => {
                        const Icon = categoryIcons[cat.name] || FiFolder;

                        return (
                            <Link
                                to={`/blog?category=${encodeURIComponent(cat.name)}`}
                                key={i}
                                className="relative bg-[#121212] border border-neutral-800 rounded-3xl p-8 min-w-[236px] flex flex-col items-center justify-center text-center transition-all group overflow-hidden hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute center left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 z-20">
                                    <FiChevronLeft className="w-4 h-4 text-white" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center">

                                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                        <Icon className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                                        {cat.name}
                                    </h3>
                                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                                        {cat.count} مقالة
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>


            <section className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-t border-neutral-800/50 pt-20">
                    <div className="text-center md:text-right">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary mb-8 backdrop-blur-sm">
                            <div className="flex gap-1.5 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
                            </div>
                            <span> الأحدث </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">أحدث المقالات</h2>
                        <p className="text-neutral-400">محتوى جديد طازج من المطبعة</p>
                    </div>
                    <Link
                        to="/blog"
                        className="text-primary hover:text-primary-400 font-bold flex items-center gap-2 group transition-colors"
                    >
                        عرض جميع المقالات
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </section>




            <section className="container mx-auto px-4 max-w-5xl mb-12">
                <div className="bg-[#121212] border border-neutral-800 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-primary/20">
                            <FiMail className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">اشترك في {""}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffaa6c]">
                                نشرتنا الإخبارية
                            </span>
                        </h2>
                        <p className="text-lg text-neutral-400 mb-10">
                            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8" onSubmit={e => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="أدخل بريدك الإلكتروني"
                                classNames={{
                                    inputWrapper: "h-14 bg-[#161616] border-[#262626] border-1 rounded-xl focus-within:!border-primary focus-within:!ring-0 focus-within:!ring-offset-0 outline-none transition-all duration-300 px-6",
                                    input: "text-sm text-white placeholder:text-neutral-600 outline-none",
                                }}
                                radius="full"
                            />
                            <Button type="submit" className="h-14 px-8 bg-primary hover:bg-primary-600 text-white font-bold rounded-[14px] text-base shrink-0">
                                اشترك الآن
                            </Button>
                        </form>

                        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 flex-wrap">
                            <div className="flex -space-x-2 space-x-reverse mr-2 border-l border-neutral-800 pl-4">
                                {[
                                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face",
                                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
                                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                                ].map((avatar, i) => (
                                    <img key={i} src={avatar} alt="Subscriber" className="w-8 h-8 rounded-full border-2 border-[#121212]" />
                                ))}
                            </div>
                            <span className="flex items-center gap-2 font-medium text-neutral-400">
                                انضم لـ <span className="text-white font-bold tracking-tight">10,000+</span> مصور
                                <span className="w-1 h-1 rounded-full bg-neutral-700 mx-1"></span>
                            </span>
                            <span className="flex items-center gap-2">
                                بدون إزعاج
                                <span className="w-1 h-1 rounded-full bg-neutral-700 mx-1"></span>
                            </span>
                            <span>
                                إلغاء الاشتراك في أي وقت
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
