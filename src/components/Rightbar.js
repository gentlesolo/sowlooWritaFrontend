// import { makeStyles } from '@mui/styles';
import {Container, makeStyles} from "@material-ui/core";
import {Editor} from "@tinymce/tinymce-react";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
}));

function Rightbar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
                // onChange={this.handleEditorChange}
            />
        </Container>
    );
}

export default Rightbar;
