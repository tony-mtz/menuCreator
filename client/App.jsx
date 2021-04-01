// import React from 'react';
// import NavBar from './components/NavBar/NavBar';

// const App = () => {
  
//   return (
//     <div>
//       <NavBar/>
//     </div>
//   );
// };

import React from "react";
import "../client/App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NewForm from './components/NavBar/Forms/NewForm';
import ViewForm from './components/NavBar/Forms/ViewForm';
import EditForm from './components/NavBar/Forms/EditForm';
import MenuCreator from "./components/MenuCreator/MenuCreator";
import NavBar from "./components/NavBar/NavBar";

export const history = createBrowserHistory();

const App = () => {
  
  return (
    <div>
      <Router history={history}>
          {window.localStorage.getItem('email') ? <Route path="/" component={NavBar} /> : ''}
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/menu" component={MenuCreator} />
          {/* <PrivateRoute exact path="/" component={App}/> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
