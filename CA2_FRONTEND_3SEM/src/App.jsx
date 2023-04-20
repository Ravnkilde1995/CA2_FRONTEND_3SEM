import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import LogIn from "./components/LoginForm";
import LoggedIn from "./components/LoggedIn";
import Header from "./components/Header";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "", roles: "" });

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setUser({ name: "", roles: "" });
  };
  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      const token = facade.readJwtToken(facade.getToken());
      setUser({ username: token.username, roles: token.roles });
      setLoggedIn(true);
    });

    
  
  };



  return (
    // dette er et react if/else statement
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <Header
            loggedIn={loggedIn}
            login={login}
            user={user}
            logout={logout}
          />

          <LoggedIn user={user} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
