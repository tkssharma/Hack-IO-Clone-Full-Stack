/* eslint-disable no-useless-catch */
import * as firebase from 'firebase'

export class FirebaseService {
    static async createUserWithEmailAndPassword(payload){
        try {
            return await firebase.default.auth().
            createUserWithEmailAndPassword(payload.email, payload.password);
        }catch(err){
            throw err;
        }
    }
    static async SignInWithEmailAndPassword(payload){
        try {
            return await firebase.default.auth().
            signInWithEmailAndPassword(payload.email, payload.password);
        }catch(err){
            throw err;
        }
    }
    static async sendPasswordResetEmail(email) {
        try {
          return firebase.auth().sendPasswordResetEmail(email);
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
      static async updateUserwithRole(email) {
        try {
          return firebase.auth().sendPasswordResetEmail(email);
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
}