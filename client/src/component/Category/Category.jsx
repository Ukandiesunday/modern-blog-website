import "./Category.css";
const Category = ({ handleCategoryChange, selectedCategory }) => {
  const categories = ["ai", "health", "security", "startups", "tech"];
  return (
    <div className="category-flex">
      <div className=" cat-div">
        <p
          className={`cat-p p ${!selectedCategory ? "active-category" : ""}`}
          onClick={() => handleCategoryChange(null)}
        >
          See All
        </p>
      </div>
      <div className="category-wrapper">
        {categories.map((category, ind) => (
          <div key={ind} className="cat-div">
            <p
              className={`cat-p  ${
                selectedCategory === category ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
