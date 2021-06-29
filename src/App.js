import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/ui/Navigation";
import Topbar from "./components/ui/Topbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="main">
          <Topbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/programas" component={Programas} />
            <Route exact path="/products/edit/:id" component={EditProduct} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
