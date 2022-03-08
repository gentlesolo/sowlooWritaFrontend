// import { makeStyles } from '@mui/styles';
import {Box, Button, Grid, makeStyles, Typography} from "@material-ui/core";
import img from "../assets/undraw_ideas_re_7twj.svg"
// import styled from "@emotion/styled";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: "#fff8ff",
        // backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]:{
            backgroundColor: "#fff7ff",
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
    rightsection: {
        paddingLeft: theme.spacing(15),
        alignItems: "center",
        marginTop: theme.spacing(15),
        [theme.breakpoints.down("sm")]:{
            marginBottom: theme.spacing(0),
            fontSize: "17px",
            width: "100%",
            // height: "45px",
            alignItems: "center",
            padding: "15px",
            // fontWeight: "bolder",

        },
    },
    leftsection: {
        paddingLeft: theme.spacing(15),
        alignItems: "center",
        marginTop: theme.spacing(29),
        [theme.breakpoints.down("sm")]:{
            backgroundColor: "white",
            color: "#555",
            // border: "1px solid #ece7e7",
            padding: "15px",
            width: "100%",
            marginTop: theme.spacing(0),
        },
    },

    headtext: {
        textAlign: "left",
        fontWeight: "700",
        fontFamily: "Ubuntu",
        color: "#202020",
        [theme.breakpoints.down("sm")]:{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bolder",
        },
    },
    subtitle: {
        textAlign: "left",
        width: "70%",
        marginBottom: theme.spacing(3),
        fontSize: "20px",
        fontFamily: "Sora",
        [theme.breakpoints.down("sm")]:{
            fontSize: "17px",
            textAlign: "center",
            width: "100%",
            // fontWeight: "bolder",

        },
    },
    btn: {
        borderRadius: "5px",
        backgroundColor: "#ff00ff",
        color: "white",
        width: "30%",
        height: "8%",
        fontWeight: "bold",
        fontSize: "16px",
        [theme.breakpoints.down("sm")]:{
            fontSize: "17px",
            width: "100%",
            height: "45px",
            alignItems: "center",
            aligncenter: "center",
            // fontWeight: "bolder",

        },
    },
    image: {
        [theme.breakpoints.down("sm")]:{
            width: "95%",
            padding: "-35px",

        },
    },
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: '250px',
        display: "none",
        [theme.breakpoints.up("sm")]:{
            height: '150',
        },
    },
}));
function Banner() {
    const classes = useStyles();
    return (

        <div>
            <Grid container className={classes.container}>
                <Grid item sm={6} xs={12} className={classes.leftsection}>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        className={classes.headtext}>
                        Your Content Assistant
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.subtitle}
                        gutterBottom component="div">
                        Start generating high converting marketing contents for your
                        business and personal brand. Create Social Media Content,
                        Create Blog Content, Create Email Content, Sales Copy etc.

                    </Typography>
                    <Button variant="contained" className={classes.btn} href="/headline">
                        Get Started Now
                    </Button>
                </Grid>
                <Grid item sm={6} xs={12} alignItems="center" className={classes.rightsection}>
                    <Box component="img" src={img} className={classes.image}/>
                    {/*<Image src={img} width="50%" object-fit="contain"/>*/}
                </Grid>
            </Grid>
        </div>

    );
}

export default Banner;
