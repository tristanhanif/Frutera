<template>
  <div>
    <div class="bg-green-700 text-white py-2 px-4 flex justify-between items-center text-sm">
      <div>Call Us: +123-456-789</div>
      <div class="font-bold">
        Sign up and GET 25% OFF for your first order.
        <span class="underline cursor-pointer">Sign up now</span>
      </div>
    </div>

    <header class="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-6">
          <div class="text-2xl font-bold text-green-700">FAYHANZ.</div>

          <div class="hidden md:flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span>Location</span>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative flex-1 max-w-2xl">
          <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <select class="bg-gray-100 text-gray-700 px-3 py-2 border-r border-gray-300 focus:outline-none">
              <option>All Categories</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Dairy</option>
            </select>
            <input
              type="text"
              placeholder="Search for products..."
              class="px-4 py-2 w-full focus:outline-none"
            >
            <button class="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <div class="absolute left-0 right-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-md hidden">
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#" class="hover:text-green-600">Home</a>
          <a href="#" class="hover:text-green-600">Shop</a>
          <a href="#" class="hover:text-green-600">Fruits</a>
          <a href="#" class="hover:text-green-600">Vegetable</a>
          <a href="#" class="hover:text-green-600">About Us</a>
          <a href="#" class="hover:text-green-600">Recently Viewed</a>
        </nav>

        <button class="md:hidden p-2 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="md:hidden bg-white py-2 px-4 border-t border-gray-200 hidden">
        <div class="flex flex-col gap-3">
          <a href="#" class="py-1 hover:text-green-600">Home</a>
          <a href="#" class="py-1 hover:text-green-600">Shop</a>
          <a href="#" class="py-1 hover:text-green-600">Fruits</a>
          <a href="#" class="py-1 hover:text-green-600">Vegetable</a>
          <a href="#" class="py-1 hover:text-green-600">About Us</a>
          <a href="#" class="py-1 hover:text-green-600">Recently Viewed</a>
        </div>
      </div>
    </header>

    <a href="/login"><button class="w-[100px] bg-red-600 p-4 text-xl text-white font-bold rounded-md hover:bg-red-700">Logout</button></a>
  </div>
</template>

<script setup>
</script>
