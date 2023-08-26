import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Register from "./Register";
import YodlerNavbar from './YodlerNavbar';

function App() {
  return (
    <BrowserRouter>
      <YodlerNavbar />
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
