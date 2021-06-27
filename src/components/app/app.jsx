import React from "react";
import { Route } from "react-router-dom";

import { Main } from "../../pages/main";
import { RedirectPage } from "../../pages/redirect";

export const App = () => {
    return (
        <div className="app">
            <Route exact path="/" component={Main} />
            <Route exact path="/:link" component={RedirectPage} />
            <Route path="/admin/1" render={() => <div>admin</div>} />
        </div>
    );
};
