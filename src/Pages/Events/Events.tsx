import Event from "../../Components/Event";
import PageBanner from "../../Components/PageBanner";

const Events = () => {
  return (
    <div>
      <PageBanner title="Get All Events" isSearch={true} />
      <div className="events-container py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-5">
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
          <div className="pagination flex justify-center my-10 items-center gap-3">
            <button className="btn btn-ghost">Prev</button>
            <button className="w-8 grid place-items-center h-8 bg-slate-50">
              1
            </button>
            <button className="w-8 grid place-items-center h-8 bg-slate-50">
              2
            </button>
            <button className="w-8 grid place-items-center h-8 bg-slate-50">
              3
            </button>
            <button className="btn btn-ghost">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
