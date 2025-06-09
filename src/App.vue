<script setup>
import { RouterView } from 'vue-router';
// import { SearchIcon, HeartIcon } from '@heroicons/vue/outline';
</script>

<template>
  <div>
    <!-- Heroicons -->
    <!-- <div class="flex items-center gap-4 mb-6"> -->
      <!-- <SearchIcon class="w-6 h-6 text-gray-500" /> -->
      <!-- <HeartIcon class="w-6 h-6 text-red-500" /> -->
    <!-- </div> -->

    <!-- Halaman dinamis -->
    <RouterView />
  </div>
</template>

<style scoped>
/* kamu bisa tambah styling di sini jika diperlukan */
</style>

