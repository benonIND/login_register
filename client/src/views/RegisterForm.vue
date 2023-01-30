<script>
import ButtonCustom from '../components/ButtonCustom.vue'
  export default {
    data(){
      return {
        data: {
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: ''
        },
      }
    },
    components: {
        ButtonCustom
    },
    emits: ['registPost'],
    methods: {
        registerPost() {
            this.$emit('registPost', this.data )
        }
    }
  }
</script>

<template>
    <!-- register -->
    <div class="d-flex justify-content-center">
        <div class="form-signin m-auto">
        <form id="register-form" @submit.prevent="registerPost">
            <h1 class="h3 mb-3 display-1"><i class="fa-solid fa-user-plus"></i> Sign up and enjoy </h1>
            <div class="mb-3">
            <div class="d-flex justify-content-between">
                <label for="register-username"><i class="fa-solid fa-user-pen"></i> Username </label>
                <label class="text-danger text-end fw-bold">*</label>
            </div>
            <input 
                type="text" 
                class="form-control" 
                v-model="data.name" 
                placeholder="Enter your username ..." 
                autocomplete="off" 
                required />
            </div>
            <div class="mb-3">
            <div class="d-flex justify-content-between">
                <label for="register-email"><i class="fa-solid fa-at"></i> Email</label>
                <label class="text-danger text-end fw-bold">*</label>
            </div>
            <input 
                type="email" 
                class="form-control"  
                v-model="data.email"
                placeholder="Enter email address ..." 
                autocomplete="off" 
                required />
            </div>
            <div class="mb-3">
            <div class="d-flex justify-content-between">
                <label for="register-password"><i class="fa-solid fa-key"></i> Password</label>
                <label class="text-danger text-end fw-bold">*</label>
            </div>
            <input 
                type="password" 
                class="form-control" 
                v-model="data.password"
                placeholder="Enter your password ..." 
                autocomplete="off" 
                required />
            </div>
            <div class="mb-3">
            <label for="register-phone"><i class="fa-solid fa-square-phone"></i> Phone Number </label>
            <input 
                type="number" 
                class="form-control"
                v-model="data.phoneNumber"
                placeholder="Enter phone number (optional) ..." 
                autocomplete="off"/>
            </div>
            <div class="mb-3">
            <label for="register-address"><i class="fa-solid fa-location-dot"></i> Address </label>
            <textarea 
                class="form-control" 
                rows="3" 
                v-model="data.address"
                placeholder="Enter your address (optional) ..." 
                autocomplete="off"></textarea>
            </div>
            <ButtonCustom 
                :text="'Register'"
                :type="'submit'" 
                :icon="'fa-solid fa-address-card'"
                class="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3">
            </ButtonCustom>
            <!-- <button class="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">Sign Up</button> -->
        </form>
        </div>
    </div>
    <!-- end register -->
</template>