import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Clock, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import "../styles/Blog.css";

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/${slug}`
        );
        setBlog(response.data);
        setLoading(false);

        // Scroll to top when blog loads
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);
 

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="not-found-container">
        <h2>Blog not found</h2>
        <p>
          The article you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link to="/blog" className="btn btn-primary">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog?.title} | Blog</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="article:author" content={blog?.author} />
        <link
          rel="canonical"
          href={`https://infoera.in/blog-details/${slug}`}
        />
        <meta name="rating" content="General" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={blog?.keywords} />
        <meta name="author" content={blog?.author} />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="application-name" content="Infoera" />
      </Helmet>
      <div className="blog-details-page">
        <div
          className="blog-hero"
          style={{ backgroundImage: `url(${blog?.image})` }}
        >
          <div className="blog-hero-overlay"></div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="blog-details-container">
                <Link to="/blog" className="back-to-blog">
                  {" "}
                  {/* Updated return path */}
                  <ArrowLeft size={18} /> Back to Blog
                </Link>

                <article className="blog-article">
                  <header className="blog-header">
                    <h1 className="blog-title">{blog?.title}</h1>
                    <div className="blog-meta">
                      <div className="blog-date">
                        <Clock size={18} />
                        <span>
                          {new Date(blog?.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </header>

                  <div className="blog-featured-image-container">
                    <img
                      src={blog?.image}
                      alt={blog?.title}
                      className="blog-featured-image"
                    />
                  </div>

                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog?.description }}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function BlogDetails() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/${id}`
//         );
//         setBlog(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (loading) {
//     return <div className="text-center py-5">Loading...</div>;
//   }

//   if (!blog) {
//     return <div className="text-center py-5">Blog not found</div>;
//   }

//   return (
//     <section className="py-5">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <article>
//               <header className="mb-5">
//                 <h1 className="fw-bold mb-4">{blog.title}</h1>
//                 <div className="text-muted mb-4">
//                   Posted on{" "}
//                   {new Date(blog.createdAt).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric"
//                   })}
//                 </div>
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="img-fluid rounded mb-4"
//                 />
//               </header>

//               <div
//                 className="blog-content"
//                 dangerouslySetInnerHTML={{ __html: blog.description }}
//               />
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BlogDetails;
