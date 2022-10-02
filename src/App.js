import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./Components/Main/Main"
import Stats from "./Components/Stats/Stats"
import './App.scss';
import Header from "./Components/Header/Header";
import {Redirect} from "react-router";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "./store/reducer";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Header />
              <Redirect from={"*"} to={"/"} />
              <Route exact path="/">
                  <Main />
              </Route>
              <Route path="/stats">
                  <Stats />
              </Route>
          </Router>
      </Provider>

  );
}

export default App;
