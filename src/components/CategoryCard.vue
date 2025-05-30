<template>
  <div class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
    <div class="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </div>
    <h3 class="font-semibold text-gray-800">{{ name }}</h3>
    <p class="text-sm text-gray-500">{{ productCount }} Products</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    productCount: Number
  }
}
</script>
