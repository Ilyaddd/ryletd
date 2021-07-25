import React from "react";
import { Route } from "react-router-dom";

import { Main } from "../../pages/main";
import { RedirectPage } from "../../pages/redirect";
import { Messagebox } from "../messagebox";

export const App = () => {
    return (
        <div className="app">
            <Messagebox />
            <Route exact path="/" component={Main} />
            <Route exact path="/:link" component={RedirectPage} />
            <Route path="/admin/1" render={() => <div>admin</div>} />
        </div>
    );
};
