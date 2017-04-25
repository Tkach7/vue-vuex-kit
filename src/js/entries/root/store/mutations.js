import mutationsType from './mutations-type'

const mutations = {
    /**
     * Set user in state.
     * @param  {Object} current state.
     * @param  {Object} user from github account
    */
    [mutationsType.SET_USER] (state, user) {
        state.user = user;
    },
    /**
     * Add new todo in state
     * @param  {Object} current state.
     * @param  {Object} todo. 
    */
    [mutationsType.ADD_TODO] (state, todo) {
        state.todos = [...state.todos, todo];
    }, 
    /**
     * Delete todo by id.
     * @param  {Object} current state.
     * @param  {String} todoId.
    */
    [mutationsType.DELETE_TODO] (state, todoId) {
        state.todos = state.todos.filter(function(item) {
            return item.id != todoId;
        });
    },
    /**
     * Delete all todo in state
     * @param  {Object} current state.
    */
    [mutationsType.DELETE_ALL] (state) {
        state.todos = [];
    },
    /**
     * Change todo status.
     * @param  {Object} current state.
     * @param  {String} todoId.
    */
    [mutationsType.CHANGE_TODO_STATUS] (state, todoId) {
        let indexTodo = state.todos.findIndex(function(elem) {return elem.id === todoId});
        state.todos[indexTodo].done = !state.todos[indexTodo].done;
    },
    /**
     * Select all todo.
     * @param  {Object} current state.
    */
    [mutationsType.SELECT_ALL_TODO] (state) {
        state.todos = state.todos.map(function(elem) {
            elem.done = true;
            return elem;
        });
    },
    /**
     * Change todo title.
     * @param  {Object} current state.
     * @param  {String} todoId.
     * @param  {String} new title value.
    */
    [mutationsType.CHANGE_TODO_TITLE] (state, todo) {
        let indexTodo = state.todos.findIndex(function(elem) {return elem.id === todo.id});
        state.todos[indexTodo].title = todo.title;
    },
    /**
     * Init todos from database
     * @param  {Object} current state.
     * @param  {String} todoId.
     * @param  {String} new title value.
    */
    [mutationsType.SET_TODOS] (state, todos) {
        state.todos = todos;
    }
}

export default mutations