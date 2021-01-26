import TransferList from "../../components/Table/Transferlist";
import React from "react";

export default {
    component: {TransferList},
    title: "Table",
    excludeStories: /.*Data$/,
};

export const Transfer = () => {

    return (
        <TransferList/>
    );
};
