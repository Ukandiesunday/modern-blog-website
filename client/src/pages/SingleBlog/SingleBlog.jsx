import { useParams } from "react-router-dom";
import "./SingleBlog.css";
import RelatedBlogs from "../../component/RelatedBlogs/RelatedBlogs";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../component/Loader/Loader";
import Banner from "../../component/Banner/Banner";
import Corress from "../../component/Correspondent/Corress";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://modern-blog-website-sever.vercel.app/blogs/${id}`
        );
        const data = response.data;
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchSingleBlog();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const category = blog?.map((blogItem) => blogItem?.category).join("");

  return (
    <div>
      <Banner />
      <div className="single-blog-wrapper">
        <div className="blog">
          <h2 className="h2">welcome to latest {category} news</h2>
          <div className="single-blog">
            {blog?.map((item, index) => (
              <div key={index} className="blog-item">
                <div className="img-wrapper">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
                <div className="blog-item-wrap">
                  <h4>{item.title}</h4>
                  <h4> Published date: {item.published_date}</h4>
                  <p>{item.content}</p>
                  <p>{item.content2}</p>
                  <p>{item.content3}</p>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <RelatedBlogs relatedCategory={category} />
        <div>
          <Corress />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
