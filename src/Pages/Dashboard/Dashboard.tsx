import { MdOutlineDashboard } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Dashboard = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  /* Handle Log Out  */
  const handleLogOut = () => {
    cookie.remove("token");
    cookie.remove("user");
    navigate("/login");
  };
  return (
    <div>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="p-10 dashboard-content">
              <div className="navbar bg-slate-50 rounded">
                <div className="flex-1">
                  <label
                    htmlFor="my-drawer-2"
                    className="btn btn-ghost text-3xl drawer-button lg:hidden"
                  >
                    <MdOutlineDashboard />
                  </label>
                  <Link
                    className="btn btn-ghost normal-case text-xl"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </div>
                <div className="flex-none gap-2">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="" />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link
                          to="dashboard/profile"
                          className="justify-between"
                        >
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
                  </div>
                </div>
              </div>

              <div className="content py-10">
                <Outlet />
              </div>
            </div>
          </div>
          <div className="drawer-side shadow">
            <label htmlFor="my-drawer-2" className="drawer-overlay "></label>

            <ul className="menu p-4 overflow-y-auto w-80 bg-slate-900 text-white ">
              <li>
                <Link to="/">
                  <span className="text-3xl font-semibold">Support</span>
                </Link>
              </li>
              <li>
                <NavLink to="/dashboard/add-event">Add New Event</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/total-events">Total Events</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/saved-events">Saved Events</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/donations">All Donations</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/volunteers">Volunteers</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/leaderboard">Leader board</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/settings">Settings</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
