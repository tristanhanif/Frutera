<template>
  <div class="min-h-screen flex">
    <!-- Bagian Gambar -->
    <div class="hidden lg:block lg:w-1/2 bg-green-800">
      <div class="flex items-center justify-center p-12 mt-12 flex-col">
        <h1 class="mb-12 text-6xl font-bold text-green-600">Frut<span class="text-yellow-400">eraa</span></h1>
        <img src="https://i.imgur.com/1y9D8sL.png" alt="Fruteraa Fruits"
          class="rounded-xl object-cover h-full w-[400px]">
      </div>
    </div>

    <!-- Bagian Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 rounded-2xl">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="flex mb-8">
          <div class="flex">
            <img src="https://i.imgur.com/jbG9Hmk.jpeg" alt="Fruteraa Logo" class="h-12 w-12 mr-2">
            <h1 class="text-3xl font-bold text-green-600">Frut<span class="text-yellow-400">eraa</span></h1>
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
            <a href="#" class="text-sm text-green-600 hover:text-green-500">Forgot Password?</a>
          </div>

          <button type="submit"
            class="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition duration-200">
            Sign In
          </button>
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
          <a href="#" class="ml-1 text-green-600 hover:text-green-500 font-medium" @click.prevent="signUp">
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FruteraaLoginWithImage',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleSubmit() {
      console.log('Login submitted:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      })
    },
    signInWithGoogle() {
      console.log('Sign in with Google clicked')
    },
    signUp() {
      console.log('Sign up clicked')
    }
  }
}
</script>
