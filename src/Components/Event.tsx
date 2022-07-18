import { FaDonate } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
const Event = () => {
  return (
    <div className=" rounded p-1 overflow-hidden">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJv0c2JMLI_BasW9HuE6paVNvVvmm0tJufmWtUdF9rd4sgQU3dxCIIRyZBguAjBzRHNdQ&usqp=CAU"
        alt=""
        className="w-full rounded-3xl"
      />
      <div className="details shadow-sm bg-slate-50 rounded-3xl p-5 mt-[-3rem] z-20 relative">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Helpless People</h3>
            <div className="text-sm">
              Collect <b>10000tk</b> out of <b>100000tk</b>
            </div>
          </div>{" "}
          <button className="btn btn-sm btn-ghost rounded flex items-center gap-1">
            <TbJewishStar /> Save
          </button>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <button className="btn btn-sm btn-ghost rounded flex items-center gap-1">
            <FaDonate /> Donate
          </button>
          <a href="/" className="btn btn-sm btn-ghost">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
