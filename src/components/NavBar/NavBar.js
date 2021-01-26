import {AppBar, Grid, makeStyles, Tab, Tabs} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import {Row} from "simple-flexbox";

const useStyles = makeStyles(theme => ({
    root: {

        width: "800vw",
        height: "100vh",
        minHeight: "500px",
        minWidth: "800px",
        flexDirection: "row",
    },
    logocontainer: {
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 30
    },
    logotitle: {
        color: "white",
        opacity: 0.5,
        marginLeft: 15,
        fontSize: "40px",
        textAlign: "center"
    },

    box: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: 200,
        backgroundColor: "rgb(121,38,38)",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    activeContainer: {
        backgroundColor: "rgb(238,239,237,0.6)",
        width: 200
    },
    container: {
        display: 'fixed',
        height: 30,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: "rgb(96,40,17)"
        },
        paddingLeft: ({level}) => 32 * level,
        transition: 'all 0.2s ease-in-out'
    },
    title: {
        fontSize: 18,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: ({theme, isActive}) => (isActive ? "black" : "rgb(134,126,124)"),
        marginLeft: 24
    }
}));

const HandleClick = () => {
    alert("로그아웃되었습니다!")
    localStorage.removeItem('currentUser')
}

const NavBar = props => {
    const {children, tabIndex, onChange} = props;


    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <AppBar className={classes.box} position="static">
                    <Row className={classes.logocontainer} horizontal='center' vertical='center'>
                        <span className={classes.logotitle}>Vatech</span>
                    </Row>
                    <Tabs
                        classes={{
                            root: classes.tabs__root,
                            indicator: classes.tabs__indicator,
                            flexContainerVertical: classes.tabs__flexContainer,
                        }}
                        orientation="vertical"
                        variant="fullWidth"
                        value={tabIndex}
                        onChange={(_, newValue) => onChange(newValue)}>
                        <Tab classes={{
                            root: classes.container,
                            selected: classes.activeContainer,
                            title: classes.title
                        }}
                             label="주문하기"/>
                        <Tab classes={{
                            root: classes.container,
                            selected: classes.activeContainer,
                            title: classes.title
                        }}
                             label="결제하기"/>
                        <Tab classes={{
                            root: classes.container,
                            selected: classes.activeContainer,
                            title: classes.title
                        }}
                             label="팀원관리"/>
                        <Tab classes={{
                            root: classes.container,
                            selected: classes.activeContainer,
                            title: classes.title
                        }}
                             label="마이페이지"/>
                        <Tab classes={{
                            root: classes.container,
                            selected: classes.activeContainer,
                            title: classes.title
                        }}
                             label="로그아웃"
                             onClick={HandleClick}
                        />

                    </Tabs>
                </AppBar>
            </Grid>
            <Grid item className={classes.active__page}>
                {
                    children
                }
            </Grid>
        </Grid>
    );
}

NavBar.propTypes = {
    tabIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NavBar;