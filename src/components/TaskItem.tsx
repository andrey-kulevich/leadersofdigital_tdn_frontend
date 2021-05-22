import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";
import {TaskInterface} from "../interfaces/TaskInterface";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        height: theme.spacing(4)
    },
    text: {
        marginRight: theme.spacing(1),
    }
}));

export const TaskItem = ({task} : {task: TaskInterface}) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container direction='row' justify="center" className={classes.root}>
                <Grid item xs={4} className={classes.text}><span>Квадрат - {task.runwayUnit.name}</span></Grid>
                <Grid item xs={5} className={classes.text}><span>Обледенение - {task.runwayUnit.icing}</span></Grid>
                <Grid item xs={2} className={classes.text}><span>Снег - {task.runwayUnit.snowLevel}</span></Grid>
            </Grid>
        </Paper>
    );
}
