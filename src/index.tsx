import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserProvider} from "./store/UserProvider";
import UserMob from "./store/UserMob";

const user = new UserMob(null)

ReactDOM.render(
    <UserProvider value={user}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </UserProvider>,
    document.getElementById('root')
);
