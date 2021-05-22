import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHttp} from "../hooks/useHttp";
import {requests} from "../helpers/requests";
import {UserContext} from "../store/UserProvider";
import {Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, Typography} from "@material-ui/core";
import {TaskInterface} from "../interfaces/TaskInterface";
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
    quadrant: {
        marginTop: theme.spacing(1),
        height: theme.spacing(4),
        padding: theme.spacing(0.8),
    },
    map: {
        marginTop: theme.spacing(1),
        height: '70%',
        overflow: 'hidden'
    },
    buttonGroup: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        height: '20%',
        padding: theme.spacing(2)
    },
    list: {
        margin: 0,
        padding: 0
    },
    text: {
        marginTop: theme.spacing(2)
    },
    radio: {
        margin: '0px auto'
    }
}));

export default function HomeFieldEngineerPage() {
    const classes = useStyles();
    const user = useContext(UserContext)
    const {request} = useHttp()
    const [tasks, setTasks] = useState([] as TaskInterface[])
    const [openSnack, setOpenSnack] = useState<boolean>(false)
    const [isSnowPanel, setIsSnowPanel] = useState<boolean>(false)

    useEffect(() => {
        request(requests.getTasksByUserId.url(user.user.id), requests.getTasksByUserId.method, null, user.user.token)
            .then(data => {
                console.log(data)
                setTasks(data as TaskInterface[])
            })
    },[])

    return (
        <Container component="main" maxWidth="lg" className={classes.root}>
            <Paper elevation={3} className={classes.map}>
                <Map task={tasks[0]}/>
            </Paper>
            <Paper elevation={3} className={classes.quadrant}>
                Квадрат - 24
            </Paper>
            <Paper elevation={3} className={classes.buttonGroup}>
                <Grid container direction='row' justify="center">
                    <Grid item xs={6}>
                        <Button
                            variant={'outlined'}
                            color="primary"
                            fullWidth
                            onClick={() => setIsSnowPanel(false)}
                        >
                            Обледенение
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={'outlined'}
                            color="primary"
                            fullWidth
                            onClick={() => setIsSnowPanel(true)}
                        >
                            Заснеженность
                        </Button>
                    </Grid>
                </Grid>
                {isSnowPanel ?
                    <>
                        <Typography align="center" className={classes.text}>Уровень снега</Typography>
                        <RadioGroup row aria-label="position" name="position" className={classes.radio} defaultValue="1">
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label="1"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label="2"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label="3"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio color="primary" />}
                                label="4"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" />}
                                label="5"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </>
                    :
                    <>
                        <Typography align="center" className={classes.text}>Степень обледенения</Typography>
                        <RadioGroup row aria-label="position" name="position" className={classes.radio} defaultValue="1">
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label="1"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label="2"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label="3"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </>
                }


            </Paper>
            <Button
                variant={'outlined'}
                color="primary"
                fullWidth
                onClick={() => setOpenSnack(true)}
            >
                ОТПРАВИТЬ
            </Button>
            <CustomSnackbar
                open={openSnack}
                handleClose={() => setOpenSnack(false)}
                message={"Информация передана диспетчеру"}
                kind={"info"}
            />
        </Container>
    );
}
