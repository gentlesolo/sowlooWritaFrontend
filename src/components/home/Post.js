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
function Post() {
    const classes = useStyles();

    const state = {
        value: '',
        copied: false,
    };
    return (

        <Card className={classes.card}>
            <CardActionArea>
                {/*<CardMedia*/}
                {/*    className={classes.media}*/}
                {/*    image="#"*/}
                {/*    title="My ListHeadlines"*/}
                {/*/>*/}
                <CardContent className={classes.post}>
                    {/*<Typography gutterBottom variant="h6">*/}
                    {/*    /!*My First ListHeadlines*!/*/}
                    {/*</Typography>*/}
                    <Typography variant="caption" className={classes.post}>
                        Stop wasting your hard earned money on social media managers

                        Social media managers cannot work 24/7 everyday

                        With a website + Sales funnel you have higher chances to generate qualified customers for your small business.

                        Stop waiting till the end of the month for Likes, connections and followers

                        Sign up today to get more informat
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" className={classes.button}>copy</Button>
                {/*<Button size="small" color="primary">Learn More</Button>*/}
            </CardActions>
        </Card>

    );
}

export default Post;
