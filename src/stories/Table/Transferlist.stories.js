import TransferList from "../../components/Table/Transferlist";
import React from "react";
import Receipt from "../../components/Table/paymentboard";
import UserEditTable from "../../components/Table/userboard/UserEditTable";

export default {
    component: {TransferList, Receipt, UserEditTable},
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

export const EditTable = () => {
    return (
        <UserEditTable/>
    )
}

