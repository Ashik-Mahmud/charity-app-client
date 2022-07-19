import DonationRow from "./DonationRow";

function TotalDonations() {
  return (
    <div>
      <div className="title flex items-center justify-between p-3 rounded my-3 bg-slate-50">
        <h3 className="text-2xl font-semibold">Total Donations</h3>
        <div className="filters flex items-center gap-2">
          <div className="filter-item flex flex-col gap-1">
            <label htmlFor="">By Date</label>
            <input type="date" className="input input-bordered w-full" />
          </div>
          <div className="filter-item flex flex-col gap-1">
            <label htmlFor="">By Event</label>
            <select className="select select-bordered">
              <option>All</option>
              <option>Helpless People</option>
              <option>Flooding People</option>
            </select>
          </div>
          <div className="filter-item flex flex-col gap-1">
            <label htmlFor="">By Location</label>
            <select className="select select-bordered">
              <option>All</option>
              <option>Helpless People</option>
              <option>Flooding People</option>
            </select>
          </div>
          <div className="filter-item flex flex-col gap-1">
            <label htmlFor="">By Labels</label>
            <select className="select select-bordered">
              <option>All</option>
              <option>Emergency</option>
              <option>Serious</option>
            </select>
          </div>
        </div>
      </div>
      <div className="total-donations-container">
        <div className="total-donations-card shadow rounded p-2 text-center flex flex-col items-center">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Events Name</th>
                  <th>Name</th>
                  <th className="w-14">Address</th>
                  <th>Email</th>
                  <th>Donation Amount</th>
                  <th>Transaction ID</th>
                  <th>Notes</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <DonationRow />
                <DonationRow />
                <DonationRow />
                <DonationRow />
                <DonationRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalDonations;
