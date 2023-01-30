<script>
  import ButtonCustom from '../components/ButtonCustom.vue'
  export default {
    data(){
      return {
        login: {
            email: '',
            password: ''
        }
      }
    },
    components: { ButtonCustom },
    emits: ['loginPost', 'changePage','googleSign'],
    methods: {
        loginPost() {
            this.$emit('loginPost', this.login )
            // console.log( this.login )
        },
        MoveToRegister(){
          this.$emit('changePage', 'Register')
        },
        googleSign( response ) {
          // console.log( response.credential )
          this.$emit('googleSign', response.credential )
        }
    }

  }
</script>

<template>
    <!-- login -->
    <div class="d-flex justify-content-center mt-5">
          <div class="form-signin m-auto">
            <form id="login-form" @submit.prevent="loginPost">
              <h1 class="h3 mb-3 display-1"><i class="fa-solid fa-user"></i> Log in to your account</h1>
              <span>Log in on your profile to autocomplete your purchase order with your personal data.</span>
              <div class="mb-3 mt-3">
                <div class="d-flex justify-content-between">
                  <label for="login-email"><i class="fa-solid fa-at"></i> Email </label>
                  <label class="text-danger text-end fw-bold">*</label>
                </div>
                <input type="email" v-model="login.email" class="form-control" id="login-email" placeholder="Enter email address ..." autocomplete="off" required />
              </div>
              <div class="mb-4">
                <div class="d-flex justify-content-between">
                  <label for="login-password"><i class="fa-solid fa-key"></i> Password </label>
                  <label class="text-danger text-end fw-bold">*</label>
                </div>
                <input type="password" v-model="login.password" class="form-control" id="login-password" placeholder="Enter your password ..." autocomplete="off" required />
              </div>
              <div class="checkbox mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="login-remember" />
                  <label class="form-check-label" for="login-remember"> Remember me </label>
                </div>
              </div>
              <ButtonCustom 
                  :type="'submit'" 
                  :text="'Login'" 
                  :icon="'fa-solid fa-user-lock'"
                  class="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3">
              </ButtonCustom>
              <!-- <button class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit">Log In</button> -->
              <div class="mt-4 mb-3 d-flex justify-content-center">
                <GoogleLogin :callback="googleSign"/>
              </div>
              <p class="text-center"> Don't have an account? <a href="" v-on:click.prevent="MoveToRegister"><i class="fa-solid fa-user-plus"></i> Sign up</a></p>
            </form>
          </div>
    </div>
    <!-- end login -->
  </template>