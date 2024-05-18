export const Shimmer = () => {
  return (
    <div className="body px-40">
      <div className="card-top flex flex-col px-2 m-2 rounded-lg">
        <div className="flex justify-between m-5 w-[100%]">
          <h1 className="title font-extrabold text-2xl bg-gray-200 rounded-lg w-60"></h1>
          <div className="navigation flex gap-5 float-end">
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
        <div className="no-scrollbar flex overflow-auto h-52 gap-5 justify-center items-center">
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
          <div className="bg-gray-200 w-32 h-32 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
