import 'babel-polyfill'
import firebase from 'firebase'
import firebaseConf from '../config/firebase.conf'
import AuthProvider from './libs/auth'
import Db from './libs/database'

/** Init firebase */
firebase.initializeApp(firebaseConf);

/** Define Auth provider */
const Auth = new AuthProvider();
/** Boot up */
Auth.getUser().then(async user => {
    let todos = [];
    /** Define Database */
    const database = new Db(user.id);
    /** Load todos from database */
    await database.getTodos().then(currentTodos => {
        todos = currentTodos;
    }, error => {
        System.import('./entries/guest')
            .then(App => App.default(error));
    });
    System.import('./entries/root')
        .then(App => App.default({user, todos}));
}, error => {
    System.import('./entries/guest')
        .then(App => App.default(error));
});