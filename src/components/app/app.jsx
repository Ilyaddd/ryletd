import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Messagebox } from "../messagebox";
import { Main } from "../../pages/main";
import { File } from "../../pages/file";

export const App = () => {
    return (
        <div className="app">
            <Messagebox />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/file/:url" component={File} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </div>
    );
};
