import React from "react";
import { render } from "react-dom";

//components
import App from "./components/App";
import Single from "./components/Single";
import PostsGrid from "./components/PostsGrid";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PostsGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
