import { FirebaseService } from '../../../services/firebaseAPI';

const UserModule = {
  state: {
    user: null,
    error: null,
    loading: false,
    isLoggedIn: false,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
      state.isLoggedIn = true
    },
    SET_ERROR(state, payload) {
      state.error = payload
    }
  },
  actions: {
    async USER_SIGNUP({ commit }, payload) {
      try {
        await FirebaseService.createUserWithEmailAndPassword(payload);
      } catch (err) {
        commit("SET_ERROR", err.message);
        throw err;
      }
    },
    async USER_SIGNIN({ commit }, payload) {
      try {
        await FirebaseService.SignInWithEmailAndPassword(payload);
      } catch (err) {
        commit("SET_ERROR", err.message);
        throw err;
      }
    },
    async USER_INITLIZE_SESSION({ commit }, payload) {
      commit("SET_USER", payload);
    },
    async CLEAR_ERROR({ commit }) {
      commit("SET_ERROR", {});
    },

  },
  getters: {
    user: state => state.user,
    loading: state => state.loading,
    isLoggedIn: state => state.isLoggedIn,
    error: state => state.error
  }
}


export default UserModule; 