import firebase from 'firebase'

export default class Db {
    constructor(userId) {
        this.ref = firebase.database().ref(userId + '/todos/');
        this.todos = [];
        this.db = firebase.database();
        this.userId = userId;
    }

    /** Get todos from database */
    getTodos() {
        return new Promise((resolve, reject) => {
            this.ref.once('value').then(snapshot => {
                if (!snapshot) {
                    return reject({
                        status: 403,
                        message: 'Forbidden',
                    });
                }
                this.todos = snapshot.val() ? Object.values(snapshot.val()) : [];
                return resolve(this.todos);
            });
        });
    }
    /**
     * Udpate todos
     * @param {String} id todo.
     * if @param null -> update all.
     * @param {Array} list of todos.
     * @param {String} field in todo.
     * @param {String} value in todo.
    */
    updateTodos(idTodo, todos, field, value) {
        let updates = {};
        if (idTodo) {
            updates[this.userId + '/todos/' + idTodo + '/' + field] = value;
        } else {
            updates[this.userId + '/todos/'] = todos;
        }
        this.db.ref().update(updates);
    }

}