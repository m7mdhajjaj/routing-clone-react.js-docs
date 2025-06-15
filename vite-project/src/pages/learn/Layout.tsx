import Navbar from "../../component/Navbar";
import AsideLearn from "../../component/AsideLearn";
import { Outlet } from "react-router-dom"; // Import Outlet to render child routes
const Layout = () => {
  return (
    <>
      <Navbar />
      <AsideLearn />
    
      <Outlet />
      

    </>
  );
};
export default Layout;
