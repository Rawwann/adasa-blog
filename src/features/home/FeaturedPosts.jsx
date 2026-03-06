import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { FiChevronLeft } from "react-icons/fi";
import SectionHeader from "../../components/ui/SectionHeader";
import FeaturedPostCard from "../../components/postCard/FeaturedPostCard";

export default function FeaturedPosts({ posts }) {
  return (
    <section className="container mx-auto px-4 max-w-6xl">
      <SectionHeader
        title="مقالات مختارة"
        subtitle="محتوى منتقى لبدء رحلة تعلمك"
        badge="مميز"
        titleClassName="text-4xl md:text-5xl font-black"
        action={
          <Button
            as={Link}
            to="/blog?featured=true"
            className="btn-gradient group inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-xl font-medium hover:-translate-y-0.5"
          >
            عرض الكل
            <FiChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Button>
        }
      />
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <FeaturedPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
