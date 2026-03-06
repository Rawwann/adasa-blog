export default function CategoryFilter({
  categories,
  activeCategory,
  handleCategoryChange,
}) {
  return (
    <div className="flex items-center flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryChange(cat)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
            activeCategory === cat
              ? "bg-primary text-white"
              : "bg-[#161616] text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
