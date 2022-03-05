import './App.css';
// import { makeStyles } from '@mui/styles';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import Login from "./components/user-registration/Login";
import Socialmedia from "./components/social media/Socialmedia";
import HeadlineFeed from "./components/headline/HeadlineFeed";
import Headline from "./components/headline/Headline";
import AddHeadlineService from "./components/addService/AddHeadlineService";
import Register from "./components/user-registration/Register";
import {Alert, AlertTitle} from "@mui/material";
// import Authen from "./components/register";
//import {Route} from "@mui/icons-material";


function App() {
    // const classes = useStyles();
  return (

      <div>
          <Navbar />

          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/headline" element={<Headline/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/social-media" element={<Socialmedia/>}/>
              <Route path="/add-headline" element={<AddHeadlineService/>}/>
          </Routes>

          <Add/>
          <Footer/>

      </div>


  );
}

export default App;
