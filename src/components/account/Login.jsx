import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray font-poppins">
      <form className="bg-white p-10 rounded-lg flex flex-col gap-7 w-72">
        <div className="flex items-center gap-11">
          <Link to="/">
            <img className="w-7" src="/images/arrow-back.svg" alt="" />
          </Link>
          <h1 className="text-2xl">Login</h1>
        </div>
        <input
          className="border-b outline-none"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border-b outline-none"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-cyan p-1 rounded text-white hover:text-black">
          Login
        </button>
        <Link
          to="/register"
          className="underline text-center -mt-4 text-black hover:text-grayish-violet"
        >
          Create Account
        </Link>
      </form>
    </div>
  );
}
