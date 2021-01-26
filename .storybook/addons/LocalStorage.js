import {Button, makeStyles, Typography} from "@material-ui/core";
import {addons, types} from "@storybook/addons";
import {AddonPanel} from "@storybook/components";
import React, {Fragment, useState} from "react";


const Content = () => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("currentUser"));

    return (
        <Fragment>
            <Typography>
                {
                    `로그인 유저: ${currentUser}`
                }
            </Typography>
            <br/>
            <Button variant="outlined" color="primary"
                    onClick={() => setCurrentUser(localStorage.getItem("currentUser"))}>
                Refresh User
            </Button>

            <Button variant="outlined" color="secondary"
                    onClick={() => setCurrentUser(localStorage.removeItem("currentUser"))}>
                Clear
            </Button>

        </Fragment>
    );
};

addons.register("storybook/SessionData", () => {
    addons.add("SessionData/panel", {
        title: "LocalStorage",
        type: types.PANEL,
        render: ({active, key}) => (
            <AddonPanel active={active} key={key}>
                <Content/>
            </AddonPanel>
        )
    });
});