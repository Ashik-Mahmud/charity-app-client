import { RiRefund2Line } from "react-icons/ri";

const Card = () => {
  return (
    <div className="py-10">
      <form action="">
        <div className="avatar flex items-center flex-col gap-3 mb-4">
          <span className="w-24 h-24 text-3xl rounded-full border  mx-auto grid place-items-center">
            <RiRefund2Line />
          </span>
          <h4 className="text-xl">Card Payment</h4>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue="ashik@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-1 items-center mt-4">
          <input
            type="text"
            placeholder="Donation Amount"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col gap-1 items-center mt-4">
          <input
            type="text"
            placeholder="Card Number here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-accent">Donate </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
