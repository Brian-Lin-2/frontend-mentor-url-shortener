import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPw: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPw: false,
    errorText: "",
  });

  const validateInfo = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const { name, email, password, confirmPw } = info;

    if (password !== confirmPw) {
      setError({
        name: false,
        email: false,
        password: true,
        confirmPw: true,
        errorText: "Different Passwords.",
      });
      return false;
    } else if (
      !emailRegex.test(email) &&
      password === "" &&
      confirmPw === "" &&
      name === ""
    ) {
      setError({
        name: true,
        email: true,
        password: true,
        confirmPw: true,
        errorText: "Invalid Information.",
      });
      return false;
    } else if (!emailRegex.test(email) && password === "" && confirmPw === "") {
      setError({
        name: false,
        email: true,
        password: true,
        confirmPw: true,
        errorText: "Invalid Information.",
      });
      return false;
    } else if (password === "" && confirmPw === "") {
      setError({
        name: false,
        email: false,
        password: true,
        confirmPw: true,
        errorText: "Invalid Information.",
      });
      return false;
    } else if (!emailRegex.test(email)) {
      setError({
        name: false,
        email: true,
        password: false,
        confirmPw: false,
        errorText: "Invalid Information.",
      });
      return false;
    } else {
      setError({
        name: false,
        email: false,
        password: false,
        confirmPw,
        errorText: "",
      });
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

  let style = {
    name: "border-b outline-none",
    email: "border-b outline-none",
    password: "border-b outline-none",
    confirmPw: "border-b outline-none",
  };

  if (error.name) {
    style.name = "border-b-2 outline-none text-red";
  }
  if (error.email) {
    style.email = "border-b-2 outline-none text-red";
  }
  if (error.password) {
    style.password = "border-b-2 outline-none text-red";
  }
  if (error.confirmPw) {
    style.confirmPw = "border-b-2 outline-none text-red";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray font-poppins">
      <form
        className="bg-white p-10 rounded-lg flex flex-col gap-7 w-72"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-7">
          <Link to="/">
            <img className="w-7" src="/images/arrow-back.svg" alt="" />
          </Link>
          <h1 className="text-2xl">Register</h1>
        </div>
        <input
          className={style.name}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
        <input
          className={style.email}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setInfo({ ...info, email: e.target.value });
          }}
        />
        <input
          className={style.password}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setInfo({ ...info, password: e.target.value });
          }}
        />
        <input
          className={style.confirmPw}
          type="password"
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
          className="underline text-center -mt-4 text-black hover:text-grayish-violet"
        >
          Have An Account?
        </Link>
        {(error.email || error.password || error.confirmPw) && (
          <p className="text-center -mt-5 -mb-4 text-red">{error.errorText}</p>
        )}
      </form>
    </div>
  );
}
