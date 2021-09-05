<template>
<v-container fluid class="ma-0 pa-0">
  <v-row>
      <v-col cols="12" md="6" class="ma-0" style="padding-bottom: 0px !important;">
        <v-img style="height:100vh;" cover src="@/assets/leftlogin.png"></v-img>
      </v-col>
      <v-col cols="12" md="6" align-self="center">
          <v-container fluid class="fill-height">
              <v-card justify="center"  class="mx-auto" width="80%" flat>
                  <v-card-text>
                     <v-row justify="center">
                        <v-col cols="12" md="4">
                            <h2 class="login-header"> Log In </h2>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" md="10">
                            <p class="login-subheading"> Welcome back! Please login to your account. </p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mb-0 pb-0">
                        <v-col cols="12" md="8" class="mb-0 pb-0">
                            <v-text-field v-model="userlogin.data.username" color="#43425D" label="Username" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-0 pt-0">
                        <v-col cols="12" md="8" class="mt-0 pt-0">
                            <v-text-field v-model="userlogin.data.password" type="password" color="#43425D" label="Password" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="end">
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="5" class="mt-0 pt-0">
                            <p class="forgot-password"> Forgot Password</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-4">
                        <v-col cols="12" md="4">
                            <v-btn width="130" color="#31B670" class="white--text" :loading="loading" v-on:keyup.enter="login" @click="login"> Login </v-btn>
                        </v-col>
                    </v-row>
                  </v-card-text>
              </v-card>
          </v-container>
      </v-col>
  </v-row>
</v-container>
</template>
<script>
import router from '../router'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data: () => ({
    userlogin: { data: { username: '', password: '' } },
    rememberme: false,
    loading: false
  }),
  methods: {
    ...mapActions({
      getToken: 'session/getToken'
    }),
    login () {
      this.loading = true
      this.userlogin.data.password = btoa(this.userlogin.data.password)
      this.getToken(this.userlogin).then(response => {
        const token = 'Bearer ' + response.data.token
        this.$store.dispatch('session/setUser', response.data.user_info)
        this.$store.dispatch('session/setToken', token)
        if (window.localStorage) {
          window.localStorage.setItem('user', JSON.stringify(response.data.user))
          window.localStorage.setItem('token', token)
        }
        this.loading = false
        router.push(response.data.redirect ? response.data.redirect : '/home').catch(error => {
          console.log(error)
        })
      }).catch(error => {
        console.log(error)
        this.loading = false
        if (error.response && error.response.status === 401) {
          this.$store.dispatch('alert/displayAlert', { snackbar: true, color: 'error', message: error.response.data.error }, { root: true })
        } else {
          this.$store.dispatch('alert/displayAlert', { snackbar: true, color: 'error', message: error.response ? error.response.data.error : 'Failed to connect to backend' }, { root: true })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-header {
    color: #43425D;
    font-size: 25px;
}
.login-subheading {
    color: #4D4F5C;
    font-style: 'Merrant';
    font-size: 20px;
}
.forgot-password {
    color: #74C15A;
    font-style: 'Merrant';
    font-size: 14px;
}
.login-btn {
    color: white;
}
</style>
