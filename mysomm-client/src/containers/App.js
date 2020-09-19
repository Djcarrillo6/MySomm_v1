import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar';
import Main from "./Main";
import Join from "../components/chat/Join";
import Chat from "../components/chat/Chat";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);

  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    // to prevent someone from manually tampering with the key of jwToken in localstorage. 
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
};

const App = () => (

  <Provider store={store}>
    <Router>
      <div className="onboarding" >
        <Navbar />
        <Main />
        <Route path="/mysomm-join-chat" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </div>
    </Router>
  </Provider>

);



export default App;
