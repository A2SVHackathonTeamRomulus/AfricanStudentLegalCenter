import React, { FormEvent, useRef, useState } from "react";

interface Props {
  onClick: () => void;
}

const Signup = ({ onClick }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const person = { name: "", email: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (emailRef.current !== null) person.email = emailRef.current.value;
    if (passwordRef.current !== null)
      person.password = passwordRef.current.value;
    console.log(person);

    try {
      // Make a POST request to the backend API endpoint
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });

      if (response.ok) {
        // Signup successful, handle response
        console.log("Signup successful");
        // You can redirect to another page or show a success message here
      } else {
        // Signup failed, handle error response
        console.error("Signup failed");
        // You can show an error message to the user here
      }
    } catch (error) {
      console.error("Signup failed", error);
      // You can show an error message to the user here
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Student Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
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
        Signup
      </button>
      <p>
        Already have an account?
        <button className="btn btn-primary" onClick={onClick}>
          Login
        </button>{" "}
      </p>
    </form>
  );
};

export default Signup;
