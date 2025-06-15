import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">My App</div>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="text-white hover:text-gray-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white hover:text-gray-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white hover:text-gray-400">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/learn" className="text-white hover:text-gray-400">
                learn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contribute"
                className="text-white hover:text-gray-400">
                contribute
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-white hover:text-gray-400">
                login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
    }
export default Navbar;


//we use link because it support single page application // and it will not reload the page when we click on the link
// NavLink is used to apply active styles to the link when the route matches, making it easier to highlight the current page in the navigation bar.