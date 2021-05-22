import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import {routes} from "../helpers/paths";
import {useHttp} from "../hooks/useHttp";
import {requests} from "../helpers/requests";
import CustomSnackbar from "../components/CustomSnackbar";
import {UserContext} from "../store/UserProvider";
import {UserResponseInterface} from "../interfaces/UserInterface";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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

export default function HomePage() {
    const classes = useStyles();
    const user = useContext(UserContext)
    const {clearError, request, loading, error} = useHttp()
    const history = useHistory()



    return (
        <Container component="main" maxWidth="xs">
            djfodojf
        </Container>
    );
}
