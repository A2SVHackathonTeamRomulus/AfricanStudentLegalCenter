import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginPage() {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div>
      {hasAccount ? (
        <Login onClick={() => setHasAccount(false)} />
      ) : (
        <Signup onClick={() => setHasAccount(true)} />
      )}
    </div>
  );
}

export default LoginPage;
