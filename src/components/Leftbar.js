// import { makeStyles } from '@mui/styles';
import {
    Container,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import {
    AdUnitsSharp,
    Article,
    DepartureBoard,
    Email,
    EventNoteSharp,
    FacebookSharp,
    Home,
    NewspaperSharp,
    ProductionQuantityLimitsSharp,
    RadioSharp,
    TvSharp,
    ViewHeadlineSharp,
} from "@mui/icons-material";
import {ListItemButton} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
    containerz: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        [theme.breakpoints.down("sm")]:{
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7",
            paddingLeft: "0",
            display: "none",
            visibility: "hidden",
        },
    },
    ListItemText: {
        fontFamily: "Sora",
    },
    listItem: {
        textDecoration: "none",
        color: "#727272",
        fontFamily: "Sora",
        '&:hover': {
            textDecoration: "none",
            // backgroundColor: "#e5e5e5",
            backgroundColor: theme.palette.action.hover,

            display: "inline-block",
            verticalAlign: "middle",
            webkitTransform: "perspective(1px) translateZ(0)",
            transform: "perspective(1px) translateZ(0)",
            boxShadow: "0 0 1px rgb(0 0 0 / 0%)",
            position: "relative",
        },
        '&.active': {
            textDecoration: "none",
            // backgroundColor: "#e5e5e5",
            backgroundColor: "#00f5d4",
            color: "black"
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(0),
        color: "black",
        [theme.breakpoints.up("sm")]:{
            fontSize: "10px",
        }

    },
    text:{
        fontWeight: 500,
        fontSize: "13px",
        fontFamily: "Sora",
        [theme.breakpoints.down("sm")]:{
            display:"none",
        },
    },
}));

function Leftbar() {
    const classes = useStyles();
    return (
        <Container className={classes.containerz}>

            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={NavLink} to="/headline" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ViewHeadlineSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText className={classes.text} primary="Headline" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/socialmedia" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <FacebookSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Social Media" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/emailcampaign" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Email className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/blogpost" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Article className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Blog Post" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/salesfunnel" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Article className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Sales Funnel" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/paid-advert" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdUnitsSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Paid Advert" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/cover-letter" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <EventNoteSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Cover Letter" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/radio-jingle" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <RadioSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Radio Jingle" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/tv-advert" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TvSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="TV Advert" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/billboard" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DepartureBoard className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Billboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={NavLink} to="/newspaper" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <NewspaperSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Newspaper" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={NavLink} to="/product-description" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ProductionQuantityLimitsSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Product Description" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />

        </Container>
    );
}

export default Leftbar;
