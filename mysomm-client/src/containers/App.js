import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar';
import Main from "./Main";
import ChatRoom from '../components/ChatRoom';
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
}

const App = () => (

  <Provider store={store}>
    <Router>
      <div className="onboarding" >
        <Navbar />
        <Main />
        <ChatRoom path="/mysomm-chat" />
      </div>
    </Router>
  </Provider>

);



export default App;
