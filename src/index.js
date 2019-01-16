import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createHashHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// const hist = createHashHistory();

// let HelloWorld = () => {
//   return <h1>Hello there World!</h1>
// }

ReactDOM.render(<App/>, document.getElementById("root"));

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       {indexRoutes.map((prop, key) => {
//         return <Route path={prop.path} component={prop.component} key={key} />;
//       })}
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );