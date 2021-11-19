import React from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const screenWidth = window.screen.width;
  console.log(screenWidth)
  return (
    <>
      {screenWidth <= 768 ? (
        <div className="mobile">
        <h1>Мобильная версия не предназначена для данного сайта</h1>
        <img src="images/oops.jpg" alt="oops" />
        </div>
      ) : (
        <div className="app">
          {!user ? (
            <Login />
          ) : (
            <div className="app__body">
              <Router>
                <Sidebar />
                <Switch>
                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <Chat />
                  </Route>
                </Switch>
              </Router>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
