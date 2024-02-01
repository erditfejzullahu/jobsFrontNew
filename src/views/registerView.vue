<template>

<main class="main">
      <section class="pt-100 login-register">
        <div class="container"> 
          <div class="row login-register-cover">
            <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
              <div class="text-center">
                <p class="font-sm text-brand-2">Register </p>
                <h2 class="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                <p class="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                <button class="btn social-login hover-up mb-20"><img src="../assets/imgs/template/icons/icon-google.svg" alt="jobbox"><strong>Sign up with Google</strong></button>
                <div class="divider-text-center"><span>Or continue with</span></div>
              </div>
              <form class="login-register text-start mt-20" action="#">
                <div class="form-group">
                  <label class="form-label" for="input-1">Full Name *</label>
                  <input class="form-control" id="input-1" type="text" required name="fullname" placeholder="Steven Job" v-model="register.fullName">
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-2">Email *</label>
                  <input class="form-control" id="input-2" type="email" required name="emailaddress" placeholder="stevenjob@gmail.com" v-model="register.email">
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-3">Username *</label>
                  <input class="form-control" id="input-3" type="text" required name="username" placeholder="stevenjob" v-model="register.username">
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-4">Password *</label>
                  <input class="form-control" id="input-4" type="password" required name="password" placeholder="************" v-model="register.password">
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-5">Re-Password *</label>
                  <input class="form-control" id="input-5" type="password" required name="re-password" placeholder="************" v-model="register.confirmPassword">
                </div>
                <div class="login_footer form-group d-flex justify-content-between">
                  <label class="cb-container">
                    <input type="checkbox"><span class="text-small">Agree our terms and policy</span><span class="checkmark"></span>
                  </label><a class="text-muted" href="page-contact.html">Lean more</a>
                </div>
                <div class="form-group">
                  <button class="btn btn-brand-1 hover-up w-100" type="submit" name="login" @click.prevent="submitRegister">Submit &amp; Register</button>
                </div>
                <div class="text-muted text-center">Already have an account? <router-link to="/dashboard/login">Sign in</router-link></div>
              </form>
            </div>
            <div class="img-1 d-none d-lg-block"><img class="shape-1" src="../assets/imgs/page/login-register/img-1.svg" alt="JobBox"></div>
            <div class="img-2"><img src="../assets/imgs/page/login-register/img-2.svg" alt="JobBox"></div>
          </div>
        </div>
      </section>
    </main>

</template>

<script>

import axios from 'axios'

export default {
    name: 'RegisterView',
    data() {
        return {
            register: {
                fullName: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: '',

            }
        }
    },
    methods: {
        submitRegister(){
            const registerData = new FormData;
            registerData.append('name', this.register.fullName)
            registerData.append('email', this.register.email)
            registerData.append('password', this.register.password)
            registerData.append('password_confirmation', this.register.confirmPassword)

            axios.post('/api/register', registerData, {
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(response => {
                console.log(response);
                
            })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
        }
    }

}

</script>

<style scoped>

.main{
    margin: auto;
    align-items: center;
    justify-content: center;
}

</style>