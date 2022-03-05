import {Grid, makeStyles} from "@material-ui/core";
import Banner from "./Banner";
import Leftbar from "../Leftbar";
import {Alert, AlertTitle} from "@mui/material";
import HeadlineFeed from "../headline/HeadlineFeed";
import Rightbar from "../Rightbar";


const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display: "none",
        },
    },
}));

const Landing = () =>{
    const classes = useStyles();
    return (

        <div>
            <Grid container>
                {/*<Grid item sm={2} xs={0}>*/}
                {/*    <Leftbar/>*/}
                {/*</Grid>*/}
                <Grid item sm={12} xs={12} sx={{backgroundColor: "#fbfeff"}}>
                    <Banner/>
                </Grid>
                {/*<Grid item sm={3} xs={0} className={classes.right}>*/}
                {/*    <Rightbar/>*/}
                {/*</Grid>*/}
            </Grid>
        </div>


    );
}

export default Landing;