import './App.css';
import React, {useEffect} from "react";
// import { makeStyles } from '@mui/styles';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Footer from "./components/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import Login from "./components/user-registration/Login";
import Socialmedia from "./components/socialmedia/Socialmedia";
import HeadlineFeed from "./components/headline/HeadlineFeed";
import Headline from "./components/headline/Headline";
import AddHeadlineService from "./components/addService/AddHeadlineService";
import Register from "./components/user-registration/Register";
import {Alert, AlertTitle} from "@mui/material";
import Email from "./components/emailcampaign/Email";
import Blogpost from "./components/blogpost/Blogpost";
import { useAnalytics } from "use-analytics";
import {Link} from "@material-ui/core";
import LoginNew from "./components/user-registration/LoginNew";

// import Authen from "./components/register";
//import {Route} from "@mui/icons-material";


function App() {
    let location = useLocation()
    const analytics = useAnalytics()

    useEffect(() => {
        // console.log('send page view')
        analytics.page()
    }, [location]);


    // const classes = useStyles();
  return (

      <div>
          <Navbar />
          <nav>
              <Link to="/">HOME</Link>
              <Link to="/headline">HEADLINE</Link>
          </nav>


          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/headline" element={<Headline/>}/>
              <Route path="/login" element={<LoginNew/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/socialmedia" element={<Socialmedia/>}/>
              <Route path="/blogpost" element={<Blogpost/>}/>
              <Route path="/emailcampaign" element={<Email/>}/>
              <Route path="/add-headline" element={<AddHeadlineService/>}/>
          </Routes>

          <Add/>
          {/*<Footer/>*/}

      </div>


  );
}

export default App;
