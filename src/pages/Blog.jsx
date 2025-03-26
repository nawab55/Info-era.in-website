// BoltAi
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Blog.css";
import ReactPaginate from "react-paginate";
import { Clock, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/all`,
          {
            params: { page: currentPage, limit: 6 }
          }
        );

        setBlogs(response.data.blogs);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

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

  if(!blogs){
    return <h2>No blogs found.</h2>
  }

  return (
    <section className="blog-section">
      <Helmet >
        <title>Blog | Info Era Software Services Pvt. Ltd.</title>
        <meta
          name="description"
          content="Discover insights, stories, and the latest updates from our team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://infoera.in/blog" /> 
        <meta name="content-language" content="EN" />
        <meta name="search engines" content="ALL" />
        <meta name="Robots" content="INDEX,ALL" />
        <meta name="YahooSeeker" content="INDEX, FOLLOW" />
        <meta name="msnbot" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />
        <meta name="language" content="en-us" />
        <meta name="Expires" content="never" />
        <meta name="rating" content="General" />
        <meta name="Resource-type" content="document" />
        <meta name="Author" content="Info Era Software Services Pvt. Ltd."/>
        <meta name="document-classification" content="Software & Website development company" />
        <meta name="Distribution" content="Global" />
        <meta name="keyphrases" content="Info Era Blog, Info Era Software Services Pvt. Ltd., Info Era Blogs, Info Era Articles, Info Era Insights, Info Era Stories, Info Era Updates."/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />
      </Helmet>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="blog-title mt-5">Our Latest Articles</h1>
          <div className="title-underline"></div>
          <p className="blog-subtitle">
            Discover insights, stories, and the latest updates from our team
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogs?.map((blog) => (
            <div className="col" key={blog._id}>
              <div className="blog-card">
                <div className="blog-card-image-container">
                  <img
                    src={blog.image}
                    className="blog-card-image"
                    alt={blog.title}
                  />
                  <div className="blog-card-overlay">
                    <Link
                      to={`/blog-details/${blog.slug}`}
                      className="read-more-btn"
                    >
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-date">
                    <Clock size={16} />
                    <span>
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link to={`/blog-details/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  {/* <div
                    className="blog-card-excerpt"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  /> */}
                  <div className="blog-card-excerpt">
                    {blog.metaDescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"modern-pagination"}
            pageClassName={"pagination-item"}
            pageLinkClassName={"pagination-link"}
            previousClassName={"pagination-item prev"}
            previousLinkClassName={"pagination-link"}
            nextClassName={"pagination-item next"}
            nextLinkClassName={"pagination-link"}
            breakClassName={"pagination-item break"}
            breakLinkClassName={"pagination-link"}
            activeClassName={"active"}
            disabledClassName={"disabled"}
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ReactPaginate from "react-paginate";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const blogCardStyles = {
//     card: {
//       border: "2px solid rgba(255,255,255,0.5)",
//       borderRadius: "15px",
//       overflow: "hidden",
//       transition: "transform 0.3s ease",
//       height: "100%"
//     },
//     image: {
//       height: "250px",
//       objectFit: "cover",
//       borderTopLeftRadius: "15px",
//       borderTopRightRadius: "15px"
//     },
//     title: {
//       fontSize: "1.4rem",
//       fontWeight: "600",
//       color: "#2d3748",
//       marginBottom: "0.75rem"
//     },
//     description: {
//       color: "#718096",
//       lineHeight: "1.6",
//       display: "-webkit-box",
//       WebkitLineClamp: 3,
//       WebkitBoxOrient: "vertical",
//       overflow: "hidden"
//     }
//   };

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/all`,
//           {
//             params: { page: currentPage, limit: 6 }
//           }
//         );

//         setBlogs(response.data.blogs);
//         setTotalPages(response.data.totalPages);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [currentPage]);

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected + 1);
//   };

//   if (loading) {
//     return (
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "50vh" }}
//       >
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className=" py-5 bg-light">
//       <br />
//       <br />
//       <div className="container aos-init aos-animate" data-aos="fade-up">
//         <div className="text-center mb-5">
//           {/* <h1>Welcome to Info-era Blog</h1>
//           <p>
//             Here, we&apos;ll share our latest news, insights, and stories about
//             our clients, our technology, and our mission.
//           </p> */}
//         </div>

//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {blogs.map((blog) => (
//             <div className="col" key={blog._id}>
//               <Link
//                 to={`/blog-details/${blog._id}`}
//                 className="text-decoration-none"
//                 style={{ color: "inherit" }}
//               >
//                 <div
//                   className="card h-100 hover-shadow-lg"
//                   style={blogCardStyles.card}
//                 >
//                   <img
//                     src={blog.image}
//                     className="card-img-top"
//                     alt={blog.title}
//                     style={blogCardStyles.image}
//                   />
//                   <div className="card-body">
//                     <h5
//                       className="card-title fw-bold"
//                       style={blogCardStyles.title}
//                     >
//                       {blog.title}
//                     </h5>
//                     <div
//                       className="card-text"
//                       style={blogCardStyles.description}
//                       dangerouslySetInnerHTML={{ __html: blog.description }}
//                     />
//                   </div>
//                   <div className="card-footer bg-transparent border-0">
//                     <small className="text-muted">
//                       {new Date(blog.createdAt).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric"
//                       })}
//                     </small>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="d-flex justify-content-center mt-5">
//           <ReactPaginate
//             previousLabel={"Previous"}
//             nextLabel={"Next"}
//             breakLabel={"..."}
//             pageCount={totalPages}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={"pagination"}
//             pageClassName={"page-item"}
//             pageLinkClassName={"page-link"}
//             previousClassName={"page-item"}
//             previousLinkClassName={"page-link"}
//             nextClassName={"page-item"}
//             nextLinkClassName={"page-link"}
//             breakClassName={"page-item"}
//             breakLinkClassName={"page-link"}
//             activeClassName={"active"}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Blog;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ReactPaginate from "react-paginate";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs/all`,
//           {
//             params: { page: currentPage, limit: 6 }
//           }
//         );
//         setBlogs(response.data.blogs);
//         setTotalPages(response.data.totalPages);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, [currentPage]);

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected + 1);
//   };

//   if (loading) {
//     return (
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "50vh" }}
//       >
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="py-5 bg-light">
//       <div className="container">
//         <div className="text-center mb-5">
//           {/* <h1 className="text-primary fw-bold">Info-era Blog</h1> */}
//           {/* <p className="text-muted">Explore the latest insights and updates.</p> */}
//         </div>

//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {blogs.map((blog) => (
//             <div className="col" key={blog._id}>
//               <Link
//                 to={`/blog-details/${blog._id}`}
//                 className="text-decoration-none"
//               >
//                 <div className="card blog-card border-0 shadow-sm">
//                   <img
//                     src={blog.image}
//                     className="card-img-top"
//                     alt={blog.title}
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{blog.title}</h5>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="d-flex justify-content-center mt-5">
//           <ReactPaginate
//             previousLabel={"Previous"}
//             nextLabel={"Next"}
//             breakLabel={"..."}
//             pageCount={totalPages}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={handlePageChange}
//             containerClassName={"pagination"}
//             pageClassName={"page-item"}
//             pageLinkClassName={"page-link"}
//             previousClassName={"page-item"}
//             previousLinkClassName={"page-link"}
//             nextClassName={"page-item"}
//             nextLinkClassName={"page-link"}
//             breakClassName={"page-item"}
//             breakLinkClassName={"page-link"}
//             activeClassName={"active"}
//             disabledClassName={"disabled"}
//           />
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style>
//         {`
//           /* Blog Card Styles */
//           .blog-card {
//             border-radius: 15px;
//             overflow: hidden;
//             transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//             border: 2px solid rgba(1, 50, 137, 0.3);
//           }

//           .blog-card img {
//             height: 250px;
//             object-fit: cover;
//             border-top-left-radius: 15px;
//             border-top-right-radius: 15px;
//             transition: transform 0.3s ease-in-out;
//           }

//           .blog-card .card-title {
//             font-size: 1.2rem;
//             font-weight: 600;
//             color: #013289;
//             transition: color 0.3s ease-in-out;
//           }

//           .blog-card:hover {
//             transform: scale(1.05);
//             box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
//           }

//           .blog-card:hover img {
//             transform: scale(1.1);
//           }

//           .blog-card:hover .card-title {
//             color: #e63946;
//           }

//           /* Pagination Styles */
//           .pagination .page-link {
//             color: #fff;
//             background-color: #013289;
//             border: none;
//             border-radius: 5px;
//             margin: 0 5px;
//             padding: 10px 15px;
//             transition: all 0.3s ease-in-out;
//             outline: none;
//           }

//           .pagination .page-link:hover {
//             background-color: #011d56;
//           }

//           .pagination .active .page-link {
//             background-color: #e63946;
//             color: #fff;
//           }

//           .pagination .disabled .page-link {
//             background-color: #d6d6d6;
//             cursor: not-allowed;
//           }

//           /* Remove focus outline */
//           .pagination .page-link:focus {
//             box-shadow: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Blog;
