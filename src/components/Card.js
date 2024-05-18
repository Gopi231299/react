import { useState, useEffect } from "react";
import { Recommended } from "../shared/Recommend";
import { recommended } from "../utils/mockData";
import { DELHI } from "../utils/constants";
import { Shimmer } from "../shared/Shimmer";

export const Card = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(DELHI);

    const json = await data.json();
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if (carousel.length === 0) return <Shimmer />;

  return (
    <div className="body flex px-40">
      <div className="card-top flex flex-col px-2 m-2 rounded-lg">
        <div className="flex justify-between m-5">
          <h1 className="title font-extrabold text-2xl">
            What's on your mind?
          </h1>
          <div className="navigation flex gap-5">
            <button>
              <span className="material-symbols-outlined bg-gray-200 rounded-full p-2 cursor-pointer">
                arrow_back
              </span>
            </button>
            <span className="material-symbols-outlined  bg-gray-200 rounded-full p-2 cursor-pointer">
              arrow_forward
            </span>
          </div>
        </div>
        <div className="flex-col">
          <Recommended resList={carousel} />
        </div>
      </div>
    </div>
  );
};
