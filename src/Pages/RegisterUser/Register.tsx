import { useState } from "react";
import { toast } from "react-hot-toast";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  /* form types */
  type inputDataTypes = {
    name: string;
    email: string;
    password: string;
    phone: string;
    gender: string;
    username: string;
  };
  /* state for taking the input values */
  const [registerForm, setRegisterForm] = useState<inputDataTypes>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    username: "",
    password: "",
  });

  /* picking value from input */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  /* submitting the form */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!registerForm.name) return toast.error("Name is required");
    if (!registerForm.email) return toast.error("Email is required");
    if (!registerForm.username) return toast.error("Username is required");
    if (!registerForm.password) return toast.error("Password is required");
    console.log(registerForm);
    event.currentTarget.reset();
    setRegisterForm({
      name: "",
      email: "",
      phone: "",
      gender: "",
      username: "",
      password: "",
    });
  };

  return (
    <section className="grid mt-24 place-items-center">
      <form
        onSubmit={handleSubmit}
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
            <span className="label-text">
              What is your name?{" "}
              <small className="text-red-500 text-md">*</small>
            </span>
          </label>
          <input
            type="text"
            placeholder="Name here"
            className="input input-bordered w-full"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Email <small className="text-red-500 text-md">*</small>
            </span>
          </label>
          <input
            type="email"
            placeholder="Email here"
            className="input input-bordered w-full"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone no</span>
          </label>
          <input
            type="text"
            placeholder="Phone No here"
            name="phone"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </div>
        <div className=" w-full form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <div className="flex items-center gap-4 border border-slate-300 p-3 rounded">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="other"
                value="other"
                name="gender"
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Username <small className="text-red-500 text-md">*</small>
            </span>
          </label>
          <input
            type="text"
            placeholder="Username here"
            onChange={handleChange}
            name="username"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Password <small className="text-red-500 text-md">*</small>
            </span>
          </label>
          <input
            type="password"
            placeholder="Password here"
            onChange={handleChange}
            name="password"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mt-4">
          <button className="btn btn-accent w-full">
            Register as Volunteer
          </button>
        </div>
        <Link
          to="/login"
          className="block text-center link link-hover mt-4 text-sm"
        >
          Login as Volunteer
        </Link>
      </form>
    </section>
  );
};

export default Register;
