// import { makeStyles } from '@mui/styles';
// import {AppBar, Toolbar, Typography} from "@mui/material";
import {
    AppBar,
    Avatar,
    Badge, Box, Drawer,
    IconButton,
    InputBase, Link,
    List,
    ListItem, ListItemIcon, ListItemText,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import {
    AdUnitsSharp,
    Article,
    Cancel, DepartureBoard,
    Email, EventNoteSharp,
    FacebookSharp,
    Home,
    Mail, NewspaperSharp,
    Notifications, ProductionQuantityLimitsSharp, RadioSharp,
    Search, TvSharp,
    ViewHeadlineSharp
} from "@mui/icons-material";
import {alpha, ListItemButton} from "@mui/material";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import img from "./assets/WritaBlue_Logo.svg";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        backgroundColor: "#cbf1e7",
        // justifyContent: "space-between"
    },
    image: {
        width: "30%",
        paddingLeft: theme.spacing(12),
        [theme.breakpoints.down("sm")]:{
            //display: (props)=> (props.open ? "flex" : "none"),
            width: "52%",
        },
    },
    search: {
        display: "flex",
        visibility: "hidden",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]:{
            display: (props)=> (props.open ? "flex" : "none"),
            width: "70%",
        },
    },
    drawer: {

        [theme.breakpoints.up("sm")]:{
            display: (props)=> (props.openDrawer ? "flex" : "none"),
            width: "70%",
        },
    },
    listItem: {
        textDecoration: "none",
        color: "#727272",
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
            backgroundColor: "#ffdfff",
            color: "black"
        }
    },
    menuicon: {
        // [theme.breakpoints.down("sm")]:{
        //     display: (props)=> (props.open ? "flex" : "none"),
        //     width: "70%",
        // },
    },
    input:{
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display: "none",
            visibility: "hidden"
        },
    },
    searchButton: {
       marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display: "none",
            visibility: "hidden"
        },
    },
    icons: {
        display: "none",
        alignItems: "center",
        // [theme.breakpoints.down("sm")]:{
        //     display: (props)=> (props.open ? "none" : "flex"),
        // },
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    logoLarge:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block",
        }
    },
    logoSmall:{
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none",
        }
    }
}));

const Navbar = () => {
    const [open, setOpen,] = useState(false);
    const classes = useStyles({open});
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>

                    {/*<Typography variant="h6" className={classes.logoLarge}>*/}
                    {/*    Sowloo Writa*/}
                    {/*</Typography>*/}

                    <IconButton className={classes.logoSmall}
                                size="large"
                                edge="start"
                                color="black"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link href="/">
                        <Box component="img" src={img} className={[classes.image, classes.logoLarge].join(' ')} />
                    </Link>


                    {/*<Typography variant="h6" className={classes.logoSmall}>*/}
                    {/*    Writa*/}
                    {/*</Typography>*/}
                    <Link href="/">
                        <Box component="img" src={img} className={[classes.image, classes.logoSmall].join(' ')} />
                    </Link>
                    <div className={classes.search}>
                        <Search/>
                        <InputBase placeholder="search...." className={classes.input}/>
                        <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchButton}
                                onClick={() => setOpen(true)}/>
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="#" />
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer className={classes.drawer} onClose={() =>
                setOpenDrawer(false)} open={openDrawer} onLoad={() => setOpenDrawer(false)}>
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
                            <ListItemText primary="Headline" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/social-media" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <FacebookSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Social Media" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/email" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Email className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/blog-post" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Article className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Blog Post" />
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
            </Drawer>
        </div>
    );
};

export default Navbar;
