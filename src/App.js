import React, { Component } from 'react';
import { Provider } from "mobx-react";

import stores from './stores';
import Routes from "./Routes";

import 'semantic-ui-css/semantic.min.css'

class App extends Component {

    render() {
        return (
            <Provider
                {...stores}
            >
                <Routes />
            </Provider>
        );
    }
}

export default App;
