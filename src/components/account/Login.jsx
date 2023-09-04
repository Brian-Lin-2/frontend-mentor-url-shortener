import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const navigate = useNavigate();

  const validateInfo = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email) && password === "") {
      setError({ email: true, password: true });
      return false;
    } else if (!emailRegex.test(email)) {
      setError({ email: true, password: false });
      return false;
    } else if (password === "") {
      setError({ email: false, password: true });
      return false;
    } else if (emailRegex.test(email) && password !== "") {
      setError({ email: false, password: false });
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInfo()) {
      axios
        .post("https://url-shortener-backend-maf5.onrender.com/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data) {
            setLogin(true);
            navigate("/");
          } else {
            setError({ email: true, password: true });
          }
        })
        .catch((e) => console.log(e));
    }
  };

  let emailStyle = "border-b outline-none";
  let passwordStyle = "border-b outline-none";

  if (error.email) {
    emailStyle = "border-b-2 outline-none border-red";
  }
  if (error.password) {
    passwordStyle = "border-b-2 outline-none border-red";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray font-poppins">
      <form
        className="bg-white p-10 rounded-lg flex flex-col gap-7 w-72"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-11">
          <Link to="/">
            <img className="w-7" src="/images/arrow-back.svg" alt="" />
          </Link>
          <h1 className="text-2xl">Login</h1>
        </div>
        <input
          className={emailStyle}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={passwordStyle}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-cyan p-1 rounded text-white hover:bg-light-cyan">
          Login
        </button>
        <Link
          to="/register"
          className="underline text-center -mt-4 text-black hover:text-grayish-violet"
        >
          Create Account
        </Link>
        {(error.email || error.password) && (
          <p className="text-center -mt-5 -mb-4 text-red">
            Invalid Information.
          </p>
        )}
      </form>
    </div>
  );
}
