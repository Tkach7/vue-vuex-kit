import firebase from 'firebase'

export default class Db {
    constructor(userId) {
        this.ref = firebase.database().ref(userId + '/todos/');
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
                let todos = snapshot.val() ? Object.values(snapshot.val()) : [];
                return resolve(todos);
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
    async updateTodos(idTodo, todos, field, value) {
        let updates = {};
        if (idTodo) {
           updates[this.userId + '/todos/' + idTodo + '/' + field] = value;
        } else {
            updates[this.userId + '/todos/'] = todos;
        }
        await this.db.ref().update(updates);
        /* it'll return ok, if database handle update */
        /* of course it always return ok.. */
        return 200;
    }

    setSession(session) {
        let updates = {};
        let newPostKey = firebase.database().ref().child('sessions').push().key;
        updates[this.userId + '/sessions/' + newPostKey] = session;
        this.db.ref().update(updates);
    }

    getSessions() {
        return new Promise((resolve, reject) => {
            this.db.ref(this.userId + '/sessions').once('value').then(snapshot => {
                if (!snapshot) {
                    return reject({
                        status: 403,
                        message: 'Forbidden',
                    });
                }
                let sessions = snapshot.val() ? Object.values(snapshot.val()) : [];
                return resolve(sessions);
            });
        });
    }

}