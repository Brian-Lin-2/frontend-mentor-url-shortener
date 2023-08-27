import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const validateInfo = () => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /.+\@.+\..+/;

    if (!emailRegex.test(email) && password === "") {
      setError({ email: true, password: true });
      return false;
    } else if (!emailRegex.test(email)) {
      setError({ ...error, email: true });
      return false;
    } else if (password === "") {
      setError({ ...error, password: true });
      return false;
    } else if (emailRegex.test(email) && password !== "") {
      setError({ email: false, password: false });
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
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={passwordStyle}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-cyan p-1 rounded text-white hover:opacity-80">
          Login
        </button>
        <Link
          to="/register"
          className="underline text-center -mt-4 text-black hover:text-grayish-violet"
        >
          Create Account
        </Link>
        {(error.email || email.password) && (
          <p className="text-center -mt-4 -mb-4 text-red">
            Invalid Information.
          </p>
        )}
      </form>
    </div>
  );
}
