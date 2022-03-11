// import { makeStyles } from '@mui/styles';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Container, FormControl, Grid, InputLabel,
    makeStyles, MenuItem, Select, TextField,
    Typography
} from "@material-ui/core";
// import ListHeadlines from "./headline/ListHeadlines";
import {Stack} from "@mui/material";
import {useEffect, useState} from "react";
import HeadlineService from "./HeadlineService";
import * as React from "react";
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
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        HeadlineService.getAllHeadlines().then((response) => {
            setHeadlines(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        setFilteredData(
            headlines.filter((headline) => headline.industry?.toLowerCase().includes(search?.toLowerCase()))
        )
    }, [search, headlines]);


    return (
        <Container className={classes.container}>
            <Box className={classes.box} justify="flex-end">

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter by Industry</InputLabel>
                    <Select
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={""}
                        label="industry"
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    >
                        <MenuItem value="">None</MenuItem>
                        { filteredData.length === 0 ? <div>No result found</div> :
                            filteredData.map(item =>
                                (
                                    <MenuItem key={item.id} value={item.industry}>{item.industry}</MenuItem>

                                ))
                        }

                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={2} className={classes.stackrow}>

                { filteredData.length === 0 ? <div>No result found</div> :
                    filteredData.map(item =>
                        (
                            <Grid item xs={6} md={3} key={item.id}>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent className={classes.post}>
                                            <Typography suppressContentEditableWarning={true} contentEditable="true" variant="body2" className={classes.post}>
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
