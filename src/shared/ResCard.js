import { ResCardImage } from "../utils/constants";

export const ResCard = ({ item }) => {
  console.log(item);
  return (
    <div className="flex no-scrollbar overflow-auto gap-5">
      {item.map((res) => (
        <div
          key={res.info.id}
          className="flex no-scrollbar flex-col cursor-pointer hover:scale-95 ease-in-out duration-100"
        >
          <img
            className="flex rounded-3xl gap-5 min-w-[250px] h-[200px] object-cover"
            src={ResCardImage + res.info.cloudinaryImageId}
            alt=""
          />
          <div className="pt-2">
            <h2 className="ps-3 font-bold">{res.info.name}</h2>
            <span className="flex flex-row gap-2 ps-3 font-bold">
              <span className="material-symbols-outlined text-green-600">
                stars
              </span>
              {res.info.avgRatingString}
              <li className="ps-0">{res.info.sla.slaString}</li>
            </span>
            <p className="ps-3">{res.info.cuisines.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
