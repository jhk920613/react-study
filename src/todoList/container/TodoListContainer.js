import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import {Input} from "semantic-ui-react";

@inject('todoListStore')
@observer
class TodoListContainer extends Component {


    render() {

        const {todoListStore} = this.props;

        return (
            <div>
                <Input
                    value={todoListStore.inputValue}
                    onChange={(e) => todoListStore.onActionSetter('inputValue', e.target.value)}
                />
            </div>
        );
    }
}

export default TodoListContainer;