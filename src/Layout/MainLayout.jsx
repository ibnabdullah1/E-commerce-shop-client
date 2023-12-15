import { Outlet } from "react-router-dom";
import Header from "../pages/Home/Header/Header";
import Newsletter from "../pages/Shared/Newsletter";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MainLayout;
