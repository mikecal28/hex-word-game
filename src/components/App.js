import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../styles/app.scss";
import Home from "../components/pages/Home";
import solidIcons from "../util/fontawesome-icons/solidIcons";
import brandIcons from "../util/fontawesome-icons/brandIcons";

solidIcons();
brandIcons();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
