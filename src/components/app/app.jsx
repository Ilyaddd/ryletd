import React from "react";
import { Route, Switch } from "react-router-dom";

import { Messagebox } from "../messagebox";
import { Main } from "../../pages/main";
import { RedirectPage } from "../../pages/redirect";
import { File } from "../../pages/file";
import { Code } from "../../pages/code";
import { PageNotFound } from "../../pages/pageNotFound";

export const App = () => {
    return (
        <div className="app">
            <Messagebox />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/:shortLink" component={RedirectPage} />
                <Route exact path="/file/:url" component={File} />
                <Route exact path="/code/:url" component={Code} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};
