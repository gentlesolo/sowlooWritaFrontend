import {Grid, makeStyles} from "@material-ui/core";
import Leftbar from "../Leftbar";
// import Feed from "../home/Feed";
// import Rightbar from "../Rightbar";
// import Add from "../Add";
// import Footer from "../Footer";
import HeadlineFeed from "./HeadlineFeed";
import {Alert, AlertTitle} from "@mui/material";
import React from "react";



const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display: "none",
        },
    },
}));

const Headline = () =>{
    const classes = useStyles();
    return (

        // <Router>
        <div>
            <Grid container>
                <Grid item sm={2} xs={0}>
                    <Leftbar/>
                </Grid>
                <Grid item sm={7} xs={12} sx={{backgroundColor: "#fff7ff"}}>
                    <Alert severity="info" sx={{mt: "80px"}}>
                        <AlertTitle>Tips</AlertTitle>
                        <strong>Select</strong> — <strong>Edit</strong> — <strong>Copy</strong>
                    </Alert>
                    <HeadlineFeed/>
                </Grid>
                <Grid item sm={3} xs={0} className={classes.right}>
                    {/*<Rightbar/>*/}
                </Grid>
            </Grid>

            {/*<Add/>*/}
            {/*<Footer/>*/}
        </div>


    );
}

export default Headline;