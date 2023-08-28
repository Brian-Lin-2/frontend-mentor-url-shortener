import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmPw: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPw: false,
    errorText: "",
  });
  const [message, setMessage] = useState("");

  const validateInfo = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const { email, password, confirmPw } = info;

    if (password !== confirmPw) {
      setError({
        email: false,
        password: true,
        confirmPw: true,
        errorText: "Different Passwords.",
      });
      return false;
    } else if (!emailRegex.test(email) && password === "" && confirmPw === "") {
      setError({
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
        confirmPw: false,
        errorText: "",
      });
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInfo()) {
      axios
        .post("http://localhost:3306/register", {
          email: info.email,
          password: info.password,
        })
        .then((res) => {
          if (res.data.message) {
            setError({
              email: true,
              password: false,
              confirmPw: false,
              errorText: res.data.message,
            });
          } else {
            setMessage("Account Created!");
          }
        })
        .catch((e) => console.log(e));
    }
  };

  let style = {
    email: "border-b outline-none",
    password: "border-b outline-none",
    confirmPw: "border-b outline-none",
  };

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
        <button className="bg-cyan p-1 rounded text-white hover:bg-light-cyan">
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
        {!error.email &&
          !error.password &&
          !error.confirmPw &&
          message !== "" && (
            <p className="text-center -mt-5 -mb-4 text-cyan">{message}</p>
          )}
      </form>
    </div>
  );
}
