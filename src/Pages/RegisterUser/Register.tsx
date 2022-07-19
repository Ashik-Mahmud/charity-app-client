import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <section className="grid min-h-screen place-items-center">
      <form
        action="/"
        className="sm:w-1/3 bg-slate-50 p-10 rounded-lg relative"
      >
        <div className="avatar w-40 h-40  border-8 shadow-md border-white rounded-full absolute font-semibold text-8xl bg-slate-50 grid place-items-center left-56 -top-20">
          S
        </div>
        <h3 className="text-3xl mb-4 font-semibold flex items-center gap-3 pt-20">
          <span className="cursor-pointer" onClick={() => navigate(-1)}>
            <MdOutlineArrowBackIos />
          </span>{" "}
          Register for Being Volunteer
        </h3>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone no</span>
          </label>
          <input
            type="text"
            placeholder="Phone No here"
            className="input input-bordered w-full"
          />
        </div>
        <div className=" w-full form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <div className="flex items-center gap-4 border border-slate-300 p-3 rounded">
            <div className="flex items-center gap-3">
              <input type="radio" id="male" name="gender" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="radio" id="female" name="gender" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="radio" id="other" name="gender" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mt-4">
          <button className="btn btn-accent w-full">
            Register as Volunteer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
