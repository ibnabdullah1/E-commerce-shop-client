import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="px-3 py-6 bg-[#F7F7F7]  text-black">
      <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-5xl">
        <div className="sm:w-7/12">
          <div className="text-xl font-bold">Subscribe our Newsletter</div>
          <p className="mt-2 text-[#999999] w-[400px] text-sm">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="w-full sm:w-5/12">
          <form className="flex rounded-full bg-white   ">
            <input
              className="w-full appearance-none px-4  rounded-full py-2 bg-white focus:outline-none"
              type="email"
              placeholder="Your email address"
              required
            />
            <button
              className="ml-2 shrink-0 rounded-full text-white  bg-[#00B207] px-6 py-1 text-sm font-medium  "
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="hover:bg-[#00B207] p-2 rounded-full text-[#4D4D4D] hover:text-white ">
            <FaFacebookF className=" text-xl" />
          </div>
          <div className="hover:bg-[#00B207] p-2 rounded-full text-[#4D4D4D] hover:text-white ">
            <FaPinterestP className=" text-xl" />
          </div>
          <div className="hover:bg-[#00B207] p-2 rounded-full text-[#4D4D4D] hover:text-white ">
            <FaTwitter className=" text-xl" />
          </div>
          <div className="hover:bg-[#00B207] p-2 rounded-full text-[#4D4D4D] hover:text-white ">
            <FaInstagram className=" text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
