import Db from '../../libs/database'
import { mapMutations } from 'vuex'
import { mapState } from 'Vuex'
import CryptoJS from 'crypto-js';

const data = () => {
    return {
        todoTitle: ''
    }
}

/** Define database */
const database = new Db();

const methods = {
    /** Add a new Todo in state */
    add() {
        let todo = {
            title: this.todoTitle,
            id: CryptoJS.lib.WordArray.random(256 / 64).toString(),
            done: false
        };
        this.$store.commit('ADD_TODO', todo);
        this.todoTitle = '';
        /** Add todo in db. */
        database.updateTodos(todo.id, [], '', todo);
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
            this.$store.commit('DELETE_ALL');
            database.updateTodos(null, [], null, null);
        }

    },
    /**
     * Select all todo in list.
    */
    selectAll() {
        if (this.todos.length > 0) {
            this.$store.commit('SELECT_ALL_TODO');
            let todos = getFormDbType(this.todos, 'id');
            database.updateTodos(null, todos, null, null);
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
    todos: state => state.todos
});

export default {
    data,
    methods,
    computed
}