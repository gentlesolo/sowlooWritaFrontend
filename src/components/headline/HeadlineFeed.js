// import { makeStyles } from '@mui/styles';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Container, FormControl, Grid, InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
// import ListHeadlines from "./headline/ListHeadlines";
import {Stack} from "@mui/material";
import {useEffect, useState} from "react";
import HeadlineService from "./HeadlineService";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
        alignItems: "center",
        // backgroundColor: "#fff7ff",
    },
    box: {
        width: "100%",
        paddingBottom: 20,
        alignItems: "center"
    },
    stackrow: {
        marginBottom: theme.spacing(5),
    },
    post: {
        outline: "0 solid transparent",
        fontFamily: "Sora",
    },
    button: {
        color: "#cb04cb",
        fontSize: 11,
    },
}));
function HeadlineFeed() {
    const classes = useStyles();

    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {

        HeadlineService.getAllHeadlines().then((response) => {
            setHeadlines(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <Container className={classes.container}>
            <Box className={classes.box} justify="flex-end" sx={{  }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter by Industry</InputLabel>
                    <Select
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="industry"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={2} className={classes.stackrow}>

                { headlines.map(item => (
                    <Grid item xs={6} md={3} key={item.id}>

                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent className={classes.post}>
                                    <Typography contentEditable="true" variant="body2" className={classes.post}>
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" className={classes.button}>{item.industry}</Button>
                                </CardActions>
                        </Card>


                    </Grid>
                ))
            }
            </Grid>
        </Container>

    );
}

export default HeadlineFeed;
