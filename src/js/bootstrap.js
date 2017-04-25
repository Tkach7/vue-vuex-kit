import 'babel-polyfill'
import firebase from 'firebase'
import firebaseConf from '../config/firebase.conf'
import AuthProvider from './libs/auth'
import Db from './libs/database'

const css = require('../stylus/style.styl');

/** Init firebase */
firebase.initializeApp(firebaseConf);

/** Define Auth provider */
const Auth = new AuthProvider();
/** Boot up */
Auth.getUser().then(async user => {
    /** Define Database */
    const database = new Db(user.id);
    /** Load todos from database */
    let todos = await database.getTodos().then(currentTodos => {
        return currentTodos;
    }, error => {
        return [];
    });
    /** Load sessions from database */
    let sessions = await database.getSessions().then(sessions => {
        return sessions;
    }, error => {
        return [];
    });
    System.import('./entries/root')
        .then(App => App.default({user, todos, sessions}));
}, error => {
    System.import('./entries/guest')
        .then(App => App.default(error));
});
