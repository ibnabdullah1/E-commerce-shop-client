import { CiLocationOn } from "react-icons/ci";
import Language from "./Language";
import MoneyRent from "./MoneyRant";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Sticky = () => {
  const { logout, user } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="inset-x-0 top-0 py-2 z-50 justify-between  hidden lg:flex items-center max-w-5xl mx-auto">
      <p className="flex text-sm items-center">
        <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA
      </p>
      <div className="flex justify-center  items-center">
        <Language />
        <MoneyRent />
        <div className="flex text-sm justify-center items-center">
          <Link to={"/sign-in"}>
            <h2 className="mr-1">Sign In</h2>
          </Link>
          /
          {user ? (
            <button onClick={handleLogout}>
              <h2 className="ml-1">Log Out</h2>
            </button>
          ) : (
            <Link to={"/sign-up"}>
              <h2 className="ml-1">Sign Up</h2>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sticky;
