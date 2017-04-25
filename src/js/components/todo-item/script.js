import Db from '../../libs/database'
import { mapState, mapActions  } from 'Vuex'

const data = () => {
    return {
        name: 'todoItem'
    }
}

const methods = {
    ...mapActions(['delete_todo', 'change_todo', 'change_status']),
    /**
     * Delete todo in list by id.
     * @param {Number} todo id.
    */
    deleteTodo(id) {
        this.delete_todo(id);
    },
    /**
     * Change todo status.
     * @param {Number} todo id.
    */
    changeStatus(id) {
        this.change_status({id, done: !this.todo.done});
    },
    /**
     * Change todo title
     * @param {Number} todo id.
     * @param {String} new todo title value..
    */
    changeTodo(e, id) {
        this.change_todo({title: e.target.value, id});
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