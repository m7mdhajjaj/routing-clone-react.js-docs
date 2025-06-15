import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">My App</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
    }
export default Navbar;


//we use link because it support single page application // and it will not reload the page when we click on the link