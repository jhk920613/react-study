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
        await axios.post(`${todoListServerUrl}/todoList`, {todoComment: todo});

        return this.findTodoList();
    }

    async onChangeStatus(seq) {
       await axios.put(`${todoListServerUrl}/todoList/${seq}`, {});

        return this.findTodoList();
    }

    async removeTodo(seq) {
        await axios.delete(`${todoListServerUrl}/todoList/${seq}`, {});

        return this.findTodoList();
    }
}

export default new TodoListRepository();