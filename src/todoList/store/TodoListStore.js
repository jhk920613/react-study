import {observable, action, computed} from 'mobx';

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

}

export default TodoListStore;