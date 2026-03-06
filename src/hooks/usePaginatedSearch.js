import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function usePaginatedSearch({
  data,
  itemsPerPage,
  defaultCategory = "جميع المقالات",
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const categoryParam = searchParams.get("category");
  const activeCategory = categoryParam || defaultCategory;

  // Reset page to 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const handleCategoryChange = (cat) => {
    if (cat === defaultCategory) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  const filteredData = useMemo(() => {
    let result = data;

    if (activeCategory !== defaultCategory) {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter((item) =>
        item.title.toLowerCase().includes(lowerQuery),
      );
    }

    return result;
  }, [data, activeCategory, searchQuery, defaultCategory]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    handleCategoryChange,
    clearAllFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredData,
    currentData,
    viewMode,
    setViewMode,
  };
}
