import { useState, useEffect } from "react";
import { Recommended } from "../shared/Recommend";
import { DELHI } from "../utils/constants";
import { Shimmer } from "../shared/Shimmer";
import { Submenu } from "../shared/Submenu";
import { ResCard } from "../shared/ResCard";
import { Divider } from "../shared/Divider";

export const Card = () => {
  const [carousel, setCarousel] = useState([]);
  const [title, SetTitle] = useState([]);
  const [topRes, SetTopRes] = useState([]);
  const [resItem, SetResItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(DELHI);

    const json = await data.json();
    console.log(json);
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    SetTitle(json?.data?.cards[0]?.card?.card?.header?.title);
    SetTopRes(json?.data?.cards[1]?.card?.card?.header?.title);
    SetResItem(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(SetTitle);
  };

  if (carousel.length === 0) return <Shimmer />;

  return (
    <div className="body flex flex-col px-40">
      <div className="flex flex-col px-2 m-2 rounded-lg">
        <Submenu title={title} />
        <Recommended resList={carousel} />
      </div>
      <Divider className="p-0" />
      <div className="flex flex-col px-2 m-2 rounded-lg">
        <Submenu title={topRes} />
        <ResCard item={resItem} />
      </div>
    </div>
  );
};
