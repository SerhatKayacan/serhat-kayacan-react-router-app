import React, { useState } from "react";
import auth from "./auth";

export const LandingPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Landing Page</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      ></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button
        onClick={() => {
          auth.login(username, password, () => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
