import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
    FiClock,
    FiCalendar,
    FiList,
    FiMail,
    FiShare2,
    FiTag,
    FiArrowRight,
    FiLink,
    FiHome,
    FiCamera,
} from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter, FaImages } from "react-icons/fa6";
import { Button } from "@heroui/react";

import data from "../data/adasa-data.json";
import PostCard from "../components/postCard/PostCard";

export default function BlogDetails() {
    const { id } = useParams();

    const post = data.posts.find(p => p.slug === id || p.id.toString() === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    const dateStr = post.date ? new Date(post.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
    const imgSrc = post.image || post.imageUrl;

    const parseContent = (content) => {
        const blocks = content.split('\n\n');
        const parsedBlocks = [];
        const toc = [];

        blocks.forEach((block, index) => {
            if (block.startsWith('## ')) {
                const title = block.replace('## ', '');
                const anchorId = `section-${index}`;
                toc.push({ id: anchorId, title });

                parsedBlocks.push(
                    <div key={index} id={anchorId} className="mt-12 mb-4 scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 justify-start">
                            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                                <FiCamera className="w-9 h-9 text-primary" />
                            </div>
                            {title}
                        </h2>
                    </div>
                );
            } else {
                parsedBlocks.push(
                    <p key={index} className="text-lg text-neutral-300 mb-6 leading-relaxed text-right">
                        {block}
                    </p>
                );
            }
        });

        return { parsedBlocks, toc };
    };

    const { parsedBlocks, toc } = parseContent(post.content || post.excerpt);

    const relatedPosts = data.posts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    if (relatedPosts.length < 3) {
        const morePosts = data.posts.filter(p => p.id !== post.id && !relatedPosts.includes(p));
        relatedPosts.push(...morePosts.slice(0, 3 - relatedPosts.length));
    }

    return (
        <div className="min-h-screen pb-20 bg-[#0c0c0c]" dir="rtl">


            <section className="relative pt-20 pb-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={imgSrc} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-black/30" />
                </div>


                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <Link to="/" className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1">
                        <FiHome className="w-4 h-4" />
                    </Link>
                    <span className="text-neutral-500">&gt;</span>
                    <Link to="/blog" className="text-neutral-300 hover:text-white transition-colors">المدونة</Link>
                    <span className="text-neutral-500">&gt;</span>
                    <span className="text-primary font-medium">{post.category}</span>
                </div>

                <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center justify-start gap-4 mb-6 pt-12">
                        <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-white text-sm">
                            <FiCalendar className="w-4 h-4" />
                            <span>{dateStr}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                            <FiClock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-tight text-right max-w-4xl mr-0 ml-auto">
                        {post.title}
                    </h1>

                    {post.author && (
                        <div className="flex justify-start">
                            <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-md border border-neutral-700 p-3 pr-3 pl-5 rounded-2xl">
                                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-xl object-cover border border-neutral-700" />
                                <div className="text-right">
                                    <p className="font-bold text-white text-base">{post.author.name}</p>
                                    <p className="text-xs text-neutral-400">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>


            <section className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">


                    <article className="lg:col-span-9 order-1">
                        <div className="border border-primary/20 bg-gradient-to-r bg-primary-800/10 p-6 md:p-8 rounded-2xl mb-10">
                            <p className="text-lg md:text-xl font-bold text-white leading-relaxed text-right">
                                "{post.excerpt}"
                            </p>
                        </div>

                        <div className="mb-12">
                            {parsedBlocks}
                        </div>

                        <div className="space-y-4">
                            {post.tags && post.tags.length > 0 && (
                                <div className="flex flex-col gap-6 bg-[#121212] border border-neutral-800 rounded-3xl p-8">

                                    <div className="flex items-center gap-3 font-bold text-white w-full">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border-primary/20 border-1">
                                            <FiTag className="w-5 h-5" />
                                        </div>
                                        الوسوم
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {post.tags.map(tag => (
                                            <Link
                                                key={tag}
                                                to={`/blog?search=${tag}`}
                                                className="text-sm bg-neutral-900 hover:bg-primary/10 border border-neutral-800 hover:border-primary px-5 py-2 rounded-xl text-neutral-400 hover:text-primary transition-all font-medium"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}


                            <div className="flex items-center gap-4 bg-[#121212] border border-neutral-800 rounded-2xl p-5 flex-wrap">
                                <div className="flex items-center gap-2 font-bold text-white pr-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border-primary/20 border-1">
                                        <FiShare2 className="w-4 h-4 text-primary" />
                                    </div>
                                    شارك المقال
                                </div>
                                <div className="flex items-center gap-3 flex-1 justify-end">
                                    {[FaXTwitter, FaLinkedinIn, FaWhatsapp, FiLink,].map((Icon, i) => (
                                        <button key={i} className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-neutral-800 hover:border-primary hover:bg-primary/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all group">
                                            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {post.author && (
                                <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 flex items-center gap-5 justify-start">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-20 h-20 rounded-2xl object-cover border-4 border-primary/20  shrink-0" />

                                    <div className="flex-1 text-right">
                                        <p className="text-primary font-medium text-sm mb-1">كاتب المقال</p>
                                        <h3 className="text-xl font-bold text-white mb-1">{post.author.name}</h3>
                                        <p className="text-sm text-neutral-500 mb-3">{post.author.role}</p>
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>


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
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
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
                                    <p className="text-sm font-bold text-white leading-snug">{dateStr}</p>
                                    <p className="text-xs text-neutral-500 mt-1">تاريخ النشر</p>
                                </div>
                                <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-4 text-center">
                                    <FiClock className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <p className="text-sm font-bold text-white">{post.readTime}</p>
                                    <p className="text-xs text-neutral-500 mt-1">وقت القراءة</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-[#1a1208] to-[#0f0f0f] border border-primary/20 rounded-2xl p-5 text-center">
                                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-3">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-white mb-1 text-sm">لا تفوّت جديدنا</h4>
                                <p className="text-xs text-neutral-400 mb-4">اشترك للحصول على أحدث المقالات</p>
                                <Button as={Link} to="/" className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-sm h-10">
                                    تصفح المزيد
                                </Button>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>


            <section className="container mx-auto px-4 max-w-7xl pt-20 border-t border-neutral-800/50 mt-20">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <div className="flex items-start gap-4 pr-4 text-right">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0 mt-1">
                                <FaImages className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-white mb-1">
                                    مقالات قد تعجبك
                                </h2>
                                <p className="text-neutral-500 text-sm">
                                    استكشف المزيد من المحتوى المميز
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/blog?category=${post.category}`} className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group transition-colors">
                        عرض الكل
                        <FiArrowRight className="group-hover:-translate-x-1 transition-transform rotate-180" />
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map(rp => (
                        <PostCard key={rp.id} post={rp} />
                    ))}
                </div>
            </section>
        </div>
    );
}