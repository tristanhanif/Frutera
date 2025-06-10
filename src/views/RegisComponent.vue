<script setup>
import { reactive } from 'vue';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

const register = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    password: form.password,
  });

  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');

  form.firstName = '';
  form.lastName = '';
  form.email = '';
  form.password = '';
  window.location = '/login';
}
</script>

<template>
  <div class="min-h-screen flex flex-col lg:flex-row overflow-hidden">
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
      <div class="w-full max-w-md">
        <div class="flex mb-8">
          <div class="flex transform hover:scale-105 transition-transform duration-300">
            <img src="https://i.imgur.com/jbG9Hmk.jpeg" alt="Fruteraa Logo" class="h-12 w-12 mr-2 animate-bounce"
              style="animation-duration: 2s;">
            <h1 class="text-3xl font-bold text-green-600">Frut<span class="text-yellow-400">eraa</span></h1>
          </div>
        </div>

        <div class="animate-fade-in-down">
          <h2 class="text-2xl font-bold text-green-600 mb-2">Sign Up</h2>
          <p class="text-gray-600 text-center mb-8">Fill your information below or register with your social account.
          </p>
        </div>

        <form class="space-y-5" @submit.prevent="register">
          <div class="grid grid-cols-2 gap-4">
            <div class="animate-fade-in-left" style="animation-delay: 0.1s">
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input v-model="form.firstName" type="text" required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 hover:shadow-md"
                placeholder="Enter First Name" />
            </div>
            <div class="animate-fade-in-right" style="animation-delay: 0.1s">
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input v-model="form.lastName" type="text" required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 hover:shadow-md"
                placeholder="Enter Last Name" />
            </div>
          </div>
          <div class="border-t border-gray-200 my-4 transform origin-left scale-x-0 animate-scale-in"
            style="animation-delay: 0.2s"></div>

          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="form.email" type="email" required
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 hover:shadow-md"
              placeholder="Enter Your Email" />
          </div>

          <div class="animate-fade-in-up" style="animation-delay: 0.4s">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input v-model="form.password" type="password" required
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 hover:shadow-md"
              placeholder="Enter Your Password" />
          </div>

          <div class="flex items-center animate-fade-in" style="animation-delay: 0.5s">
            <input type="checkbox"
              class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition duration-300" />
            <label class="ml-2 text-sm text-gray-700">
              Agree with <a href="#" class="text-green-600 hover:text-green-500 transition duration-300">Terms &
                Conditions</a> and <a href="#"
                class="text-green-600 hover:text-green-500 transition duration-300">Privacy Policy</a>
            </label>
          </div>
          <button type="submit"
            class="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition duration-300 transform hover:scale-[1.02]"
            >
            Sign Up
          </button>
        </form>

        <div class="relative my-6 animate-fade-in" style="animation-delay: 0.6s">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="px-2 bg-white text-sm text-gray-500">Or Sign Up With</span>
          </div>
        </div>

        <button @click="signUpWithGoogle"
          class="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-[1.02] animate-fade-in-up"
          style="animation-delay: 0.7s">
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
          Sign Up With Google
        </button>

        <div class="mt-8 text-center text-sm animate-fade-in" style="animation-delay: 0.8s">
          <span class="text-gray-600">Already have an account?</span>
          <a href="/login" class="ml-1 text-green-600 hover:text-green-500 font-medium transition duration-300">
            Sign In
          </a>
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:w-1/2 bg-[#1C8057] relative overflow-hidden">
      <div class="flex items-center justify-center p-12 h-full flex-col">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-10 left-20 w-16 h-16 bg-yellow-300 rounded-full opacity-10 animate-float"
            style="animation-delay: 0s; animation-duration: 15s;"></div>
          <div class="absolute top-1/4 right-20 w-24 h-24 bg-red-400 rounded-full opacity-10 animate-float"
            style="animation-delay: 2s; animation-duration: 18s;"></div>
          <div class="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-300 rounded-full opacity-10 animate-float"
            style="animation-delay: 4s; animation-duration: 20s;"></div>
          <div class="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-300 rounded-full opacity-10 animate-float"
            style="animation-delay: 1s; animation-duration: 16s;"></div>
        </div>

        <h1 class="mb-8 text-5xl font-bold text-white transform hover:scale-105 transition-transform duration-300">
          Frut<span class="text-yellow-300">eraa</span>
        </h1>

        <img src="https://i.imgur.com/1y9D8sL.png" alt="Frutaraa Fruits"
          class="rounded-xl object-cover w-[400px] animate-float-slow transform transition-transform duration-1000 hover:scale-105">

        <p class="mt-8 text-lg text-white/90 max-w-md text-center animate-fade-in-up">
          Join our community of fresh fruit lovers and enjoy the best quality produce delivered to your doorstep.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(10deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes floatSlow {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

/* Animation classes */
.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out forwards;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 6s ease-in-out infinite;
}
</style>
