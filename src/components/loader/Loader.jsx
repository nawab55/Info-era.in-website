import "./loader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>
    </div>
  );
};

export default SkeletonLoader;
