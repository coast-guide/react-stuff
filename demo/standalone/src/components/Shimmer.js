const Shimmer = () => (
  <div className="shimmer-container">
    {Array.from({ length: 20 }, (_, index) => (
      <div className="shimmer-card" key={index}></div>
    ))}
  </div>
);

export default Shimmer;
