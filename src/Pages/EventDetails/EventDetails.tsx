import { MdOutlineArrowBackIos } from "react-icons/md";
import { RiRefund2Line, RiStarSLine } from "react-icons/ri";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
const EventDetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="my-6">
      <div className="event-container container mx-auto  shadow p-10">
        <div className="event-header flex items-center justify-between bg-slate-50 p-4 rounded mb-6">
          <h3 className="text-3xl mb-4 font-semibold flex items-center gap-3">
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
              <MdOutlineArrowBackIos />
            </span>{" "}
            Register for Being Volunteer
          </h3>
          <div className="flex items-center gap-4 border border-slate-300 p-1 rounded">
            <button className="flex items-center gap-1 btn btn-ghost">
              Save <RiStarSLine />
            </button>
            <button className="flex items-center gap-1 btn btn-ghost">
              Report
            </button>
          </div>
        </div>
        <div className="event-body flex justify-between">
          <div className="left w-1/2">
            <div className="w-full h-52 overflow-hidden mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJv0c2JMLI_BasW9HuE6paVNvVvmm0tJufmWtUdF9rd4sgQU3dxCIIRyZBguAjBzRHNdQ&usqp=CAU"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              mollitia enim iure quisquam nulla quae id dignissimos eaque
              explicabo praesentium nostrum tempora alias, esse facere
              reprehenderit ipsum odio amet voluptate.
            </p>
            <ul className="flex items-center gap-6">
              <li className="shadow rounded-md flex flex-col gap-3 items-center p-4">
                <span className="text-3xl ">
                  {" "}
                  <RiRefund2Line />
                </span>
                <b className="text-xl">14454tk</b>
                <span className=" ">Needs Fund</span>
              </li>
              <li className="shadow rounded-md flex flex-col gap-3 items-center p-4">
                <span className="text-3xl ">
                  {" "}
                  <RiRefund2Line />
                </span>
                <b className="text-xl">452454tk</b>
                <span className="">Collected Funds</span>
              </li>
              <li className="shadow rounded-md flex flex-col gap-3 items-center p-4">
                <span className="text-3xl ">
                  {" "}
                  <RiRefund2Line />
                </span>
                <b className="text-xl">150</b>
                <span className="">Total Donator </span>
              </li>
            </ul>
            <ul className="flex flex-col mt-5 gap-3">
              <li className="flex items-center justify-between">
                Event Creation Date-{" "}
                <span className="font-semibold">24 Jan, 2022 at 14:32 AM</span>
              </li>
              <li className="flex items-center justify-between">
                Label -{" "}
                <span className="font-semibold bg-red-200 p-1 rounded">
                  Emergency
                </span>
              </li>
              <li className="flex items-center justify-between">
                Status -{" "}
                <span className="font-semibold bg-green-200 p-1 rounded">
                  Active
                </span>
              </li>
              <li className="flex items-center justify-between">
                Event Creator -{" "}
                <span className="font-semibold">Ashik Mahmud</span>
              </li>
              <li className="flex items-center justify-between">
                Any Query -{" "}
                <span className="font-semibold">
                  0177885548725/ashikmahmud@gmail.com
                </span>
              </li>
              <li className="flex items-center justify-between">
                Helping Area -{" "}
                <span className="font-semibold">Sylet/Bangladesh</span>
              </li>
            </ul>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="right w-2/5 text-center">
            <h3 className="text-xl font-bold my-2">Donate </h3>
            <div className="flex items-center justify-center gap-3">
              <NavLink
                to="/event-details/1/card"
                className={`p-2 rounded ${
                  pathname.includes("card") ? "bg-accent" : "bg-slate-50"
                }`}
              >
                Card
              </NavLink>
              <NavLink
                to="/event-details/1/mobile-banking"
                className={`p-2 rounded ${
                  pathname.includes("mobile-banking")
                    ? "bg-accent"
                    : "bg-slate-50"
                }`}
              >
                Mobile Banking
              </NavLink>
            </div>
            <div className="payment-area">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
