const Shimmer = () => {
  return (
    <div className="shimmer-container w-auto flex flex-wrap justify-center">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card p-4 m-4 w-[250px] h-[500px] bg-gray-200 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
