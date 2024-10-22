import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div>
        <img
          className="h-[32px] w-[32px] cursor-pointer"
          src={Logo}
          alt="logo"
        ></img>
      </div>
      <div>
        <img
          className="h-[32px] w-[32px] cursor-pointer"
          src={Menu}
          alt="menu icon"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
