class Auth{
    constructor(){
        localStorage.getItem('auth-token')?
        this.authenticated = true : this.authenticated = false;
        
    }

    login(cb){
        localStorage.getItem('auth-token')?
        this.authenticated = true : this.authenticated = false;
        cb();
    }

    logout(cb){
        this.authenticated = false;
        cb();
    }

    isAthenticated(){
        return this.authenticated
    }
}

export default new Auth;