import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import InputView from "../view/InputView";

@inject('todoListStore')
@observer
class InputContainer extends Component {

    render() {

        const {todoListStore} = this.props;

        return (
            <InputView
              inputValue={todoListStore.inputValue}
              onActionSetter={todoListStore.onActionSetter}
            />
        );
    }
}

export default InputContainer;