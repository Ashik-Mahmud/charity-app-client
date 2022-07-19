import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="bg-base-100 mb-[-10rem]">
      <div className="navbar container mx-auto py-10">
        <div className="flex-1">
          <Link
            to="/"
            className={`btn btn-ghost normal-case text-xl ${
              pathname.includes("login") ? "text-black" : "text-white"
            } `}
          >
            Support
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/"
                className={`${
                  pathname.includes("login") ? "text-black" : "text-white"
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/events"}
                className={`${
                  pathname.includes("login") ? "text-black" : "text-white"
                }`}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={`${
                  pathname.includes("login") ? "text-black" : "text-white"
                }`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={`${
                  pathname.includes("login") ? "text-black" : "text-white"
                }`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                className={`${
                  pathname.includes("login") ? "text-black" : "text-white"
                }`}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
          {/*    <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div> */}
          <div className="mx-10">
            {/*    <Link to="/register" className="btn btn-accent">
              Being Volunteer
            </Link> */}
            <Link to="/login" className="btn btn-info">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
