import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header";
import { HomePage, CartPage } from "../pages";
import "./app.css";

const App = () => {
  return (
    <React.Fragment>
      <main role="main" className="container">
        <Header numsItems={5} total={210}></Header>
        <Switch basename="/re-store">
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
