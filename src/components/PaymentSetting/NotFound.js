import {Button, makeStyles} from "@material-ui/core";
import React from "react";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {TaskQuery} from "../../../graphql/query";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    focused: {
        "& $notchedOutline": {
            borderColor: "yellow"
        }
    },
    loginwrap: {
        color: "white",
        fontWeight: "lighter",
        textAlign: "center",
        paddingTop: "10px",
        width: "100%",
        margin: "none",
        maxWidth: "400px",
        minHeight: "300px",
        position: "relative",

    },
    loginhtml: {
        width: "100%",
        height: "100%",
        position: "center",
        marginTop: "-50px",
        padding: "80px 70px 50px 70px",
        backgroundColor: theme.color.red,

    },

    h3: {
        color: "white",
        marginBottom: "30px",
        textAlign: "center",
        marginTop: "40px"
    },
    h5: {
        color: "white",
        padding: "30px 30px 30px 30px",
        marginBottom: "30px",
        fontWeight: "bolder",
        textAlign: "center"
    },
    loginform: {
        minHeight: "345px",
        position: "relative",
        perspective: "1000px",
        transformStyle: "preserve-3d"

    },

    loginafter: {
        marginTop: "50px",
        minHeight: "200px",
        position: "relative",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        backgroundColor: "rgb(42,47,34,0.9)"
    },

    group: {
        marginBottom: "15px",
        '&:nth-child(n) > TextField,label,input,button,a,table': {
            width: "60%",
            color: "#fff",
        },
        '&:nth-child(n) > TextField,input,button,table,tr': {
            border: "none",
            padding: "15px 20px",
            borderRadius: "25px",
            background: "rgba(255,255,255,.1)",
            textAlign: "center",
            alignContent: "center"
        },
        '&:nth-child(n) > TextField': {
            outline: "none",
        },

        '&:nth-child(n) > tr,td, TextField': {
            width: "50%",
            padding: "15px 60px",
            alignContent: "center",
            marginTop: 10,
            border: "none",
            margin: "20px",
        },

        '&:nth-child(n) > button': {
            marginTop: "50px",
            border: "none",
            padding: "50px 50px",
            borderRadius: "25px",
            background: "rgba(255,255,255,.1)",
            width: "100%",
            color: "#fff",
            display: "block"
        },
        '&:nth-child(n) > label ': {
            color: "#aaa",
            fontSize: "12px"
        },
        palette: {
            primary: {
                main: 'rgba(255,255,255,.1)',
            },
            secondary: {
                main: '#030303',
            },
        },
    }
}));

const NotFound = props => {

    const classes = useStyles();


    return (

        <div className={classes.root}>
            <div className={classes.loginwrap}>
                <div className={classes.loginhtml}>
                    <h3>이름을 찾을 수 없습니다.</h3>
                    <h5 className={classes.h5}>재입력해주시거나 <br/> 유저 추가를 문의해주세요!</h5>
                    <div className={classes.loginform}>
                        <div className={classes.group}>
                            <input className={classes.focused}/>
                            <Button type="submit">Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

// NotFound.protoTypes = {
//     task: PropTypes.array
// }

export default NotFound;