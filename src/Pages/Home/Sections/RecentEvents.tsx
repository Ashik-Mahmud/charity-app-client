import Event from "../../../Components/Event";

const RecentEvents = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="title text-center my-10">
          <h3 className="text-center text-4xl font-bold ">Recent Events</h3>
          <p className="text-sm text-slate-600 mt-2">
            You will get the recent Events which one create volunteers
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
