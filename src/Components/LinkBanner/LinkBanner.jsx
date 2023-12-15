import image from "../../assets/Breadcrumbs.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const LinkBanner = ({ location }) => {
  return (
    <div className="relative">
      <img className="w-full h-24 object-cover" src={image} alt="" />
      <h2 className="absolute text-white top-10 left-20 flex gap-1 justify-start items-center">
        <IoHomeOutline /> <MdArrowForwardIos />{" "}
        <span className="text-[#00B207]">{location}</span>
      </h2>
    </div>
  );
};

export default LinkBanner;
