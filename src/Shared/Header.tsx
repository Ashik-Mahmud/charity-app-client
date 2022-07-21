import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { RootState, useAppSelector } from "../Store/store";
const Header = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const { pathname } = useLocation();

  const { user } = useAppSelector((state: RootState) => state.loginUser);

  /* Handle Log Out  */
  const handleLogOut = () => {
    cookie.remove("token");
    cookie.remove("user");
    navigate("/login");
  };
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
                    {user?.name?.slice(0, 1)}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/settings">Settings</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>{" "}
            </>
          )}

          <div className="mx-10">
            {user ? (
              <button onClick={handleLogOut} className="btn btn-error btn-md">
                Logout
              </button>
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
