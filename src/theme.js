// import {createTheme} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import {purple} from "@mui/material/colors";


export const theme = createTheme({
    Typography: {
        fontFamily: ['Montserrat', 'Ubuntu'].join(','),
    },
    palette: {
        primary: {
            main: purple[50],
        },
    },
});