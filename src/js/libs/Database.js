import firebase from 'firebase'

export default class Db {
    constructor() {
        this.ref = firebase.database().ref('/todos/');
        this.todos = [];
        this.db = firebase.database();
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
            updates['/todos/' + idTodo + '/' + field] = value;
        } else {
            updates['/todos/'] = todos;
        }
        this.db.ref().update(updates);
    }

}