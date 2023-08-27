import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [info, setInfo] = useState({ email: "", password: "", confirmPw: "" });
  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPw: false,
    errorText: "",
  });

  const validateInfo = () => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /.+\@.+\..+/;
    const { email, password, confirmPw } = info;

    if (password !== confirmPw) {
      setError({
        ...error,
        password: true,
        confirmPw: true,
        errorText: "Different Passwords.",
      });
      return false;
    } else if (!emailRegex.test(email) && password === "" && confirmPw === "") {
      setError({
        ...error,
        email: true,
        password: true,
        confirmPw: true,
        errorText: "Invalid Information.",
      });
      return false;
    } else if (!emailRegex.test(email) && password === "") {
      setError({
        ...error,
        email: true,
        password: true,
        errorText: "Invalid Information.",
      });
      return false;
    } else if (!emailRegex.test(email) && confirmPw === "") {
      setError({
        ...error,
        email: true,
        confirmPw: true,
        errorText: "Invalid Information.",
      });
      return false;
    } else {
      setError({ email: false, password: false, confirmPw, errorText: "" });
      return true;
    }
  };

  const handleSubmit = (e) => {
    if (validateInfo()) {
      // Add backend.
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray font-poppins">
      <form
        className="bg-white p-10 rounded-lg flex flex-col gap-8 w-72"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-7">
          <Link to="/">
            <img className="w-7" src="/images/arrow-back.svg" alt="" />
          </Link>
          <h1 className="text-2xl">Register</h1>
        </div>
        <input
          className="border-b outline-none"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}
        />
        <input
          className="border-b outline-none"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setInfo({ ...info, password: e.target.value });
          }}
        />
        <input
          className="border-b outline-none"
          type="password"
          name="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setInfo({ ...info, confirmPw: e.target.value });
          }}
        />
        <button className="bg-cyan p-1 rounded text-white hover:text-black">
          Register
        </button>
        <Link
          to="/login"
          className="underline text-center -mt-5 text-black hover:text-grayish-violet"
        >
          Have an account?
        </Link>
      </form>
    </div>
  );
}
