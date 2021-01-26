import React from "react";
import {PaymentSetting} from "../../components";
import NotFound from "../../components/PaymentSetting/NotFound";
import {Task} from "../../../graphql/useQuery";


export default {
    component: {PaymentSetting, NotFound},
    title: "Register",
    excludeStories: /.*Data$/,
};


export const Payment = () => {

    return (
        <PaymentSetting/>
    );
};

export const Notfound = () => {

    return (
        <NotFound task={Task}/>
    );
};