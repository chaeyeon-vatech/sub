import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import {OrderBoard} from "../../components";

export default {
    component: OrderBoard,
    title: "OrderBoard",
    excludeStories: /.*Data$/,
};

export const Default = () => {


    return <OrderBoard/>
}