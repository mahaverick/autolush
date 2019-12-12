<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns is-centered">
        <div class="column is-6">
          <h1 class="title is-4">Login</h1>
          <form action @submit.prevent="submit">
            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control">
                <input
                  v-model="form.email"
                  name="email"
                  type="email"
                  class="input"
                  placeholder="e.g. abhijeet@gmail.com"
                />
              </div>
            </div>

            <div class="field">
              <label for="password" class="label">Password</label>
              <div class="control">
                <input
                  v-model="form.password"
                  name="password"
                  type="password"
                  class="input"
                  placeholder="e.g. abhijeet@gmail.com"
                />
              </div>
            </div>

            <div class="field">
              <p class="control">
                <button class="button is-info is-medium" type="submit">Login</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      await this.$auth.loginWith("local", {
        data: this.form
      });

      this.$router.replace({
        name: "index"
      });
    }
  }
};
</script>