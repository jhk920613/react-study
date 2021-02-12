import React from "react";
import {Route, Switch} from 'react-router-dom';

import TodoListContainer from "./container/TodoListContainer";

const Routes = () => (
    <Switch>
        <Route exact path="/todoList" render={(props) => <TodoListContainer {...props} />} />
    </Switch>
)

export default Routes