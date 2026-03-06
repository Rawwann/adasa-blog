import { Pagination } from "@heroui/react";
import { FiGrid, FiList, FiX } from "react-icons/fi";
import data from "../data/adasa-data.json";
import BlogSearch from "../features/blog/BlogSearch";
import CategoryFilter from "../features/blog/CategoryFilter";
import BlogGrid from "../features/blog/BlogGrid";
import usePaginatedSearch from "../hooks/usePaginatedSearch";

const POSTS_PER_PAGE = 6;
const ALL_CATEGORIES = "جميع المقالات";

export default function Blog() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    handleCategoryChange,
    clearAllFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredData: filteredPosts,
    currentData: currentPosts,
    viewMode,
    setViewMode,
  } = usePaginatedSearch({
    data: data.posts,
    itemsPerPage: POSTS_PER_PAGE,
    defaultCategory: ALL_CATEGORIES,
  });

  const categories = [ALL_CATEGORIES, ...data.categories.map((c) => c.name)];

  return (
    <div className="min-h-screen pb-20">
      {/* Blog Header */}
      <section className="bg-[#0c0c0c] border-b border-neutral-800 pt-20 pb-12 bg-grid-pattern relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-bold text-primary mb-8 backdrop-blur-sm">
              <div className="flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse [animation-delay:200ms]"></span>
              </div>
              <span>مدونتنا</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            استكشف{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffaa6c]">
              مقالاتنا
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث في عالم التصوير.
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Search & Filters */}
        <div className="sticky top-16 z-30 bg-[#0f0f0f]/90 backdrop-blur-md py-6 mb-12 border-b border-neutral-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <BlogSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
        {/* Layout Controls */}
        <div className="flex flex-row items-center justify-between mb-8 border-b border-neutral-800/50 pb-4">
          <div className="text-neutral-400 text-sm">
            عرض:{" "}
            <span className="font-bold text-white">{filteredPosts.length}</span>{" "}
            مقالات
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#161616] p-1 rounded-lg border border-neutral-800">
              <button
                aria-label="عرض قائم"
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                <FiList className="w-5 h-5" />
              </button>
              <button
                aria-label="عرض شبكي"
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-white"
                    : "text-neutral-500 hover:text-white"
                }`}
              >
                <FiGrid className="w-5 h-5" />
              </button>
            </div>
            {((activeCategory && activeCategory !== ALL_CATEGORIES) ||
              (searchQuery && searchQuery !== "")) && (
              <button
                type="button"
                aria-label="مسح الفلاتر"
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-xs text-white hover:text-primary transition-colors group"
              >
                <FiX className="w-4 h-4 " />
                <span>مسح الفلاتر</span>
              </button>
            )}
          </div>
        </div>
        {/* Blog Grid */}
        <BlogGrid
          filteredPosts={filteredPosts}
          currentPosts={currentPosts}
          viewMode={viewMode}
          currentPage={currentPage}
          activeCategory={activeCategory}
        />
        {/* Pagination Controls */}
        {totalPages >= 1 && (
          <div className="flex flex-col items-center mt-16">
            <Pagination
              showControls
              total={totalPages}
              initialPage={1}
              page={currentPage}
              onChange={setCurrentPage}
              classNames={{
                wrapper: "gap-2",
                item: "w-10 h-10 text-neutral-400 bg-[#161616] hover:border-primary/60 -800 data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:border-primary border border-neutral-800 rounded-lg",
                cursor: "bg-primary text-white rounded-lg",
                prev: "w-10 h-10 bg-[#161616] border border-neutral-800 text-white rounded-lg",
                next: "w-10 h-10 bg-transparent border border-neutral-800 text-neutral-400 rounded-lg",
              }}
            />
            <p className="text-neutral-500 text-sm mt-4 text-center">
              صفحة {currentPage} من {totalPages}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
