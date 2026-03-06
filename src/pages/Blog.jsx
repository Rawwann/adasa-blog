import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@heroui/react";
import { FiSearch, FiGrid, FiList } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import data from "../data/adasa-data.json";
import PostCard from "../components/postCard/PostCard";
import PostCardList from "../components/postCard/PostCardList";

const POSTS_PER_PAGE = 6;

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();


    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);


    const categoryParam = searchParams.get("category");
    const activeCategory = categoryParam || "جميع المقالات";


    useEffect(() => {

        setCurrentPage(1);
    }, [searchQuery, activeCategory]);

    const categories = ["جميع المقالات", ...data.categories.map(c => c.name)];

    const handleCategoryChange = (cat) => {
        if (cat === "جميع المقالات") {
            searchParams.delete("category");
        } else {
            searchParams.set("category", cat);
        }
        setSearchParams(searchParams);
    };


    const filteredPosts = useMemo(() => {
        let result = data.posts;


        if (activeCategory !== "جميع المقالات") {
            result = result.filter((post) => post.category === activeCategory);
        }


        if (searchQuery.trim() !== "") {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter((post) =>
                post.title.toLowerCase().includes(lowerQuery)
            );
        }
        return result;
    }, [activeCategory, searchQuery]);



    const clearAllFilters = () => {
        setSearchQuery("");
        searchParams.delete("category");
        setSearchParams(searchParams);
    };



    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const currentPosts = useMemo(() => {
        const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    return (
        <div className="min-h-screen pb-20">


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
                        استكشف <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffaa6c]">مقالاتنا</span>
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12">
                        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث في عالم التصوير.
                    </p>

                </div>
            </section>




            <section className="container mx-auto px-4 py-12 max-w-6xl">

                <div className="sticky top-16 z-30 bg-[#0f0f0f]/90 backdrop-blur-md py-6 mb-12 border-b border-neutral-600">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">

                        <div className="w-full md:w-auto relative group shrink-0">
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-primary transition-colors">
                                <FiSearch className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="ابحث في المقالات..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-72 bg-[#161616] border border-neutral-800 text-white rounded-full py-3 pr-12 pl-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-neutral-600"
                            />
                        </div>


                        <div className="flex items-center flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                        ? "bg-primary text-white"
                                        : "bg-[#161616] text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>


                <div className="flex flex-row items-center justify-between mb-8 border-b border-neutral-800/50 pb-4">
                    <div className="text-neutral-400 text-sm">
                        عرض: <span className="font-bold text-white">{filteredPosts.length}</span> مقالات
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#161616] p-1 rounded-lg border border-neutral-800">
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-md transition-colors ${viewMode === "list"
                                    ? "bg-neutral-800 text-white"
                                    : "text-neutral-500 hover:text-white"
                                    }`}
                            >
                                <FiList className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-md transition-colors ${viewMode === "grid"
                                    ? "bg-primary text-white"
                                    : "text-neutral-500 hover:text-white"
                                    }`}
                            >
                                <FiGrid className="w-5 h-5" />
                            </button>
                        </div>


                        {(activeCategory && activeCategory !== "جميع المقالات" || (searchQuery && searchQuery !== "")) && (
                            <button
                                type="button"
                                onClick={() => {
                                    if (typeof clearAllFilters === 'function') {
                                        clearAllFilters();
                                    }
                                }}
                                className="flex items-center gap-1 text-xs text-white hover:text-primary transition-colors group"
                            >
                                <FiX className="w-4 h-4 " />
                                <span>مسح الفلاتر</span>
                            </button>
                        )}
                    </div>
                </div>


                <div className="min-h-[50vh]">
                    {filteredPosts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-neutral-500 mb-6">
                                <FiSearch className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">لا توجد نتائج</h3>
                            <p className="text-neutral-500">
                                لم نتمكن من العثور على أي مقالات تطابق بحثك. جرب استخدام كلمات مفتاحية أخرى.
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
                                {currentPosts.map((post) => (
                                    viewMode === "grid" ? (
                                        <PostCard key={post.id} post={post} />
                                    ) : (
                                        <PostCardList key={post.id} post={post} />
                                    )
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>


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
