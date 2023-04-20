import React, { useState } from "react";

function LogIn({ login, logout }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <>
    <br />
    <div style={{display: "flex", justifyContent: "center"}}>
      <h3>Login form</h3>
    </div>
    <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onChange={onChange}>
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
        </form>
      </div>
    </>
  );
}
export default LogIn;
