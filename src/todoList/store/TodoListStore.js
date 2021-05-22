import {observable, action, computed} from 'mobx';
import TodoListRepository from "../repository/TodoListRepository";

class TodoListStore {

    @observable inputValue = '';
    @observable _todoList = [];

    @computed
    get todoList() {
        return this._todoList ? this._todoList.slice() : [];
    }

    @action
    onActionSetter = (name, value) => {
        this[name] = value;
    }

    @action
    onToggle = (id) => {
        this._todoList[id] = {
            ...this._todoList[id],
            checked: !this._todoList[id].checked
        }
    }

    @action
    onRemove = (id) => {
        let todoList = this.todoList.concat().filter(row => row.id !== id);

        for (let i = 0; i < todoList.length; i++) {
            todoList[i] = {...todoList[i], id: i};
        }

        this.onActionSetter('_todoList', todoList);
    }

    @action
    findTodoList = async () => {
        const dataList = await TodoListRepository.findTodoList();
        await this.onActionSetter('_todoList', dataList);
    }

    @action
    addTodo = async () => {
        if(this.inputValue.length === 0) {
            alert('할일을 입력하세요.');
            return;
        }

        const dataList = await TodoListRepository.registerTodo(this.inputValue);
        await this.onActionSetter('_todoList', dataList);
    }

}

export default TodoListStore;