export const Submenu = ({ title }) => {
  return (
    <div className="flex justify-between m-5">
      <h1 className="title font-extrabold text-2xl">{title}</h1>
      <div className="navigation flex gap-5">
        <button>
          <span className="material-symbols-outlined bg-gray-200 rounded-full p-2 cursor-pointer">
            arrow_back
          </span>
        </button>
        <button>
          <span className="material-symbols-outlined  bg-gray-200 rounded-full p-2 cursor-pointer">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
