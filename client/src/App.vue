<script>
  const HOST = `http://localhost:3000`

  import axios from 'axios'
  import register from './views/RegisterForm.vue'
  import Login from './views/LoginForm.vue'
  import SuksesLogin from './views/SuksesLogin.vue'
  export default {
    data(){
      return {
        message: 'Hello Vue!',
        page: 'Login',
        login: {
            email: '',
            password: ''
        },
        isLogin: false,
      }
    },
    components: {
      register,
      Login,
      SuksesLogin
    },
    created() {
      if( !localStorage.access_token ) {
            this.page = 'Login'
            this.isLogin = false
        } else {
            this.page = 'SuksesLogin'
            this.isLogin = true
        }
    },
    methods: {
        logout() {
          iziToast.show({
                title: 'cepat kembali yah ..',
                message: 'dadah kaka.. :(',
                color: 'red',
                position: 'center',
                image: 'https://i.pinimg.com/originals/29/21/3d/29213dbd1984032720aca71b57596045.jpg',
                imageWidth: 50,
                timeout: 2500,
          });
          localStorage.clear()
          this.isLogin = false
          this.page = 'Login'
        },
        registPost( args ) {
          axios({
            method: 'POST',
            url: `${HOST}/register`,
            data: args
          })
          .then( ({ data }) => {
              iziToast.show({
                  title: 'success!!',
                  message: 'Registernya success mas :)',
                  color: 'green',
                  position: 'center',
                  image: 'https://i.pinimg.com/originals/29/21/3d/29213dbd1984032720aca71b57596045.jpg',
                  imageWidth: 50,
                  timeout: 2500,
              });
              this.page = 'Login'
          })
          .catch( err => {
            console.log( err )
          })
        },
        loginPost(login) {
          // console.log( login )
            axios({
                method: 'POST',
                url: `${HOST}/login`,
                data: login
            })
            .then( ({data}) => {
              iziToast.show({
                title: 'hayy',
                message: 'Welcome! semoga betah yah :)',
                color: 'green',
                position: 'topRight',
                image: 'https://i.pinimg.com/originals/29/21/3d/29213dbd1984032720aca71b57596045.jpg',
                imageWidth: 50,
                timeout: 2500,
              });
              localStorage.setItem('access_token', data.access_token )
              this.page = 'SuksesLogin'
              this.isLogin = true
            })
            .catch( err => {
                console.log( err );
            })
        },
        changePage( data ) {
          this.page = data
        }
    }
  }
</script>

<template>

  <register 
      v-if="page === 'Register'" 
      v-on:registPost="registPost"/>

  <Login 
      v-if="page === 'Login'" 
      v-on:loginPost="loginPost" 
      @changePage="changePage"/>
  
  <SuksesLogin v-if="page === 'SuksesLogin'" />
</template>