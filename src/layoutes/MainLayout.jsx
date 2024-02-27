import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter bg-secondary">
        <div className=" pt-0">
          <Navbar />
          <Outlet />
          <Footer></Footer>
        </div>
    </div>
  );
};

export default MainLayout;
