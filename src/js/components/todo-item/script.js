import Db from '../../libs/database'

const data = () => {
    return {
        name: 'todoItem'
    }
}
/** Define database */
const database = new Db();

const methods = {
    /**
     * Delete todo in list by id.
     * @param {Number} todo id.
    */
    deleteTodo(id) {
        this.$store.commit('DELETE_TODO', id);
        database.updateTodos(id, [], '', null);
    },
    /**
     * Change todo status.
     * @param {Number} todo id.
    */
    changeStatus(id) {
        this.$store.commit('CHANGE_TODO_STATUS', id);
        database.updateTodos(id, [], 'done', this.todo.done);
    },
    /**
     * Change todo title
     * @param {Number} todo id.
     * @param {String} new todo title value..
    */
    changeTodo(e, id) {
        let payload = {id, title: e.target.value};
        this.$store.commit('CHANGE_TODO_TITLE', payload);
        database.updateTodos(id, [], 'title', e.target.value);
    }
};

const props = ['todo'];

export default {
    data,
    props,
    methods
}