const EventCard = () => {
  return (
    <div className="event-card shadow rounded p-2 text-center flex flex-col items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJv0c2JMLI_BasW9HuE6paVNvVvmm0tJufmWtUdF9rd4sgQU3dxCIIRyZBguAjBzRHNdQ&usqp=CAU"
        alt=""
        className="w-32 border rounded-lg"
      />
      <div className="details">
        <h3 className="text-xl font-semibold mt-2">Helpless Human</h3>

        <ul className="text-sm flex flex-col gap-1 my-2">
          <li className="flex justify-between items-center">
            Needs Fund - <i className="text-accent">14454tk</i>
          </li>
          <li className="flex justify-between items-center">
            Helping Area - <i className="text-accent">Kathmandu</i>
          </li>
          <li className="flex justify-between items-center">
            Date - <i className="text-accent">14 Jan, 2022 at 14: 43AM</i>
          </li>
        </ul>
        <div className="my-2 flex items-center justify-center gap-2">
          <button className="btn btn-accent btn-sm">Edit</button>
          <button className="btn btn-error btn-sm">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
