import { Link } from "react-router-dom";
import { FiClock, FiArrowLeft } from "react-icons/fi";

export default function PostCard({ post }) {
    const imgSrc = post.image || post.imageUrl;
    const linkId = post.slug || post.id;
    const dateStr = post.date ? new Date(post.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

    return (
        <div className="group relative bg-[#121212] border border-neutral-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 z-10" />
                <img
                    src={imgSrc}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-dark/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white shadow-sm">
                    {post.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4">
                    {post.readTime && (
                        <div className="flex items-center gap-1.5">
                            <FiClock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    )}
                    {dateStr && (
                        <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                            <span>{dateStr}</span>
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${linkId}`} className="before:absolute before:inset-0">{post.title}</Link>
                </h3>

                <p className="text-neutral-400 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800/50">
                    {post.author ? (
                        <div className="flex items-center gap-3 relative z-10">
                            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border border-neutral-800" />
                            <div className="text-right">
                                <p className="text-sm font-bold text-white">{post.author.name}</p>
                                <p className="text-xs text-neutral-500">{post.author.role}</p>
                            </div>
                        </div>
                    ) : <div />}

                    <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all group-hover:-translate-x-1 relative z-10">
                        <FiArrowLeft className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
