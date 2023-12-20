import Navbar from "./Navbar";
import { NavbarWithMegaMenu } from "../Navbar/Navbar";
import SearchFunc from "./SearchFunc";
import Sticky from "./Sticky";
import MobileNavbar from "../../../Components/AllProducts/MobileNavbar";

const Header = () => {
  return (
    <div>
      <Sticky />
      <hr />
      <SearchFunc />
      {/* <Navbar /> */}
      <NavbarWithMegaMenu />
      <MobileNavbar />
    </div>
  );
};

export default Header;
