<script setup>
import { RouterView } from 'vue-router';
import { SearchIcon, HeartIcon } from '@heroicons/vue/outline'; // tambahkan ini
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Selamat Datang di Frutera</h1>

    <!-- Heroicons -->
    <div class="flex items-center gap-4 mb-6">
      <SearchIcon class="w-6 h-6 text-gray-500" />
      <HeartIcon class="w-6 h-6 text-red-500" />
    </div>

    <!-- Halaman dinamis -->
    <RouterView />
  </div>
</template>

<style scoped>
/* kamu bisa tambah styling di sini jika diperlukan */
</style>

