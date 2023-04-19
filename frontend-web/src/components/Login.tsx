import React, { FormEvent, useRef, useState } from "react";
import axios from "axios";

interface Props {
  onClick: () => void;
}

const Login = ({ onClick }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const person = { email: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (emailRef.current !== null) person.email = emailRef.current.value;
    if (passwordRef.current !== null)
      person.password = passwordRef.current.value;

    try {
      // Make a POST request to your backend endpoint for login
      const response = await axios.post("<your_backend_endpoint>/login", {
        email: person.email,
        password: person.password,
      });

      // Handle the response from backend
      if (response.status === 200) {
        // Successful login
        console.log("Login successful!");
        // Perform any other actions after successful login
      } else {
        // Failed login
        console.log("Login failed!");
        setLoginError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("An error occurred during login. Please try again later.");
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {loginError && (
        <div className="alert alert-danger" role="alert">
          {loginError}
        </div>
      )}
      <div className="mb-3 ">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          ref={passwordRef}
          id="password"
          type={showPassword ? "text" : "password"}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          id="check"
          type="checkbox"
          className="form-check"
          checked={showPassword}
          onChange={handlePasswordVisibility}
        />
        <label htmlFor="check" className="form-check-label">
          Show Password
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <p>
        Don't have an account?
        <button className="btn btn-primary" onClick={onClick}>
          Signup
        </button>{" "}
      </p>
    </form>
  );
};

export default Login;
