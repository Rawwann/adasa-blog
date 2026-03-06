import { Link } from "react-router-dom";
import { FiClock, FiStar, FiArrowLeft } from "react-icons/fi";

export default function FeaturedPostCard({ post }) {
    const imgSrc = post.image || post.imageUrl;
    const linkId = post.slug || post.id;
    const dateStr = post.date ? new Date(post.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

    return (
        <div className="bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 flex flex-col md:flex-row group cursor-pointer">

            <div className="flex-1 relative order-1 md:order-1">
                <div className="absolute top-6 right-6 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-orange-500/20">
                    <FiStar className="fill-current w-3.5 h-3.5" />
                    <span>مميز</span>
                </div>

                <img
                    src={imgSrc}
                    alt={post.title}
                    className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition duration-500"
                />


                <div className="absolute inset-0 bg-gradient-to-l from-[#121212] to-transparent w-32 left-0 pointer-events-none hidden md:block" />
            </div>


            <div className="p-8 md:p-12 flex flex-col justify-center flex-1 order-2 md:order-2 bg-[#121212] relative z-10">
                <div className="flex items-center gap-4 text-xs font-medium mb-6">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/20">
                        {post.category}
                    </span>
                    {post.readTime && (
                        <span className="flex items-center gap-1.5 text-neutral-400">
                            <FiClock className="w-3 h-3" />
                            {post.readTime}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-snug text-white">                    <Link to={`/blog/${linkId}`} className="before:absolute before:inset-0">{post.title}</Link>
                </h3>

                <p className="text-neutral-400 mb-8 max-w-lg line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    {post.author && (
                        <div className="flex items-center gap-3 relative z-10">
                            <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-neutral-800" />
                            <div className="text-right">
                                <p className="font-bold text-white text-sm">{post.author.name}</p>
                                <p className="text-xs text-neutral-500">{dateStr}</p>
                            </div>
                        </div>
                    )}

                    <Link
                        to={`/blog/${linkId}`}
                        className="flex items-center gap-2 text-sm font-bold text-neutral-400 group-hover:text-orange-500 transition-all duration-300 relative z-10"
                    >
                        اقرأ المقال
                        <FiArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

        </div>
    );
}
