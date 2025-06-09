<template>
  <div class="w-full bg-white relative">
    <!-- Top Bar -->
    <div class="w-full h-[65px] bg-[#f9c51a] flex items-center px-[69px]">
      <span class="text-lg text-black">Call Us : +123-456-789</span>
      <div class="ml-auto flex .items-center gap-4">
        <span class="text-lg text-black">
          Sign up and GET 25% OFF for your first order.
          <span class="text-[#1d805a] underline">Sign up now</span>
        </span>
        <!-- <div class="flex gap-4">
          <img
            v-for="(icon, index) in topIcons"
            :key="index"
            :src="icon"
            class="w-[25px] h-[25px]"
            alt="Social icon"
          >
        </div> -->
      </div>
    </div>

    <!-- Header -->
    <div class="w-full h-[225px] bg-[#1c8057] px-[112px] pt-[28px]">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-4">
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/83KC4Au1sG.png"
            class="w-[70px] h-[70px] rounded-full"
            alt="Logo"
          >
          <span class="text-[28px] text-white font-normal">FAYHANZ.</span>
        </div>

        <div class="relative w-[679px] h-[62px] bg-[#2f9869] rounded-[15px]">
          <div class="absolute inset-0 flex items-center pl-[22px] gap-4">
            <span class="text-[22px] text-white">Filter</span>
            <div class="w-px h-[26px] bg-white"></div>
            <span class="text-[20px] text-white/70">Search for products...</span>
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/qCgPrQtKMr.png"
              class="w-[24px] h-[24px] ml-auto mr-[22px]"
              alt="Search icon"
            >
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/RuQOHreWp3.png"
              class="w-[24px] h-[24px]"
              alt="Location icon"
            >
            <span class="text-[15px] text-white font-medium">New York, USA</span>
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/WXo5xfMHSu.png"
              class="w-[24px] h-[24px]"
              alt="Dropdown icon"
            >
          </div>

          <!-- <div class="flex gap-4">
            <img
              v-for="(icon, index) in headerIcons"
              :key="index"
              :src="icon"
              class="w-[24px] h-[24px]"
              alt="Header icon"
            >
          </div> -->
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between items-center mt-[60px]">
        <div class="relative">
          <div class="w-[265px] h-[49px] bg-[#ffc300] rounded-[8px] flex items-center pl-[19px] gap-4">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/cQuWXxipab.png"
              class="w-[24px] h-[24px]"
              alt="Categories icon"
            >
            <span class="text-[18px] text-black font-medium">Browse All Categories</span>
          </div>
        </div>

        <!-- <div class="flex gap-[93px]">
          <span
            v-for="(item, index) in navItems"
            :key="index"
            class="text-[20px] text-white font-medium"
          >
            {{ item }}
          </span>
        </div> -->

        <div class="flex items-center gap-2">
          <span class="text-[18px] text-[#ffc300] font-medium">Recently Viewed</span>
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/sDpRrASUUG.png"
            class="w-[24px] h-[24px]"
            alt="Arrow icon"
          >
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-[1512px] mx-auto">
      <h1 class="text-[64px] font-semibold text-center mt-[113px]">Shop</h1>
      <p class="text-[36px] text-center mt-6">Home / Shop</p>

      <!-- Filter Section -->
      <div class="flex justify-between items-center mt-[180px] px-[120px]">
        <h2 class="text-[24px] font-medium">Filter Options</h2>
        <span class="text-[16px]">Showing 1-12 of 2560 results</span>

        <div class="flex items-center gap-4">
          <span class="text-[16px]">Sort by :</span>
          <div class="w-[175px] h-[30px] rounded-[10px] border border-[#d9d9d9] flex items-center justify-between px-2">
            <span class="text-[14px]">Default Sorting</span>
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/jMhUorObDv.png"
              class="w-[24px] h-[24px]"
              alt="Sort icon"
            >
          </div>
        </div>
      </div>

      <!-- Product Grid would go here -->
    </div>
  </div>
</template>
