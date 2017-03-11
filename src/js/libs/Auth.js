import firebase from 'firebase'

export default class Auth {
    constructor() {
        this.db = firebase;
    }
    /**
     * Get current user
     * @return {Promise}
     */
    getUser() {
        return new Promise((resolve, reject) => {
            this.db.auth().onAuthStateChanged(user => {
                if (!user) {
                    return reject({
                        status: 403,
                        message: 'Forbidden',
                    });
                }

                this.user = {
                    icon: user.photoURL,
                    email: user.email,
                    id: user.uid,
                    name: user.displayName,
                    token: user.refreshToken,
                };

                return resolve(this.user);
            });
        });
    }
    /**
     * Sign In with OAuth2 popup
     * @param  {String} redirect url after signing in
     */
    signIn(redirect = '/') {
        /** Github OAuth2 provider */
        const provider = new this.db.auth.GithubAuthProvider();

        /** Sign with OAuth provider */
        this.db.auth().signInWithPopup(provider).then(response => {
            this.user = {
                icon: response.user.photoURL,
                email: response.user.email,
                id: response.user.uid,
                name: response.user.displayName,
                token: response.user.refreshToken,
            };

            /** Refresh Application */
            window.location.href = redirect;
        });
    }
    /**
     * Sign Out with OAuth2 popup
     * @param  {String} redirect url after signing in
     */
    signOut(redirect = '/') {
        /**
         * Sign out from profile
         * Then redirect on main page App
        */
        firebase.auth().signOut();
        /** Refresh Application */
        window.location.href = redirect;
    }
}