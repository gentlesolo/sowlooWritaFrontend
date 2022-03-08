// import { makeStyles } from '@mui/styles';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
// import styled from "@emotion/styled";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    button: {
        fontSize: "10px",
    },
    post: {
        cursor: "default",
    },
    media: {
        height: '250px',
        display: "none",
        [theme.breakpoints.up("sm")]:{
            height: '150',
        },
    },
}));
function ListBlogposts() {
    const classes = useStyles();

    return (
        <div>

        </div>
    );
}

export default ListBlogposts;
