import React, {useState, useRef} from "react"
import {makeStyles} from "@material-ui/core/styles/index";
import postWrite from "../../services/PostWrite";
import {api} from "../../constants/api"

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

//Material UI Icons
import UserIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },

    input: {
        marginLeft: '8px',
        flex: 1,

    },

    iconButton: {
        padding: 10,
    },

    grid: {
        direction: "row",
        justify: "center",
        alignItems: "center"
    }
}));

export function Write() {
    const classes = useStyles();
    const inputRef = useRef();
    const [posting, setPosting] = useState({
        owner: "",
        content: ""
    });
    const {owner, content} = posting

    const onChangeHandler = e => {
        const {name, value} = e.target;
        setPosting({...posting, [name]: value})
    };

    const onSubmit = () => {
        postWrite(owner, content, api);
        setPosting({owner: "", content: ""});
        inputRef.current.focus();
    };

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid className={classes.grid} item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <InputBase
                            className={classes.input}
                            placeholder="작성자"
                            name="owner"
                            value={owner}
                            ref={inputRef}
                            onChange={onChangeHandler}
                        />
                        <UserIcon/>
                    </Paper>
                </Grid>

                <Grid className={classes.grid} item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <InputBase
                            className={classes.input}
                            placeholder="내용"
                            name="content"
                            value={content}
                            onChange={onChangeHandler}
                        />
                        <CreateIcon/>
                    </Paper>

                </Grid>
            </Grid>
            <p></p>
            <Button variant="contained" component="span" onClick={onSubmit}>
                업로드
            </Button>
        </React.Fragment>
    )
}