import {
    Button,
    Container,
    Fab,
    List,
    ListItem, ListItemIcon, ListItemText,
    makeStyles,
    Modal,
    Tooltip
} from "@material-ui/core";
import EventIcon from '@mui/icons-material/Event';
import {Add as AddIcon, CampaignSharp} from "@mui/icons-material"
import {useState} from "react";
import {ListItemButton} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 10,
        right: 20,
        backgroundColor: "#ff00ff",
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]:{
            width: "80vw",
            height: "40vh",
        },
    },
    list: {
        paddingBottom: theme.spacing(20),
    },
}));
function Add() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={()=> setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <List className={classes.list}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EventIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create Content Calendar" />
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CampaignSharp />
                                </ListItemIcon>
                                <ListItemText primary="Create Campaign" />
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Button variant="outlined" color="secondary"
                            onClick={() => setOpen(false)}
                    fullWidth
                    >
                        Close
                    </Button>
                </Container>
            </Modal>
        </>
    );
}

export default Add;
