import {Grid, makeStyles} from "@material-ui/core";
import Leftbar from "../Leftbar";
import Feed from "../home/Feed";
import Rightbar from "../Rightbar";
import Add from "../Add";
import Footer from "../Footer";


const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display: "none",
        },
    },
}));

const Socialmedia = () =>{
    const classes = useStyles();
    return (

        // <Router>
        <div>

            <Grid container>


                <Grid item sm={2} xs={2}>
                    <Leftbar/>
                </Grid>
                <Grid item sm={7} xs={10}>
                    {/*<register/>*/}
                    <Feed/>

                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <Rightbar/>
                </Grid>
            </Grid>

            <Add/>
            <Footer/>
        </div>


    );
}

export default Socialmedia;