
class TodoListModel {

    static convertData(data) {

        return {
            ...data,
            checked: data.status === 'T',
        }
    }

    static toTodoListData(dataList) {
        if(!Array.isArray(dataList)) {
            return [];
        }

        return dataList.map(row => this.convertData(row));
    }

}

export default TodoListModel;