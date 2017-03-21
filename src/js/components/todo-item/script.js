import Db from '../../libs/database'
import { mapState } from 'Vuex'

const data = () => {
    return {
        name: 'todoItem',
        id: this.userId
    }
}

const methods = {
    /**
     * Delete todo in list by id.
     * @param {Number} todo id.
    */
    deleteTodo(id) {
        /** Define database */
        let database = new Db(this.userId);
        this.$store.commit('DELETE_TODO', id);
        database.updateTodos(id, [], '', null);
    },
    /**
     * Change todo status.
     * @param {Number} todo id.
    */
    changeStatus(id) {
        /** Define database */
        let database = new Db(this.userId);
        this.$store.commit('CHANGE_TODO_STATUS', id);
        database.updateTodos(id, [], 'done', this.todo.done);
    },
    /**
     * Change todo title
     * @param {Number} todo id.
     * @param {String} new todo title value..
    */
    changeTodo(e, id) {
        /** Define database */
        let database = new Db(this.userId);
        let payload = {id, title: e.target.value};
        this.$store.commit('CHANGE_TODO_TITLE', payload);
        database.updateTodos(id, [], 'title', e.target.value);
    }
};

const computed = mapState({
    /** Get user id from state user */
    userId: state => state.user.id
});

const props = ['todo'];

export default {
    data,
    props,
    methods,
    computed
}