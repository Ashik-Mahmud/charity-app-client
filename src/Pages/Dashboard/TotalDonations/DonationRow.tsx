import { BsFillClockFill } from "react-icons/bs";

const DonationRow = () => {
  return (
    <tr>
      <th>1</th>
      <th className="cursor-pointer" title="12 Jan, 2022 at 12:32AM">
        <BsFillClockFill />
      </th>
      <th>
        <b>Helpless People</b>
      </th>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
      <td>15454k</td>
      <td>adsf254353423</td>
      <td>Do something Difference</td>
      <td>
        <span>PAID</span>
      </td>
      <td>
        <button className="btn btn-sm btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default DonationRow;
