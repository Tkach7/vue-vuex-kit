import Auth from '../../../../libs/auth';

const data = () => {
    return {
        name: 'SignIn'
    }
}

const methods = {
    signIn() { 
        let auth = new Auth();
        auth.signIn();
    }
}

export default {
    data,
    methods
}
