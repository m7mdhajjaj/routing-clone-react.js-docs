// ...existing code...
import { NavLink } from "react-router-dom";

const AsideLearn = () => {
  const navLinkClasses =
    "block py-2 px-3 rounded-md text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-150 ease-in-out";

  return (
    <nav>
      <aside className="aside-learn w-64 h-screen bg-gray-100 p-4 border-r border-gray-200">
        <ul className="space-y-2">
          <li>
            <NavLink to="/learn" end className={navLinkClasses}>
              Quick Start
            </NavLink>
          </li>
          <li>
            <NavLink to="/learn/components" className={navLinkClasses}>
              Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/learn/routing" className={navLinkClasses}>
              Routing
            </NavLink>
          </li>
          <li>
            <NavLink to="/learn/state-management" className={navLinkClasses}>
              State Management
            </NavLink>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default AsideLearn;
// ...existing code...
