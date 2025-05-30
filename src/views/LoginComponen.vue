
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const form = reactive({
    email: '',
    password: ''
});

const login = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(user => user.email === form.email && user.password === form.password);

    if (!foundUser) {
        alert('Invalid email or password');
        return;
    } else {
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(foundUser));

        form.email = '';
        form.password = '';
        router.push('/home');
    }
}
</script>


<template>
  <div class="min-h-screen flex bg-[#1C8057]">
    <div class="hidden lg:block lg:w-1/2 bg-[#1C8057]">
      <div class="flex items-center justify-center p-12 mt-12 flex-col">
        <h1 class="mb-12 text-6xl font-bold text-white">Frut<span class="text-[#FFC300]">eraa</span></h1>
        <img src="https://i.imgur.com/1y9D8sL.png" alt="Fruteraa Fruits" class="object-cover h-full w-[400px]">
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 rounded-3xl bg-white">
      <div class="w-full max-w-md">
        <div class="flex mb-8">
          <div class="flex">
            <img src="https://i.imgur.com/jbG9Hmk.jpeg" alt="Fruteraa Logo" class="h-12 w-12 mr-2">
            <h1 class="text-3xl font-bold text-[#1C8057]">Frut<span class="text-[#FFC300]">eraa</span></h1>
          </div>
        </div>

        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Sign In</h2>
        <p class="text-gray-600 mb-8">Please fill your detail to access your account.</p>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="email" type="email" required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter Your Email" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input v-model="password" type="password" required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter Your Password" />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input v-model="rememberMe" type="checkbox"
                class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
              <label class="ml-2 text-sm text-gray-700">Remember Me</label>
            </div>
            <a href="#" class="text-sm text-[#1C8057] hover:text-green-500">Forgot Password?</a>
          </div>

          <a href="/home"><button type="submit" class="w-full bg-[#1C8057] text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition duration-200" @click="login">Sign In</button></a>
        </form>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="px-2 bg-white text-sm text-gray-500">Or sign in with</span>
          </div>
        </div>

        <button @click="signInWithGoogle"
          class="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4" />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853" />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05" />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335" />
          </svg>
          Sign in With Google
        </button>

        <div class="mt-8 text-center text-sm">
          <span class="text-gray-600">Don't have an account?</span>
          <a href="/regis" class="ml-1 text-[#1C8057] hover:text-green-500 font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
