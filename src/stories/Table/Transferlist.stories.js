import TransferList from "../../components/Table/Transferlist";
import React from "react";
import Receipt from "../../components/Table/paymentboard";

export default {
    component: {TransferList, Receipt},
    title: "Table",
    excludeStories: /.*Data$/,
};

export const Transfer = () => {

    return (
        <TransferList/>
    );
};

export const receipt = () => {
    return (
        <Receipt/>
    )
}

