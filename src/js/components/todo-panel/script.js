import Db from '../../libs/database'
import { mapMutations, mapActions, mapState } from 'vuex'
import CryptoJS from 'crypto-js'

const data = () => {
    return {
        todoTitle: ''
    }
}

const methods = {
    ...mapActions(['add_todo', 'delete_all', 'select_all']),
    /** Add a new Todo in state */
    add() {
        let todo = {
            title: this.todoTitle,
            id: CryptoJS.lib.WordArray.random(256 / 64).toString(),
            done: false
        };
        this.add_todo(todo);
        this.todoTitle = '';
    },
    /**
     * Check length todo title
     * @returns {Bollean}
    */
    isTodoEmpty() {
        return this.todoTitle === '';
    },
    /**
     * Delete all todo in list.
    */
    deleteAll() {
        if (this.todos.length > 0) {
            this.delete_all();
        }

    },
    /**
     * Select all todo in list.
    */
    selectAll() {
        if (this.todos.length > 0) {
            let todos = getFormDbType(this.todos, 'id');
            this.select_all(todos);
        }
    }
}

/**
* Generate todo in format database
* @param {Array} list of todos
* @param {String} name of field
* @return {Object}
*/
function getFormDbType(todos, field) {
    let newTodos = {};
    todos.forEach(elem => {
        elem.done = true;
        Object.assign(newTodos, {[elem.id]: elem});
    });
    return newTodos;
};

const computed = mapState({
    /** Get todos from state */
    todos: state => state.todos,
    /** Get user id from state user */
    userId: state => state.user.id
});

export default {
    data,
    methods,
    computed
}