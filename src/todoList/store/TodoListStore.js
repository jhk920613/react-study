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
        await Promise.all([
            this.onActionSetter('_todoList', dataList),
            this.onActionSetter('inputValue', ''),
        ]);
    }

    @action
    onChangeStatus = async (seq) => {
        const dataList = await TodoListRepository.onChangeStatus(seq);
        await this.onActionSetter('_todoList', dataList);
    }

    @action
    removeTodo = async (seq) => {
        const dataList = await TodoListRepository.removeTodo(seq);
        await this.onActionSetter('_todoList', dataList);
    }
}

export default TodoListStore;