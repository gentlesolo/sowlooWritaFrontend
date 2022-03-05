// import { makeStyles } from '@mui/styles';
import * as React from 'react';
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
// import ListHeadlines from "./ListHeadlines";
// import {Home} from "@mui/icons-material";

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
function Login() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //const [firstname, setFirstname] =
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useState([]);

    const handleRegister=(e)=>{
        e.preventDefault();
        const user = {firstName, lastName, email, phoneNumber, password}
        console.log(user)
        fetch("http://localhost:8082/api/appuser/save",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(user)

        }).then(()=>{
            console.log("new user added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8082/api/appusers")
            .then(res=>res.json())
            .then((result)=>{
                    setUsers(result);
                }
            )
    },[])

    return (
        <Container className={classes.container}>

            <Paper elevation={3} className={classes.paper}>

                <form className={classes.form} autoComplete="off">
                    <Typography variant="h5" component="h6" className={classes.head}>
                        Registration
                    </Typography>
                    <div className={classes.item}>
                        <TextField id="outlined-size-normal"
                                   label="Email"
                                   value={email}
                                   onChange={
                                       (e)=>setEmail(e.target.value)}
                                   variant="outlined"
                                   type="email"
                                   style={{width: "100%"}}
                        />
                    </div>

                    <div className={classes.item}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
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
                            Create My Account
                        </Button>
                    </div>
                </form>
            </Paper>
        </Container>

    );
}

export default Login;
