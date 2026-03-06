import { FiSearch } from "react-icons/fi";

export default function BlogSearch({ searchQuery, setSearchQuery }) {
  return (
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
  );
}
