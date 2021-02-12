import React from 'react';
import { Provider } from "mobx-react";

import stores from './stores';
import TodoListContainer from "./todoList/container/TodoListContainer";

import 'semantic-ui-css/semantic.min.css'

const App = () => (
    <Provider
        {...stores}
    >
        <TodoListContainer />
    </Provider>
)

export default App;
