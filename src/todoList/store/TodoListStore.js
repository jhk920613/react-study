import { observable, action } from 'mobx';

class TodoListStore {
    @observable inputValue = '';

    @action
    onActionSetter = (name, value) => {
        this[name] = value;
    }

}

export default TodoListStore;