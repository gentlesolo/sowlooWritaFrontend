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
// import ListSocialmedias from "./socialmedia/ListSocialmedias";
// import {Stack} from "@mui/material";
import {useEffect, useState} from "react";
import SocialmediaService from "./SocialmediaService";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
        alignItems: "center"
    },
    stackrow: {
        marginBottom: theme.spacing(5),
    },
    post: {
        outline: "0 solid transparent",
    }
}));
function SocialmediaFeed() {
    const classes = useStyles();

    const [socialmedias, setSocialmedias] = useState([]);

    useEffect(() => {

        SocialmediaService.getAllSocialmedias().then((response) => {
            setSocialmedias(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <Container className={classes.container}>
            <Box justify="flex-end" sx={{ width: "80%", paddingBottom: 20, alignItems: "center" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Industry</InputLabel>
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

                { socialmedias.map(item => (
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

export default SocialmediaFeed;
