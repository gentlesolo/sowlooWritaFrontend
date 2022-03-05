import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    text: {
        textAlign: "center",
    },
    footer: {
        //bottom: 0,
        width: "100%",
        height: 50,
        backgroundColor: "#3f51b5",
        //textAlign: "center",
        color: "white",
        alignItems: "center",
        marginTop: theme.spacing(5),
        display: "flex",
        justifyContent: "space-between",
        // position: "fixed",
        // bottom: 0,
    },
    toolbar: {
        display: "flex",
        //justifyContent: "space-between",
        bottom: 0,

    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer} fullWidth>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.text}>
                        All Rights Reserved 2022 @SowlooWrita
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;