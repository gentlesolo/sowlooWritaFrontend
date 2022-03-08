import {Grid, makeStyles} from "@material-ui/core";
import Leftbar from "../Leftbar";
import Feed from "../home/Feed";
import Rightbar from "../Rightbar";
import Add from "../Add";
import Footer from "../Footer";
import BlogpostFeed from "./BlogpostFeed";
import {Alert, AlertTitle} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display: "none",
        },
    },
}));

const Blogpost = () =>{
    const classes = useStyles();
    return (

        // <Router>
        <div>
            <Grid container>
                <Grid item sm={2} xs={0}>
                    <Leftbar/>
                </Grid>
                <Grid item sm={7} xs={12} sx={{backgroundColor: "#fbfeff"}}>
                    <Alert severity="info" sx={{mt: "80px"}}>
                        <AlertTitle>Tips</AlertTitle>
                        <strong>Select</strong> — <strong>Edit</strong> — <strong>Copy</strong>
                    </Alert>
                    <BlogpostFeed/>
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

export default Blogpost;