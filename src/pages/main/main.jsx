import React from "react";

import { Follow } from "../../components/follow";
import { Shorten } from "../../components/shorten";

import "./main.sass";

export const Main = () => (
    <form id="main__form">
        <Follow />
        <Follow />
        {/* <Shorten /> */}
    </form>
);
