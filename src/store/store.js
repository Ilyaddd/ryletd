import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddlewere from "redux-saga";

import { createRootReducer } from "./root-reducer";
import rootSaga from "./root-saga";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddlewere();

export default function store(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(rootSaga);
    return store;
}
