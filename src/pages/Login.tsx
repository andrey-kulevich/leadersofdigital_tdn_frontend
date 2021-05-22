import React, {SyntheticEvent, useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import {routes} from "../helpers/paths";
import {useHttp} from "../hooks/useHttp";
import {requests} from "../helpers/requests";
import CustomSnackbar from "../components/CustomSnackbar";
import {UserContext} from "../store/UserProvider";
import {UserResponseInterface} from "../interfaces/UserInterface";
import {Paper} from "@material-ui/core";
import logo from "../img/logo.png"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
    logo: {
        marginBottom: theme.spacing(4)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color:'#fff'
    },
}));

export default function Login() {
    const classes = useStyles();
    const doctor = useContext(UserContext)
    const {clearError, request, loading, error} = useHttp()
    const [saveUser, setSaveUser] = useState<boolean>(false)
    const [authCredentials, setAuthCredentials] = useState<{login: string, password: string}>({login: '', password: ''})
    const history = useHistory()

    const handleChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setAuthCredentials({...authCredentials, [event.currentTarget.name]: event.currentTarget.value})
    }

    const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
        event.preventDefault()
        try {
            const data = await request(requests.login.url, requests.login.method,
                null, btoa(`${authCredentials.login}:${authCredentials.password}`))
            doctor.login(data as UserResponseInterface,
                btoa(`${authCredentials.login}:${authCredentials.password}`), saveUser)
            history.push(routes.toHome)
        } catch (e) {}
    }

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSaveUser(event.currentTarget.checked)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} className={classes.paper}>
                <img src={logo} alt="logo" width="80%" height="80%" className={classes.logo}/>
                <Typography variant="h5" align="center">ДОБРО ПОЖАЛОВАТЬ!</Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Логин"
                        name="login"
                        autoComplete="login"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={saveUser}
                                onChange={handleCheck}
                                color="primary"
                            />
                        }
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        className={classes.submit}
                    >
                        Войти
                    </Button>
                </form>
            </Paper>
            <CustomSnackbar
                open={Boolean(error)}
                handleClose={clearError}
                message={"Неверный логин или пароль!"}
                kind={"error"}
            />
        </Container>
    );
}
