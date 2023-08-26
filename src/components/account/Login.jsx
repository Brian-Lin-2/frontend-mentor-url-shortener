import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray font-poppins">
      <form className="bg-white p-10 flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <Link to="/">
            <img className="w-7" src="/images/arrow-back.svg" alt="" />
          </Link>
          <h1 className="text-2xl">Login</h1>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border outline-none"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border outline-none"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <button className="border">Login</button>
        <Link to="/register" className="underline text-center">
          Create Account
        </Link>
      </form>
    </div>
  );
}
