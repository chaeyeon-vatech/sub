import React, {useEffect, useState} from 'react';
import '../table.css';
import {useQuery} from "@apollo/react-hooks";
import {createUseStyles} from "react-jss";
import {Tooltip} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Receipt, ReceiptUser} from "../../../../graphql/query";

const useStyles = createUseStyles({
    content: {
        textAlign: "center",
        textSize: "10px",
        padding: 10,
        display: "inline-block",
        border: "0.1px solid lightgrey"
    }
});

function BoardTable() {

    const classes = useStyles();
    const [content, setContent] = useState();
    const [user, setUser] = useState();
    const [num, setNum] = useState(1);
    const {data: receipt} = useQuery(Receipt)
    const {data} = useQuery(ReceiptUser, {
        variables: {
            menu: num
        }
    });

    useEffect(() => {
        if (receipt) {
            setContent(receipt.receipt)
        }
        if (data) {
            setUser(String(Object.values(data)))
        }

    }, [receipt, data])

    return (

        <>

            {content &&
            content.map((content, index) => (
                content !== "" && <span key={index} className={classes.content}>
                        <Tooltip title={user} placement="top">
                            <Button variant="outlined"
                                    onMouseOver={() => {
                                        setNum(index)
                                    }}
                            > {content}</Button>
                        </Tooltip>
                    </span>

            ))}


        </>

    )
}

export default BoardTable;