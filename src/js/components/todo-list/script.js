import { mapState } from 'Vuex'

const data = () => {
    return {
        name: 'todoList'
    }
}

const computed = mapState({
    //** Get todos from state */
    todos: state => state.todos
});

export default {
    data,
    computed
}