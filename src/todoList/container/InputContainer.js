import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import InputView from "../view/InputView";

@inject('todoListStore')
@observer
class InputContainer extends Component {

    addTodo = async () => {
        const { todoListStore } = this.props;

        await todoListStore.addTodo();
        await todoListStore.onActionSetter('inputValue', '');
    }

    render() {

        const {todoListStore} = this.props;

        return (
            <InputView
              inputValue={todoListStore.inputValue}
              onActionSetter={todoListStore.onActionSetter}
              addTodo={this.addTodo}
            />
        );
    }
}

export default InputContainer;