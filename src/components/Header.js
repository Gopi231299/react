import logoImage from "../../assets/iconizer-food-truck.svg";

export const Header = () => {
  return (
    <div className="header rounded-b-2xl shadow-md px-32">
      <div className="header-left">
        <img className="logo" src={logoImage} alt="logo"></img>
        <span className="hover:text-orange-500 cursor-pointer">Food Bus</span>
      </div>
      <div className="nav-menu">
        <ul>
          <li className="hover:text-orange-500">About</li>
          <li className="hover:text-orange-500">Contact us</li>
          <li className="hover:text-orange-500">Logout</li>
        </ul>
      </div>
    </div>
  );
};
