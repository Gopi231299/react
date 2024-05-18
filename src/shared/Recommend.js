export const Recommended = ({ resList }) => {
  return (
    <div className="flex no-scrollbar overflow-auto h-52">
      {resList.map((res) => (
        <img
          key={res.imageId}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
            res.imageId
          }
          alt=""
        />
      ))}
    </div>
  );
};
