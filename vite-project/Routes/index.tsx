import { createBrowserRouter, Route, Outlet, Navigate } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import HomePage from "../src/pages";
import ContactPage from "../src/pages/contact";
import AboutPage from "../src/pages/about";
import RootLayout from "../src/pages/rootlayout";
import QuickStart from "../src/pages/learn/index";
import LearnLayout from "../src/pages/learn/Layout"; // Assuming you have a LearnLayout component
import Routing from "../src/pages/learn/routing";
import Components from "../src/pages/learn/Components";
import StateManagement from "../src/pages/learn/state-management";
import Login from "../src/pages/Login";
import Contribute from "../src/pages/Contribute";

const isactive = false; // This variable is not used in the current code, but you can use it to conditionally render components or styles if needed.

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <div>
            <RootLayout />
          </div>
        }>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="login"
          element={!isactive ? <Login /> : <Navigate to={"/Contribute"} />}
        />
        <Route
          path="contribute"
          element={isactive ? <Contribute /> : <Navigate to={"/Login"} />}
        />
      </Route>

      {/* learn layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStart />} />
        <Route path="routing" element={<Routing />} />
        <Route path="components" element={<Components />} />
        <Route path="state-management" element={<StateManagement />} />
      </Route>
    </>
  )
);
export default Router;

// outlet is used to render the child routes inside the parent route. In this case, it allows the Navbar to be rendered on every page while the content of each specific route (like "about" and "contact") is displayed below it.
// The Outlet component is a placeholder that will be replaced by the content of the child route when it is rendered. This allows you to have a consistent layout (like a Navbar) across different pages while still being able to change the content based on the route.
//--------
// index is used to define the default route for the parent route. In this case, when the user navigates to the root path ("/"), the content of the index route will be displayed, which is the "home page" in this example.
// The index route is a special type of route that does not have a path defined. It is used to render the default content when the parent route is accessed without any specific child route.
//---
