import { mapState } from 'vuex'

const data = function() {
    return {
        name: 'user-sessions'
    }
}


const computed = mapState({
    /** Get user from state */
    sessions: state => state.user.sessions
});

export default {
    data,
    computed
}
