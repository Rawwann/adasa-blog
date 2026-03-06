import { Link } from "react-router-dom";
import { FiClock, FiArrowLeft } from "react-icons/fi";

export default function PostCardList({ post }) {
  const imgSrc = post.image || post.imageUrl;
  const linkId = post.slug || post.id;
  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="relative bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col md:flex-row group w-full min-h-[200px]">
      {/* Cover Image */}
      <div className="relative w-full md:w-1/3 h-[200px] md:h-auto overflow-hidden shrink-0 self-stretch">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 z-10 pointer-events-none" />
        <img
          src={imgSrc}
          alt={post.imageAlt || post.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-4 right-4 md:right-auto md:left-4 z-10 bg-dark/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm md:top-4 md:left-4">
          {post.category}
        </div>
      </div>

      {/* Main Details */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs font-medium text-neutral-400 mb-4">
          {dateStr && <span>{dateStr}</span>}
          {post.readTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
              <span className="flex items-center gap-1.5">
                <FiClock className="w-4 h-4" />
                {post.readTime}
              </span>
            </>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          <Link
            to={`/blog/${linkId}`}
            className="before:absolute before:inset-0"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-neutral-400 text-sm mb-6 line-clamp-3 leading-relaxed max-w-2xl flex-grow">
          {post.excerpt}
        </p>

        {/* Footer Info */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-neutral-800/50">
          {post.author ? (
            <div className="flex items-center gap-3 relative z-10">
              <img
                src={post.author.avatar}
                alt={`الصورة الشخصية للكاتب ${post.author.name}`}
                className="w-10 h-10 rounded-full border border-neutral-800"
              />
              <div className="text-right">
                <p className="text-sm font-bold text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
          ) : (
            <div />
          )}

          <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all group-hover:-translate-x-1 relative z-10">
            <FiArrowLeft className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
