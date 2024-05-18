export const Header = () => {
  return (
    <div className="header rounded-b-lg">
      <div className="header-left">
        <img
          className="logo"
          src="https://www.svgrepo.com/show/490739/food-truck.svg"
          alt="logo"
        ></img>
        <span>Food Bus</span>
      </div>
      <div className="nav-menu">
        <ul>
          <li>About</li>
          <li>Contact us</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};
