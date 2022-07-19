const AddEvent = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Add Event</h1>
      <form action="" className="p-14 shadow">
        <div className="single-input">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            placeholder="Event Title here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="group flex items-center gap-3 justify-between my-4">
          <div className="single-input w-full">
            <label htmlFor="title">Event Creations Date</label>
            <input
              type="datetime-local"
              placeholder="Event Title here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="single-input w-full">
            <label htmlFor="title">Labels</label>
            <select className="select select-bordered w-full ">
              <option value={""}>Select label</option>
              <option value={"Active"}>Active</option>
              <option value={"Very Emergency"}>Very Emergency</option>
              <option value={"Normal"}>Normal</option>
              <option value={"Serious"}>Serious</option>
            </select>
          </div>
          <div className="single-input w-full">
            <label htmlFor="title">Status</label>
            <select className="select select-bordered w-full ">
              <option value={""}>Select label</option>
              <option value={"Active"}>Active</option>
              <option value={"Inactive"}>Inactive</option>
              <option value={"disabled"}>Disabled</option>
            </select>
          </div>
        </div>
        <div className="group flex items-center gap-3 justify-between my-4">
          <div className="single-input w-full">
            <label htmlFor="title">Helping Area</label>
            <input
              type="text"
              placeholder="Helping Area here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="single-input w-full">
            <label htmlFor="needs-fund">Needs Fund (Amount)</label>
            <input
              type="text"
              placeholder="Needs Fund here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="single-input w-full">
            <label htmlFor="needs-fund">Contact Address</label>
            <input
              type="text"
              placeholder="Contact Address"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="single-input w-full">
          <label htmlFor="descriptions" className="mb-2">
            Descriptions
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Descriptions"
            rows={3}
          ></textarea>
        </div>
        <div className="single-input w-full">
          <label htmlFor="descriptions" className="mb-2">
            Upload Image
          </label>
          <input type="file" className="p-3 border rounded w-full" multiple />
        </div>
        <div className="single-input mt-5">
          <button className="btn btn-accent">Save Event</button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
