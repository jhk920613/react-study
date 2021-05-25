import React from 'react';
import axios from 'axios';
import TodoListModel from "../model/TodoListModel";

const todoListServerUrl = '/todoList-server'

class TodoListRepository {

    async findTodoList() {
        const response = await axios.get(`${todoListServerUrl}/todoList/findAll`);
        console.log(response.data);

        return TodoListModel.toTodoListData(response.data);
    }

    async registerTodo(todo) {
        const response = await axios.post(`${todoListServerUrl}/todoList`, {todoComment: todo});

        return TodoListModel.toTodoListData(response.data);
    }

    async onChangeStatus(seq) {
        const response = await axios.put(`${todoListServerUrl}/todoList/${seq}`, {});

        return TodoListModel.toTodoListData(response.data);
    }

    async removeTodo(seq) {
        const response = await axios.delete(`${todoListServerUrl}/todoList/${seq}`, {});

        return TodoListModel.toTodoListData(response.data);
    }
}

export default new TodoListRepository();