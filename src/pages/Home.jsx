import data from "../data/adasa-data.json";
import Hero from "../features/home/Hero";
import FeaturedPosts from "../features/home/FeaturedPosts";
import Categories from "../features/home/Categories";
import RecentPosts from "../features/home/RecentPosts";
import Newsletter from "../features/home/Newsletter";

const { posts, categories } = data;

const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
const recentPosts = posts.filter((p) => !p.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <div className="dark bg-[#0f0f0f] text-white min-h-screen space-y-32 pb-20 relative">
        <Hero />
        <FeaturedPosts posts={featuredPosts} />
        <Categories categories={categories} />
        <RecentPosts posts={recentPosts} />
        <Newsletter />
      </div>
    </>
  );
}
