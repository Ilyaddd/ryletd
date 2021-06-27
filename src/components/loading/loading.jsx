import React from "react";

import img from "./assets/loading.svg";

import "./loading.sass";

export const Loading = () => (
    <div className="loading__wrapper">
        <img src={img} className="loading__img" />
    </div>
);
