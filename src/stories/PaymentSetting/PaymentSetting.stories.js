import React from "react";
import {PaymentSetting} from "../../components";
import NotFound from "../../components/PaymentSetting/NotFound";
import {useQuery} from "@apollo/react-hooks";
import {TaskQuery} from "../../../graphql/query";
import {Task} from "../../../graphql/useQuery";


export default {
    component: {PaymentSetting, NotFound},
    title: "결제자 설정 페이지",
    excludeStories: /.*Data$/,
};

export const Default = () => {

    return (
        <PaymentSetting/>
    );
};

export const Not = () => {

    return (
        <NotFound task={Task}/>
    );
};