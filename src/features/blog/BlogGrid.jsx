import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import PostCard from "../../components/postCard/PostCard";
import PostCardList from "../../components/postCard/PostCardList";

export default function BlogGrid({
  filteredPosts,
  currentPosts,
  viewMode,
  currentPage,
  activeCategory,
}) {
  return (
    <div className="min-h-[50vh]">
      {filteredPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-neutral-500 mb-6">
            <FiSearch className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">لا توجد نتائج</h3>
          <p className="text-neutral-500">
            لم نتمكن من العثور على أي مقالات تطابق بحثك. جرب استخدام كلمات
            مفتاحية أخرى.
          </p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${currentPage}-${activeCategory}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {currentPosts.map((post) =>
              viewMode === "grid" ? (
                <PostCard key={post.id} post={post} />
              ) : (
                <PostCardList key={post.id} post={post} />
              ),
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
