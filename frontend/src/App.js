/*
  TODOS:
  
  - Create a logo and a favicon
  - Experiment more with color accents
  - Create/implement a better job posted/updated/deleted modal
  - Make the mini form on viewSingleJob screen say "Thank you" when submitted
  - Add pagination or infinite scroll when job list hits a certain number
  - Maybe add company logo upload/display

*/

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// Context
import UserContext from "./context/UserContext";

// CSS
import GlobalStyles from "./styles/GlobalStyles";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Pages
import JobList from "./pages/JobList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewSingleJob from "./pages/ViewSingleJob";
import CreateNewJobListing from "./pages/CreateNewJobListing";
import UpdateJobListing from "./pages/UpdateJobListing";

function App() {
  const url = "https://jr-dev-sim-backend.herokuapp.com";
  // const url = "http://localhost:5000";
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
      }
      const getUser = await axios.get(`${url}/api/user`, {
        headers: { "auth-token": token }
      });
      setUserData({
        token,
        user: { name: getUser.data.name, _id: getUser.data._id }
      });
    };
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <GlobalStyles />
        <Nav />
        <main className="main-container">
          <Route exact path="/" component={JobList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/jobs/:jobId" component={ViewSingleJob} />
          <Route path="/create" component={CreateNewJobListing} />
          <Route path="/update/:jobId" component={UpdateJobListing} />
        </main>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
