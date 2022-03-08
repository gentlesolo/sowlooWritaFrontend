import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {ListItemButton} from "@mui/material";
import {
    AdUnitsSharp,
    Article, DepartureBoard,
    Email,
    EventNoteSharp,
    FacebookSharp,
    Home, NewspaperSharp, ProductionQuantityLimitsSharp, RadioSharp, TvSharp,
    ViewHeadlineSharp
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({

}))

const MobileMenu = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(true);

    return (
        <div>
            <Drawer className onClose={() =>
                setOpenDrawer(false)} open={openDrawer}>
                <List>
                    <ListItem component={NavLink} to="/home" className={classes.listItem}>
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
                            <ListItemText primary="Email" />
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
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Email className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Article className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Blog ListHeadlines" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdUnitsSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Paid Advert" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <EventNoteSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Cover Letter" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <RadioSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Radio Jingle" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TvSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="TV Advert" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem  component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DepartureBoard className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Billboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={NavLink} to="/" className={classes.listItem}>
                        <ListItemButton>
                            <ListItemIcon>
                                <NewspaperSharp className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Newspaper" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={NavLink} to="/" className={classes.listItem}>
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

export default MobileMenu;
