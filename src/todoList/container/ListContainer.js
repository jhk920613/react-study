import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import ListView from "../view/ListView";
import nextId from "react-id-generator";

@inject('todoListStore')
@observer
class ListContainer extends Component {

    render() {

        const {todoListStore} = this.props;

        return (
            <div style={{height: '350px', overflowY: 'auto'}}>
                {
                    todoListStore.todoList.map((row, index) => (
                        <ListView
                            key={nextId('list')}
                            text={row.todoComment}
                            checked={row.checked}
                            id={row.seq}
                            onToggle={todoListStore.onToggle}
                            onRemove={todoListStore.onRemove}
                        />
                    ))
                }
            </div>
        );
    }
}

export default ListContainer;