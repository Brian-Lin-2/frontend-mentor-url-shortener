import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-light-gray p-10 flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border outline-none"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border outline-none"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="password">Confirm Password</label>
          <input
            className="border outline-none"
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="border">Register</button>
        <Link to="/login" className="underline text-center">
          Already have an account?
        </Link>
      </form>
    </div>
  );
}
