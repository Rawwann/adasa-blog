import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaImages } from "react-icons/fa6";
import PostCard from "../../components/postCard/PostCard";

export default function RelatedPosts({ relatedPosts, category }) {
  return (
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
        <Link
          to={`/blog?category=${category}`}
          className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group transition-colors"
        >
          عرض الكل
          <FiArrowRight className="group-hover:-translate-x-1 transition-transform rotate-180" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((rp) => (
          <PostCard key={rp.id} post={rp} />
        ))}
      </div>
    </section>
  );
}
