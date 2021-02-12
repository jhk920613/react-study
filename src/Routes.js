import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";

import { Layout } from './layout';

import {Routes as TodoListRoute} from './todoList';

const Routes = () => (
    <BrowserRouter basename={"react-study"}>
        <Layout>
            <Switch>
                <TodoListRoute />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Routes;