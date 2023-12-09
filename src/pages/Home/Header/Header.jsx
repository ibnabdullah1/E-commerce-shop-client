import Navbar from "./Navbar";
import SearchFunc from "./SearchFunc";
import Sticky from "./Sticky";

const Header = () => {
  return (
    <div>
      <Sticky />
      <hr />
      <SearchFunc />
      <Navbar />
    </div>
  );
};

export default Header;
