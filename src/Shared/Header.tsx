import { Link, NavLink, useLocation } from "react-router-dom";
import { RootState, useAppSelector } from "../Store/store";

const Header = () => {
  const { pathname } = useLocation();
  const { user } = useAppSelector((state: RootState) => state.loginUser);
  console.log(user);
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
            {user && (
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
            )}
          </ul>
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar flex items-center justify-center "
                >
                  <div className="w-10 h-10 pt-1 rounded-full text-xl  text-white bg-gray-800">
                    A
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
              </div>{" "}
            </>
          )}

          <div className="mx-10">
            {user ? (
              <button className="btn btn-error btn-md">Logout</button>
            ) : (
              <Link to="/register" className="btn btn-accent">
                Being Volunteer
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
