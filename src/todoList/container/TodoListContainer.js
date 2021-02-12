import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import InputContainer from "./InputContainer";

@inject('todoListStore')
@observer
class TodoListContainer extends Component {

    render() {

        const {todoListStore} = this.props;

        return (
            <div>
                <InputContainer
                    inputValue={todoListStore.inputValue}
                    onActionSetter={todoListStore.onActionSetter}
                />
            </div>
        );
    }
}

export default TodoListContainer;