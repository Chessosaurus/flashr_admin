<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
const loading = ref(false)
const email = ref('')
const password = ref('')


const handleLogin = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <div class="body">
        <form class="login" @submit.prevent="handleLogin">
        <div class="center">
            <div class="logo">
                <img src="../assets/logo.png" />
            </div>
            <div class="description">
                <h1>Login</h1>
                <p>Login to your admin account.</p>
            </div>
            <div class="input">
                <input class="inputField" required type="email" placeholder="Email" v-model="email"/>
                <input class="inputField" required type="password" placeholder="Pasword" v-model="password" />
            </div>
            <div>
                <input
                type="submit"
                class="button"
                :value="loading ? 'Loading' : 'Login'"
                :disabled="loading"
                />
            </div>
        </div>
    </form>
    </div>
</template>

<style>

.body{
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: var(--grey-alt);
    margin: 0;
    padding: 0;
    height: 100vh;
}

.logo {
		margin-bottom: .5rem;

		img {
			width: 10rem;
		}
	}

.login{
    padding-top: 20vh;
}

.center{
    padding: 8vh;
    background-color: var(--blury-dark);
    border-radius: 20px;
}

.description{
    color: var(--light);
}

.button{
    color: white;
    background-color: var(--primary);
    border: var(--dark);
    border-radius: 5px;

    display: inline-block;
    padding: 0.5rem 1rem;
    cursor: pointer;

    text-align: center;
    font-size: 0.9rem;

    margin-top: 20px;
}

.button:hover{
    background-color: var(--primary-alt);
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;

  border-radius: 5px;
  border: var(--ligth);
  
  font-size: 0.9rem;
  color: var(--light);
  background-color: var(--dark-alt);
}

form{
    @media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}

</style>