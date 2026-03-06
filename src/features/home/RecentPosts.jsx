import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import SectionHeader from "../../components/ui/SectionHeader";
import PostCard from "../../components/postCard/PostCard";

export default function RecentPosts({ posts }) {
  return (
    <section className="container mx-auto px-4 max-w-6xl">
      <SectionHeader
        title="أحدث المقالات"
        subtitle="محتوى جديد طازج من المطبعة"
        badge="الأحدث"
        className="border-t border-neutral-800/50 pt-20"
        titleClassName="text-3xl md:text-4xl"
        action={
          <Link
            to="/blog"
            className="text-primary hover:text-primary-400 font-bold flex items-center gap-2 group transition-colors"
          >
            عرض جميع المقالات
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
