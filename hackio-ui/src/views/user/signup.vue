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
              <form @submit.prevent="onSignup" novalidate>
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
                    <v-text-field
                      v-model="confirmPassword"
                       :type="'password'"
                      :error-messages="confirmPasswordErrors"
                      label="Confirm password"
                      required
                      @input="$v.confirmPassword.$touch()"
                      @blur="$v.confirmPassword.$touch()"
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
                        Sign up
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
export default {
  mixins: [validationMixin],
  validations: {
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, minLength: minLength(6) },
    email: { required, email }
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  created () {
    this.CLEAR_ERROR();
  },
  computed: {
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.minLength &&
        errors.push("confirmPassword must be at min 6 characters long");
      !this.$v.confirmPassword.required &&
        errors.push("confirmPassword is required.");
      this.confirmPassword !== this.password &&
        errors.push("both password must have same value");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("password must be at min 6 characters long");
      !this.$v.password.required && errors.push("password is required.");
      this.confirmPassword !== this.password &&
        errors.push("both password must have same value");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    ...mapGetters(["user", "error", "loading"])
  },
  methods: {
    ...mapActions([
      "USER_SIGNUP",
      "USER_SIGNIN",
      "SIGNIN_USING_FACEBOOK",
      "SIGNIN_USING_GOOGLE",
       "CLEAR_ERROR",
       "LOGOUT"
    ]),
    async onSignup() {
      if (
        this.passwordErrors.length !== 0 ||
        this.confirmPasswordErrors.length !== 0 ||
        this.emailErrors.length !== 0 ||
        !this.email ||
        !this.password ||
        !this.confirmPassword
      ) {
        this.$v.$touch();
      } else {
       await this.USER_SIGNUP({ email: this.email, password: this.password });
      }
    },
    onSigninGoogle() {
      this.SIGNIN_USING_GOOGLE();
    },
    onSigninFacebook() {
      this.SIGNIN_USING_FACEBOOK();
    },
    onDismissed() {
      this.CLEAR_ERROR();
    }
  }
};
</script>