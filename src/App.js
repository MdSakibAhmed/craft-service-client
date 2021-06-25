import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createContext, useContext, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute';
import ToBeBookedItem from './components/Home/ToBeBookedItem/ToBeBookedItem';
import Login from './components/Login/Login';
export const UserContext = createContext()
function App() {
const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>

<Switch>
<PrivateRoute path="/buyTicket/:id">
<ToBeBookedItem></ToBeBookedItem>
</PrivateRoute>
<Route path="/processPayment">

</Route>
<Route path="/login">
  <Login></Login>
</Route>
<Home/>
</Switch>
    </Router>
   
  

    </UserContext.Provider>
  );
}

export default App;
