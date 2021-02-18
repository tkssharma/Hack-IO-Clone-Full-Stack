const AdminModule = {
    state : {
        adminEmail: '',
        isLoggedIn: false
    },
    mutations: {
        adminLogin(state) {
            state.isLoggedIn = true
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
}


export default AdminModule; 