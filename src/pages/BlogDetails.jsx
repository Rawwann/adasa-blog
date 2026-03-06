import { useParams, Link, Navigate } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import { parseContent } from "../utils/helpers";
import {
  FiClock,
  FiCalendar,
  FiShare2,
  FiTag,
  FiLink,
  FiHome,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "@heroui/react";

import data from "../data/adasa-data.json";
import PostCard from "../components/postCard/PostCard";
import PostSidebar from "../features/blog-details/PostSidebar";
import RelatedPosts from "../features/blog-details/RelatedPosts";

export default function BlogDetails() {
  const { id } = useParams();

  const post = data.posts.find((p) => p.slug === id || p.id.toString() === id);

  useScrollToTop([id]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "";
  const imgSrc = post.image || post.imageUrl;

  const { parsedBlocks, toc } = parseContent(post.content || post.excerpt);

  const relatedPosts = data.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  if (relatedPosts.length < 3) {
    const morePosts = data.posts.filter(
      (p) => p.id !== post.id && !relatedPosts.includes(p),
    );
    relatedPosts.push(...morePosts.slice(0, 3 - relatedPosts.length));
  }

  return (
    <div className="min-h-screen pb-20 bg-[#0c0c0c]" dir="rtl">
      {/* Post Hero Section */}
      <section className="relative pt-20 pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-black/30" />
        </div>

        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <Link
            to="/"
            className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <FiHome className="w-4 h-4" />
          </Link>
          <span className="text-neutral-500">&gt;</span>
          <Link
            to="/blog"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            المدونة
          </Link>
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
                <img
                  src={post.author.avatar}
                  alt={`الصورة الشخصية للكاتب ${post.author.name}`}
                  className="w-12 h-12 rounded-xl object-cover border border-neutral-700"
                />
                <div className="text-right">
                  <p className="font-bold text-white text-base">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-neutral-400">{post.author.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Container */}
      <section className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <article className="lg:col-span-9 order-1">
            {/* Post Excerpt */}
            <div className="border border-primary/20 bg-gradient-to-r bg-primary-800/10 p-6 md:p-8 rounded-2xl mb-10">
              <p className="text-lg md:text-xl font-bold text-white leading-relaxed text-right">
                "{post.excerpt}"
              </p>
            </div>

            {/* Parsed Content */}
            <div className="mb-12">{parsedBlocks}</div>

            {/* Post Footer Actions */}
            <div className="space-y-4">
              {/* Tags List */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-col gap-6 bg-[#121212] border border-neutral-800 rounded-3xl p-8">
                  <div className="flex items-center gap-3 font-bold text-white w-full">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border-primary/20 border-1">
                      <FiTag className="w-5 h-5" />
                    </div>
                    الوسوم
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
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

              {/* Share Buttons */}
              <div className="flex items-center gap-4 bg-[#121212] border border-neutral-800 rounded-2xl p-5 flex-wrap">
                <div className="flex items-center gap-2 font-bold text-white pr-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border-primary/20 border-1">
                    <FiShare2 className="w-4 h-4 text-primary" />
                  </div>
                  شارك المقال
                </div>
                <div className="flex items-center gap-3 flex-1 justify-end">
                  {[FaXTwitter, FaLinkedinIn, FaWhatsapp, FiLink].map(
                    (Icon, i) => (
                      <button
                        key={i}
                        aria-label="مشاركة المقال"
                        className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-neutral-800 hover:border-primary hover:bg-primary/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all group"
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Author Box */}
              {post.author && (
                <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 flex items-center gap-5 justify-start">
                  <img
                    src={post.author.avatar}
                    alt={`الصورة الشخصية للكاتب ${post.author.name}`}
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-primary/20  shrink-0"
                  />

                  <div className="flex-1 text-right">
                    <p className="text-primary font-medium text-sm mb-1">
                      كاتب المقال
                    </p>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {post.author.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <PostSidebar toc={toc} dateStr={dateStr} readTime={post.readTime} />
        </div>
      </section>

      {/* Related Posts Section */}
      <RelatedPosts relatedPosts={relatedPosts} category={post.category} />
    </div>
  );
}
