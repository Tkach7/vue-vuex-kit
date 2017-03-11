import { mapState } from 'vuex'
import authProdiver from '../../libs/auth';

const data = function() {
    return {
        name: 'Profile'
    }
}

const methods = {
    /** Sign out from gitHub acc in App */
    signOut() {
        let auth = new authProdiver();
        auth.signOut();
    }
}

const computed = mapState({
    /** Get user from state */
    user: state => state.user
});

export default {
    data,
    methods,
    computed
}
