import { action } from "@storybook/addon-actions";
import React from "react";
import {OrderBoard} from "../../components";


export default {
    component: OrderBoard,
    title: "Board",
    excludeStories: /.*Data$/,
};

export const Default = () => {

    const onChange = (value) => {

        action("주문이 완료되었습니다!")(value);
    }

    return <OrderBoard onChange={(value)=>onChange(value)}/>
}