// import { makeStyles } from '@mui/styles';
import {Container, makeStyles} from "@material-ui/core";
import Post from "./Post";
import {Stack} from "@mui/material";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    stackrow: {
        marginBottom: theme.spacing(5),
    },
}));
function Feed() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Stack direction="row" spacing={2} className={classes.stackrow}>
                <Post/>
                <Post/>
                <Post/>
            </Stack>
            <Stack direction="row" spacing={2} className={classes.stackrow}>
                <Post/>
                <Post/>
                <Post/>
            </Stack>
            <Stack direction="row" spacing={2} className={classes.stackrow}>
                <Post/>
                <Post/>
                <Post/>
            </Stack>
        </Container>

    );
}

export default Feed;
