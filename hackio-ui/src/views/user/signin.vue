<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="mx-auto auth-card" max-width="350">
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin" novalidate>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      v-model="email"
                      :error-messages="emailErrors"
                      label="email"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      v-model="password"
                      :type="'password'"
                      :error-messages="passwordErrors"
                      label="password"
                      required
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <div class="text-xs-center">
                      <v-btn
                        class="mt-5"
                        rounded
                        type="submit"
                        :disabled="loading"
                        :loading="loading"
                      >
                        Sign in
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import * as firebase from 'firebase'

export default {
  mixins: [validationMixin],
  validations: {
    password: { required, minLength: minLength(6) },
    email: { required, email },
  },
  data() {
    return {
      email: "",
      password: "",
      subscription: null,
    };
  },
  created() {
    this.CLEAR_ERROR();
    this.subscription = firebase.default.auth().onAuthStateChanged(async (user) => {
      if (user && user.email) {
        const token = await user.getIdToken(true);
        localStorage.setItem("token", token);
        await this.USER_INITLIZE_SESSION(user);
      }
    });
  },
  beforeDestroy() {
    console.log('destroyed');
    this.subscription && this.subscription();
  },
  computed: {
    ...mapGetters(["user", "error", "loading"]),
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("password must be at min 6 characters long");
      !this.$v.password.required && errors.push("password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    ...mapActions([
      "USER_SIGNUP",
      "USER_INITLIZE_SESSION",
      "USER_SIGNIN",
      "SET_ERROR",
      "CLEAR_ERROR"
    ]),
    async onSignin() {
      if (
        this.passwordErrors.length !== 0 ||
        this.emailErrors.length !== 0 ||
        !this.email ||
        !this.password
      ) {
        this.$v.$touch();
      } else {
        await this.USER_SIGNIN({ email: this.email, password: this.password });
      }
    },
    onDismissed() {
      this.CLEAR_ERROR();
    },
  },
};
</script>
