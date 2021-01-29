import {Button, makeStyles, PropTypes} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import gql from "graphql-tag";
import {SearchQuery} from "../../../../client/src/graphql/query";
import {useQuery} from "@apollo/react-hooks";


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

export const TaskQuery = gql`
    query{
        tasks{
            _id
            title
            creater
        }
    }


`

const handleClick = (user) => {
    alert("로그인되었습니다!")
    localStorage.setItem('currentUser', user)
}

const PaymentSetting = props => {


    const classes = useStyles();
    const [user, setUser] = useState();

    return (

        <div className={classes.root}>
            <div className={classes.loginwrap}>
                <div className={classes.loginhtml}>
                    <h3>현재 주문이 없습니다.</h3>
                    <h5 className={classes.h5}>주문을 생성하시려면<br/>이름을 입력해주세요!</h5>
                    <div className={classes.loginform}>
                        <div className={classes.group}>
                            <input className={classes.focused} onChange={(e) => setUser(e.target.value)}/>
                            <Button type="submit" onClick={() => handleClick(user)}
                            >Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default PaymentSetting;