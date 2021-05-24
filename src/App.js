import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/AddService/AddService";
import CheckOut from "./components/CheckOut/CheckOut";
import ContactUs from "./components/ContactUs/ContactUs";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import Shipment from "./components/Shipment/Shipment";
import Update from "./components/Update/Update";
import UpdateReview from "./components/UpdateReview/UpdateReview";
import Testing from "./components/Dashboard/Testing/Testing";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState("");
  return (
    <UserContext.Provider value = {{user: [loggedInUser,setLoggedInUser], admin: [isAdmin, setIsAdmin]}}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/contact">
            <ContactUs></ContactUs>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/service/update/:id">
            <Update></Update>
          </PrivateRoute>
          <Route path="/service/:id">
            <CheckOut></CheckOut>
          </Route>
          <PrivateRoute path="/shipment/:id">
            <Shipment></Shipment>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/review/update/:id"> 
            <UpdateReview></UpdateReview>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <Route path="/single/service/:id">
            <Testing></Testing>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
