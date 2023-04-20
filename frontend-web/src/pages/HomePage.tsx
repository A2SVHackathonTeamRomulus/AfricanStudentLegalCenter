import React from "react";
import NavBar from "../components/NavBar";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import { useState } from "react";

function HomePage() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <NavBar />
      <div>
        <button
          onClick={() => setLogin(true)}
          className="btn btn-secondary m-2"
          type="submit"
        >
          Login
        </button>
        {login ? <LoginPage /> : <UserPage />}
      </div>
    </div>
  );
}

export default HomePage;
