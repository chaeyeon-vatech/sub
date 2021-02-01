import React, {useEffect, useState} from 'react';
import {Column} from 'simple-flexbox';
import {createUseStyles} from 'react-jss';
import PaymentBoard from './PaymentBoard';
import {useQuery} from "@apollo/react-hooks";
import {TaskQuery} from "../../../../graphql/query";


const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        // marginRight: 30,
        '@media (max-width: 768px)': {
            // marginTop: 30,
            maxWidth: 'none'
        }
    },
    boardsection: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            // marginTop: 30
        }
    },
    border: {
        backgroundColor: "whitesmoke",
        fontSize: '20px !important',
        fontFamily: "Do Hyeon",
        fontWeight: "600",
        textAlign: "center",
        border: `5px solid rgba(246,244,244,0.9)`,
        borderRadius: 5,
        color: 'rgba(55,48,48,0.9)',
        width: "100%",
        padding: "10px 10px 10px 10px",
        marginBottom: "20px"
    },
    background: {
        backgroundColor: 'rgba(246,244,244,0.9)',
        padding: "45px 45px 45px 45px",
        marginTop: "20px"
    },
    itemTitle: {
        color: 'rgb(60,74,91)',
        width: "50%"
    }
});

function PaymentboardComponent() {
    const classes = useStyles();

    const [contents, setContents] = useState('');
    const {data} = useQuery(TaskQuery);
    useEffect(() => {
        if (data) {
            setContents(data.tasks);

        }
    }, [data]);


    return (
        <>

            <Column className={classes.background}>


                {contents && contents.map((content) => (
                    <span className={classes.border} key={content}>  오늘은 {content.creater}님이 {content.title} 기념으로 커피 쏩니다!</span>
                ))}


                <PaymentBoard/>


            </Column>
        </>
    );
}

export default PaymentboardComponent;
