// import { makeStyles } from '@mui/styles';
import * as React from 'react';
import {useHistory, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {
    Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    makeStyles,
    OutlinedInput,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import SocialmediaService from "../socialmedia/SocialmediaService";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        width: 700,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: -220,
        left: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]:{
            width: "100vw",
            height: "100vh",
        },
    },
    head: {
        textAlign: "center",
        textDecorationStyle: "solid",
        marginBottom: theme.spacing(2),
        fontWeight: "bold",
    },
    paper: {
        padding: theme.spacing(5),
    },
    stackrow: {
        marginBottom: theme.spacing(5),
    },
    item: {
        marginBottom: theme.spacing(4),
    },
}));
function AddSocialmediaService() {
    const classes = useStyles();


    //const [firstname, setFirstname] =
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [industry, setIndustry] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    const [socialmedias, setSocialmedia] = useState([]);

    const handleRegister=(e)=> {
        e.preventDefault();
        const socialmedia = {name, description, industry, price}
        console.log(socialmedia)
        SocialmediaService.createSocialmedia(socialmedia).then((response) => {
            console.log(response.data)
            navigate.push('/socialmedia')
        }).catch((error) => {
            console.log(error)
        })
    }
    //     fetch("http://localhost:8082/api/socialmedia/",{
    //         method:"POST",
    //         headers:{"Content-Type": "application/json"},
    //         body: JSON.stringify(socialmedia)
    //
    //     }).then(()=>{
    //         console.log("new socialmedia added")
    //     })
    // }
    //
    // useEffect(()=>{
    //     fetch("http://localhost:8082/api/socialmedia/save")
    //         .then(res=>res.json())
    //         .then((result)=>{
    //                 setSocialmedia(result);
    //             }
    //         )
    // },[])

    return (
        <Container className={classes.container}>

            <Paper elevation={3} className={classes.paper}>

                <form className={classes.form} autoComplete="off">
                    <Typography variant="h5" component="h6" className={classes.head}>
                        Add New Social media
                    </Typography>
                    <div className={classes.item}>
                        <TextField id="outlined-size-normal"
                                   label="Name"
                                   value={name}
                                   onChange={(e)=>setName(e.target.value)}
                                   variant="outlined"
                                   style={{width: "100%"}}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField id="outlined-size-normal"
                                   label="description"
                                   value={description}
                                   onChange={
                                       (e)=>setDescription(e.target.value)}
                                   variant="outlined"
                                   style={{width: "100%"}}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField id="outlined-size-normal"
                                   label="Industry"
                                   value={industry}
                                   onChange={
                                       (e)=>setIndustry(e.target.value)}
                                   variant="outlined"
                                   type="text"
                                   style={{width: "100%"}}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField id="outlined-size-normal"
                                   label="Price"
                                   value={price}
                                   onChange={
                                       (e)=>setPrice(e.target.value)}
                                   variant="outlined"
                                   type="tel"
                                   style={{width: "100%"}}
                        />
                    </div>
                    <div className={classes.item}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleRegister}
                            style={{marginRight: 20}}
                            fullWidth
                        >
                            Create Socialmedia
                        </Button>
                    </div>
                </form>
            </Paper>
        </Container>

    );
}

export default AddSocialmediaService;
