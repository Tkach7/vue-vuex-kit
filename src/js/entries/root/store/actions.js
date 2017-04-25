import Db from '../../../libs/database'
import handlerError from '../../../errors/handler'

export default {
    /**
    * Delete todo in database
    * Call db then if ok it'll commit
    * else throw error
    */
    delete_todo({commit, state}, id) {
        let database = new Db(state.user.id);
        database.updateTodos(id, [], '', null).then(resolve => {
                commit('DELETE_TODO', id);
            }, reject => {
                handlerError.errorDb();
            });
    },
    /**
    * Change title of todo in database
    * Call db then if ok it'll commit
    * else throw error
    */
    change_todo({commit, state}, todoData) {
        let database = new Db(state.user.id);
        let {id, title} = todoData;
        database.updateTodos(id, [], 'title', title).then(resolve => {
                commit('CHANGE_TODO_TITLE', todoData);
            }, reject => {
                handlerError.errorDb();
            });
    },
    /**
    * Change status of todo in database
    * Call db then if ok it'll commit
    * else throw error
    */
    change_status({commit, state}, todoData) {
        let database = new Db(state.user.id);
        let {done, id} = todoData;
        database.updateTodos(id, [], 'done', done).then(resolve => {
                commit('CHANGE_TODO_STATUS', id);
            }, reject => {
                handlerError.errorDb();
            });
    },
    /**
    * Add todo in database
    * Call db then if ok it'll commit
    * else throw error
    */
    add_todo({commit, state}, todoData) {
        let database = new Db(state.user.id);
        database.updateTodos(todoData.id, [], '', todoData).then(resolve => {
                commit('ADD_TODO', todoData);
            }, reject => {
                handlerError.errorDb();
            });
    }, 
    /**
    * Delete all todos in database
    * Call db then if ok it'll commit
    * else throw error
    */
    delete_all({commit, state}) {
        let database = new Db(state.user.id);
        database.updateTodos(null, [], null, null).then(resolve => {
                commit('DELETE_ALL');
            }, reject => {
                handlerError.errorDb();
            });
    },
    /**
    * Select all todos in database
    * Call db then if ok it'll commit
    * else throw error
    */
    select_all({commit, state}, todoData) {
        let database = new Db(state.user.id);
        database.updateTodos(null, todoData, null, null).then(resolve => {
                commit('SELECT_ALL_TODO');
            }, reject => {
                handlerError.errorDb();
            });
    }
}