import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchResult, setSearchResult] = useState();
  let pageSize = 8;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const url = `https://modern-blog-website-sever.vercel.app/blogs?page=${currentPage}&limit=${pageSize}&category=${category}`;

        const data = await axios.get(url).then((res) => res.data);
        if (data.length < 1) {
          setSearchResult("Search result not found!");
        }
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchBlogs();
  }, [currentPage, pageSize, category]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        pageSize,
        category,
        handleCategoryChange,
        handlePageChange,
        activeCategory,
        searchResult,
        blogs,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
