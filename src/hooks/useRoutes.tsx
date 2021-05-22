import {useContext, useEffect} from "react";
import {useObserver} from "mobx-react-lite";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {routes} from "../helpers/paths";
import Login from "../pages/Login";
import {requests} from "../helpers/requests";
import {useHttp} from "./useHttp";
import {WaitingPage} from "../pages/WaitingPage";
import {UserContext} from "../store/UserProvider";
import {UserResponseInterface} from "../interfaces/UserInterface";
import HomeSnowblowerPage from "../pages/HomeSnowblowerPage";
import HomeFieldEngineerPage from "../pages/HomeFieldEngineerPage";

export const useRoutes = () => {
    const user = useContext(UserContext)
    const {request, loading, clearError} = useHttp()

    useEffect(() => {
        const token = localStorage.getItem('user')
        request(requests.login.url, requests.login.method, null, token)
            .then(data => {
                console.log(data)
                user.login(data as UserResponseInterface, token? token : '', true)
            })
            .catch( () => {
                user.resetUser()
                clearError()
            })
    },[])

    return useObserver(() => (
        <Switch>
            {loading?
                    <>
                        <Route exact path={routes.toWaitingPage}>
                            <WaitingPage/>
                        </Route>
                        <Redirect to={routes.toWaitingPage}/>
                    </>:
            <>
                {user.user.isAuth ? <>
                    <Route exact path={routes.toHomeSnowblower}>
                        <HomeSnowblowerPage/>
                    </Route>
                    <Route exact path={routes.toHomeFieldEngineer}>
                        <HomeFieldEngineerPage/>
                    </Route>
                    <Redirect to={routes.toHomeSnowblower}/>
                </>:<>
                    <Route exact path={routes.toLogin}>
                        <Login/>
                    </Route>
                    <Redirect to={routes.toLogin}/>
                </>}
            </>}
        </Switch>
    ))
}
