import EventCard from "./EventCard";

const TotalEvents = () => {
  return (
    <div>
      <div className="event-header flex items-center justify-between bg-slate-50 p-2 rounded my-2 mb-5">
        <h3 className="text-2xl font-semibold">Total Events</h3>
        <input
          type="search"
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="event-container grid grid-cols-5 gap-5">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default TotalEvents;
