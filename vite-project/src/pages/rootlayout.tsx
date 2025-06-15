import { Outlet } from "react-router";
import Navbar from "../component/Navbar";


const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;