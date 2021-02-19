<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit()">
      <label>Employee name</label>
      <input
        @focus="clearStatus"
        @keypress="clearStatus"
        :class="{'has-error': submitting && invalidName}"
        v-model="employee.name"
        type="text"
      />
      <label>Employee Email</label>
      <input
        @keypress="clearStatus"
        @focus="clearStatus"
        :class="{'has-error': submitting && invalidEmail}"
        v-model="employee.email"
        type="text"
      />
      <p v-if="error && submitting" class="error-message">! please addrequired fields !!</p>
      <p v-if="success" class="success-message">added successfully</p>
      <button>Add Employee</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "employee-form",
  computed: {
    invalidName() {
      return this.employee.name === "";
    },
    invalidEmail() {
      return this.employee.email == "";
    }
  },
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      employee: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();
      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }
      this.$emit("employee-created", this.employee);
      this.employee = {
        name: "",
        email: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },
    clearStatus() {
      this.error = false;
      this.success = false;
    }
  }
};
</script>
<style scoped>
.sucess-message {
  color: #00ed53;
}
</style>