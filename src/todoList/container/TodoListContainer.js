import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import InputContainer from "./InputContainer";

import '../TodoList.css';
import ListContainer from "./ListContainer";

@inject('todoListStore')
@observer
class TodoListContainer extends Component {

    render() {

        const {todoListStore} = this.props;

        return (
            <div className="todo-list-template">
                <div className="title">
                    할일 리스트
                </div>
                <InputContainer
                    inputValue={todoListStore.inputValue}
                    onActionSetter={todoListStore.onActionSetter}
                />
                <ListContainer />
            </div>
        );
    }
}

export default TodoListContainer;