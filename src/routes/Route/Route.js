import {Box, makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {MainPage, MessagePage, NavBar, SignIn, SignUp, UserPage} from "../../components";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: "calc(100vh - 8px)",
        width: "calc(100vw - 8px)",
    },
}));

const MainRoute = () => {
    const classes = useStyles();

    const [isSignedIn, setIsSignedIn] = useState(sessionStorage.getItem("currentUser") !== null);

    const history = useHistory();

    const linkPaths = [
        "/main",
        "/user",
        "/message",
        "blank",
        "/signin",
    ];

    const onTabChanged = (newValue) => {
        if (newValue === 4) {
            localStorage.removeItem('currentUser');
            setIsSignedIn(false);
        }
        history.push(linkPaths[newValue])
    }

    return (
        <Switch>
            <Route path="/main">
                {
                    isSignedIn ? (
                            <NavBar tabIndex={0} onChange={(newValue) => onTabChanged(newValue)}>
                                <MainPage/>
                            </NavBar>) :
                        (
                            <Redirect to="/signin"/>
                        )}
            </Route>
            <Route path="/user">
                {
                    isSignedIn ? (
                            <NavBar tabIndex={1} onChange={(newValue) => onTabChanged(newValue)}>
                                <UserPage/>
                            </NavBar>) :
                        (
                            <Redirect to="/signin"/>
                        )}
            </Route>
            <Route path="/message">
                {
                    isSignedIn ? (
                            <NavBar tabIndex={2} onChange={(newValue) => onTabChanged(newValue)}>
                                <MessagePage/>
                            </NavBar>) :
                        (
                            <Redirect to="/signin"/>
                        )}
            </Route>
            <Route path="/signin">
                {
                    isSignedIn ? (<Redirect to="/main"/>) : (
                        <Box className={classes.root}>
                            <SignIn onSignIn={() => {
                                setIsSignedIn(true);
                                history.push("/main")
                            }}
                                    onSignUpClick={() => history.push("/signup")}/>
                        </Box>
                    )
                }
            </Route>
            <Route path="/signup">
                {
                    isSignedIn ? (<Redirect to="/main"/>) : (
                        <Box className={classes.root}>
                            <SignUp onSignUp={() => history.push("/signin")} onCancel={() => history.push("/signin")}/>
                        </Box>
                    )
                }
            </Route>
            <Route path="/">
                <Redirect to={isSignedIn ? "/main" : "/signin"}/>
            </Route>
        </Switch>
    );
}

export default MainRoute;