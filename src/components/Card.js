import { Recommended } from "../shared/Recommend";

export const Card = () => {
  return (
    <div className="body flex px-40">
      <div className="card-top flex flex-col px-2 m-2 rounded-lg">
        <div className="flex justify-between m-5">
          <h1 className="title font-extrabold text-2xl">
            What's on your mind?
          </h1>
          <div className="navigation flex gap-5">
            <button>
              <span class="material-symbols-outlined bg-gray-200 rounded-full p-2 cursor-pointer">
                arrow_back
              </span>
            </button>
            <span class="material-symbols-outlined  bg-gray-200 rounded-full p-2 cursor-pointer">
              arrow_forward
            </span>
          </div>
        </div>
        <div className="flex-col">
          <Recommended />
        </div>
      </div>
    </div>
  );
};
