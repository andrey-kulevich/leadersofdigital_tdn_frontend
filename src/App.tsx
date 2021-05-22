import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from "react-router-dom"
import {useRoutes} from "./hooks/useRoutes";
import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#499be7',
        },
        secondary: {
            main: '#e57373',
        },
        success:{
            main:'#4791db'
        }
    },
});

function App() {
    let routes = useRoutes()

    return (
        <ThemeProvider theme={theme}>
            <Router>
                {routes}
            </Router>
        </ThemeProvider>
    );
}
export default App;
