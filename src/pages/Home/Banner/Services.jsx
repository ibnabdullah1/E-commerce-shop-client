import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";

const Services = () => {
  return (
    <div className="hidden md:flex justify-center items-center gap-5 max-w-5xl mx-auto bg-white relative -top-16 rounded-lg py-7 shadow-sm">
      <div className="flex items-center gap-2">
        <TbTruckDelivery className="text-3xl text-[#00B207]" />
        <div>
          <h3 className="text-sm text-[#1A1A1A] font-semibold">
            Free Shipping
          </h3>
          <p className="text-sm text-[#999999]">
            Free shipping on all your order
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <TfiHeadphoneAlt className="text-3xl text-[#00B207]" />
        <div>
          <h3 className="text-sm text-[#1A1A1A] font-semibold">
            Customer Support 24/7
          </h3>
          <p className="text-sm text-[#999999]">Instant access to Support</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BsHandbag className="text-3xl text-[#00B207]" />
        <div>
          <h3 className="text-sm text-[#1A1A1A] font-semibold">
            100% Secure Payment
          </h3>
          <p className="text-sm text-[#999999]">We ensure your money is save</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <BsBoxSeam className="text-3xl text-[#00B207]" />
        <div>
          <h3 className="text-sm text-[#1A1A1A] font-semibold">
            Money-Back Guarantee
          </h3>
          <p className="text-sm text-[#999999]">30 Days Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
