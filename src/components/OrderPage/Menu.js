import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Container} from "@material-ui/core";
import OrderBoard from "./OrderBoard";


function TabPanel(props) {
    const {children, value, index, classes, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Container>
                    <Box>{children}</Box>
                </Container>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        color: "#6d4c41",
    },
    card: {maxWidth: 250},
    color: {
        backgroundColor: 'rgb(200,176,141)',
        fontSize: 10,
        color: "black",
        marginLeft: "65px",
        width: "1235px",
        height: "50px",
        marginBottom: "-24px"
    }
}));

export default function MenuBoard() {

    const classes = useStyles();
    const [value, setValue] = React.useState('one');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (

        <>
            <AppBar position="static" className={classes.color}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab
                        value="one"
                        label="☕ 커피 ☕"
                        wrapped
                        {...a11yProps('one')}
                    />
                    <Tab value="two" label="🍦 아이스크림 🍦" {...a11yProps('two')} />
                    <Tab value="three" label="🥤 기타 음료 🥤" {...a11yProps('three')} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index="one">
                <OrderBoard/>
            </TabPanel>
            <TabPanel value={value} index="two">
                <OrderBoard/>
            </TabPanel>
            <TabPanel value={value} index="three">
                <OrderBoard/>
            </TabPanel>
        </>
    )
}

