import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <div className="p-10">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                excepturi, architecto dolores optio culpa illum maxime porro
                dolorum enim quisquam at, dolore perferendis dignissimos aliquid
                adipisci vel facilis ab ratione?
              </p>
            </div>
          </div>
          <div className="drawer-side shadow">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">Sidebar Item 1</Link>
              </li>
              <li>
                <Link to="/dashboard">Sidebar Item 2</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
