import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHttp} from "../hooks/useHttp";
import {requests} from "../helpers/requests";
import {UserContext} from "../store/UserProvider";
import {Button, Grid, List, ListItem, Paper} from "@material-ui/core";
import {TaskInterface} from "../interfaces/TaskInterface";
import {TaskItem} from "../components/TaskItem";
import {Map} from "../components/Map";
import CustomSnackbar from "../components/CustomSnackbar";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '98vh',
        padding: theme.spacing(1.5),
        width: '100%',
        '@media screen and (min-device-width: 700px)': {
            width: '100%'
        }
    },
    tasks: {
        marginTop: theme.spacing(1),
        height: '10%',
        padding: theme.spacing(0.5),
        maxHeight: '10%',
        overflow: 'auto'
    },
    map: {
        marginTop: theme.spacing(1),
        height: '70%',
        overflow: 'hidden'
    },
    buttonGroup: {
        marginTop: theme.spacing(1),
        height: '20%',
        padding: theme.spacing(2)
    },
    button: {
        width: '100%',
        height: '100%'
    },
    list: {
        margin: 0,
        padding: 0
    }
}));

export default function HomeSnowblowerPage() {
    const classes = useStyles();
    const user = useContext(UserContext)
    const {request} = useHttp()
    const [tasks, setTasks] = useState([] as TaskInterface[])
    const [openSnack, setOpenSnack] = useState<boolean>(false)

    useEffect(() => {
        request(requests.getTasksByUserId.url(user.user.id), requests.getTasksByUserId.method, null, user.user.token)
            .then(data => {
                console.log(data)
                setTasks(data as TaskInterface[])
            })
    },[])

    return (
        <Container component="main" maxWidth="lg" className={classes.root}>
            <Paper elevation={3} className={classes.tasks}>
                <List className={classes.list}>
                    {tasks.map((item, index) => (
                        <ListItem className={classes.list}><TaskItem task={item} key={index} /></ListItem>
                    ))}
                </List>
            </Paper>
            <Paper elevation={3} className={classes.map}>
                <Map task={tasks[0]}/>
            </Paper>
            <Paper elevation={3} className={classes.buttonGroup}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Button
                            variant={'outlined'}
                            color="primary"
                            className={classes.button}
                            onClick={() => setOpenSnack(true)}
                        >
                            НАЧАЛ РАБОТУ
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={'outlined'}
                            color="primary"
                            className={classes.button}
                            onClick={() => setOpenSnack(true)}
                        >
                            ЗАКОНЧИЛ РАБОТУ
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={'outlined'}
                            color="primary"
                            className={classes.button}
                            onClick={() => setOpenSnack(true)}
                        >
                            ВОЗВРАЩАЮСЬ НА БАЗУ
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={'outlined'}
                            color="primary"
                            className={classes.button}
                            onClick={() => setOpenSnack(true)}
                        >
                            ТЕХНИЧЕСКИЙ ПЕРЕРЫВ
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <CustomSnackbar
                open={openSnack}
                handleClose={() => setOpenSnack(false)}
                message={"Информация передана диспетчеру"}
                kind={"info"}
            />
        </Container>
    );
}
