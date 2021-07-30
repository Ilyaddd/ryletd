import React from "react";

import you from "./assets/you.png";
import stupid from "./assets/stupid.png";
import hmm from "./assets/hmm.png";
import dumb from "./assets/dumb.png";

import "./pageNotFound.sass";

export const PageNotFound = () => (
    <section className="dumb__page">
        <img src={you} className="dumb__img" alt="Ты" />
        <img src={stupid} className="dumb__img" alt="Дурак?" />
        <img src={hmm} className="dumb__img" alt="Хмм..." />
        <img src={dumb} className="dumb__img" alt="Дураааак!" />
    </section>
);
