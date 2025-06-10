<template>
 <div class="full-page-container" ref="fullPage">
  <header>
    <div class="max-w-screen h-[65px] flex items-center px-[199px] justify-between bg-[#FAC71B]">
      <div class="text-[18px] font-medium ml-5">
        Call Us : +123-456-789
      </div>

      <div class="flex items-center">
        <span class="text-[18px] font-medium mr-[9px]">
          Sign up and GET 25% OFF for your first order.
        </span>
        <a href="/regis" class="text-[18px] font-medium text-[#197852] pl-3 underline">
          <p class="">Sign up now</p>
        </a>
      </div>

      <div class="flex items-center gap-[6px]">
        <div class="group relative transition-all duration-300 ease-in-out">
          <div class="w-[27px] h-[27px] rounded-full bg-[#197852] flex items-center justify-center text-center
                     group-hover:w-[35px] group-hover:h-[35px] group-hover:bg-[#E1306C]
                     transition-all duration-300 ease-in-out">
            <a href="#"><i class="fab fa-instagram text-[20px] text-white group-hover:text-white"></i></a>
          </div>
          <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 text-white">
            Instagram
          </span>
        </div>

        <div class="group relative transition-all duration-300 ease-in-out">
          <div class="w-[27px] h-[27px] rounded-full bg-[#197852] flex items-center justify-center
                     group-hover:w-[35px] group-hover:h-[35px] group-hover:bg-[#1877F2]
                     transition-all duration-300 ease-in-out">
            <a href="#"><i class="fab fa-facebook-f text-[20px] text-white group-hover:text-white"></i></a>
          </div>
          <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 text-white">
            Facebook
          </span>
        </div>

        <div class="group relative transition-all duration-300 ease-in-out">
          <div class="w-[27px] h-[27px] rounded-full bg-[#197852] flex items-center justify-center
                     group-hover:w-[35px] group-hover:h-[35px] group-hover:bg-[#FF0000]
                     transition-all duration-300 ease-in-out">
            <a href="#"><i class="fab fa-youtube text-[20px] text-white group-hover:text-white"></i></a>
          </div>
          <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 text-white">
            YouTube
          </span>
        </div>

        <div class="group relative transition-all duration-300 ease-in-out">
          <div class="w-[27px] h-[27px] rounded-full bg-[#197852] flex items-center justify-center
                     group-hover:w-[35px] group-hover:h-[35px] group-hover:bg-[#1DA1F2]
                     transition-all duration-300 ease-in-out">
            <a href="#"><i class="fab fa-twitter text-[20px] text-white group-hover:text-white"></i></a>
          </div>
          <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 text-white">
            Twitter
          </span>
        </div>
      </div>
    </div>

    <div class="max-w-screen h-[300px] bg-[#1C8057] flex items-center">
      <div class="flex items-center ml-[120px] mt-[-105px]">
        <!-- Logo and Profile -->
        <div class="w-[70px] h-[70px] rounded-full bg-gray-300 overflow-hidden">
          <img src="https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg" alt="Profile"
            class="w-full h-full object-cover">
        </div>
        <div class="ml-[13px]">
          <h1 class="text-[28px] font-normal text-white">Raihan.</h1>
        </div>

        <!-- Location -->
        <div class="flex justify-center items-center ml-[60px]">
          <span class="text-[16px] font-regular text-white mt-[-5px]">Location</span>
          <div class="flex items-center justify-center mt-[8px] mb-[-70px] ml-[-62px]">
            <svg class="w-[24px] h-[24px] text-[#C09813]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
              </path>
            </svg>
            <span class="text-[16px] font-medium text-white ml-[5px] mr-[5px]">New York, USA</span>
            <svg class="w-[24px] h-[24px] text-[#C09813]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div
          class="w-[255px] h-[49px] bg-[#FAC71B] mb-[-270px] ml-[-395px] rounded-md flex items-center justify-center cursor-pointer transition-all duration-300 z-10"
          :class="{ 'ml-[-150px]': isCategoryOpen }" @click="toggleCategory">
          <svg class="w-6 h-6 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <span class="text-[18px] font-medium text-black">Browse All Categories</span>
        </div>

        <nav
          class="absolute ml-[230px] mb-[-265px] w-full h-[62px] px-[120px] flex items-center transition-all duration-500 transform"
          :class="{
            'translate-x-0 opacity-100': isCategoryOpen,
            'translate-x-[-100px] opacity-0': !isCategoryOpen
          }">
          <div class="flex space-x-[50px]">
            <a href="/home"
              class="nav-link text-[18px] font-medium text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative group"
              data-target="home">
              Home
              <span
                class="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#"
              class="nav-link text-[18px] font-medium text-white opacity-100 hover:opacity-100 transition-opacity duration-300 relative group"
              data-target="shop">
              Shop
              <span
                class="absolute bottom-[-10px] left-0 w-full h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#"
              class="nav-link text-[18px] font-medium text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative group"
              data-target="fruits">
              Fruits
              <span
                class="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#"
              class="nav-link text-[18px] font-medium text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative group"
              data-target="vegetable">
              Vegetable
              <span
                class="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#"
              class="nav-link text-[18px] font-medium text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative group"
              data-target="about">
              About Us
              <span
                class="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </nav>
        <div
          class="absolute left-[555px] top-[150px] w-[679px] h-[62px] bg-[#2F9969] rounded-lg flex items-center group">
          <div class="flex items-center pl-[21px] cursor-pointer min-w-[200px] h-full">
            <span class="text-[22px] font-normal text-white">All Categories</span>
            <svg
              class="w-[28px] h-[28px] ml-[8px] text-white opacity-70 transition-transform duration-200 group-hover:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div class="h-[26px] w-px bg-white mx-[41px] opacity-70"></div>

          <div class="flex items-center flex-grow text-white h-full">
            <input type="text" placeholder="Search for products..."
              class="text-[20px] font-normal w-full focus:outline-none bg-transparent placeholder-white placeholder-opacity-70">
            <svg class="w-[24px] h-[24px] mr-[22px] text-white opacity-70" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div
            class="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200 invisible opacity-0
                  group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
            <div class="p-4">
              <div class="grid grid-cols-3 gap-6">
                <div>
                  <h3 class="text-lg font-semibold text-[#197852] mb-3 flex items-center">
                    <i class="fa-solid fa-apple-whole fa-1x text-[#197852] mr-[10px] mt-[1px]"
                      style="padding: 0.2em;"></i>
                    <p class="text-black">Buah Segar</p>
                  </h3>
                  <ul class="space-y-2">
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Apel</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Pisang</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Jeruk</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Alpukat</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Strawberry</a></li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-[#197852]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M18.2 12.27c1.07-.7 1.8-1.9 1.8-3.27 0-2.21-1.79-4-4-4-.95 0-1.81.35-2.5.9-.69-.55-1.55-.9-2.5-.9-2.21 0-4 1.79-4 4 0 1.37.73 2.57 1.8 3.27M3 16h18M3 16c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4M3 16v-4" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h0m4 0h0m4 0h0" />
                    </svg> Sayuran
                  </h3>
                  <ul class="space-y-2">
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Brokoli</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Wortel</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Bayam</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Kangkung</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Sawi</a></li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-[#197852]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Lainnya
                  </h3>
                  <ul class="space-y-2">
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Bahan Pokok</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Daging & Ikan</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Produk Susu</a></li>
                    <li><a href="#" class="text-gray-700 hover:text-[#197852] transition">Makanan Organik</a></li>
                  </ul>
                </div>
              </div>

              <button
                class="w-full mt-4 py-2 bg-[#FAC71B] hover:bg-[#e6b308] rounded-md text-center font-medium transition-colors">
                Lihat Semua Kategori
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center ml-[920px] mt-[35px]">
          <div class="group relative">
            <svg
              class="w-[24px] h-[24px] text-white opacity-70 group-hover:opacity-100 group-hover:text-[#ff6b6b] transition-all duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                        group-hover:opacity-100 transition-opacity duration-300 text-white">
              Wishlist
            </span>
          </div>
          <div class="group relative ml-[21px]">
            <svg
              class="w-[24px] h-[24px] text-white opacity-70 group-hover:opacity-100 group-hover:text-[#FAC71B] transition-all duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                        group-hover:opacity-100 transition-opacity duration-300 text-white">
              Cart
            </span>
          </div>
          <div class="group relative ml-[21px]">
            <svg
              class="w-[24px] h-[24px] text-white opacity-70 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0
                        group-hover:opacity-100 transition-opacity duration-300 text-white">
              Profile
            </span>
          </div>
        </div>
        <div class="relative inline-block ml-[-172px] mt-[256px] group">
          <div class="flex items-center cursor-pointer">
            <span class="text-[18px] font-medium text-[#E6A175] group-hover:text-white transition-colors duration-300">
              Recently Viewed
            </span>
            <svg class="w-7 h-7 ml-[10px] text-[#E6A175] group-hover:text-white transition-colors duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div class="absolute left-0 mt-2 w-[300px] bg-white shadow-lg rounded-md p-4 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50
                    transform group-hover:translate-y-0 translate-y-[-10px]">
            <div v-if="recentItems.length === 0" class="text-center py-4 text-gray-500">
              <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>No recently viewed items</p>
              <button class="mt-2 text-sm text-[#197852] underline hover:text-[#145c3d]" @click="navigateToProducts">
                Browse Products
              </button>
            </div>
            <div v-else>
              <div v-for="item in recentItems" :key="item.id"
                class="flex items-center py-2 hover:bg-gray-50 rounded cursor-pointer" @click="viewProduct(item.id)">
                <img :src="item.image" :alt="item.name" class="w-10 h-10 object-cover rounded">
                <div class="ml-3">
                  <p class="text-sm font-medium">{{ item.name }}</p>
                  <p class="text-xs text-[#197852]">{{ item.price }}</p>
                </div>
              </div>
              <button
                class="w-full mt-2 py-2 bg-[#FAC71B] text-sm font-medium rounded hover:bg-[#e6b308] transition-colors"
                @click="viewAllHistory">
                View All History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Page Title -->
    <div class="container mx-auto text-center mt-[113px]">
      <h1 class="text-[64px] font-semibold">Shop</h1>
      <p class="text-[36px] font-normal mt-6">Home / Shop</p>
    </div>

    <!-- Filter Options -->
    <div class="container mx-auto px-4 mt-[180px]">
      <div class="flex justify-between items-center border-b border-black pb-2">
        <h2 class="text-2xl font-medium">Filter Options</h2>
        <div class="flex items-center gap-4">
          <span class="text-base">Showing 1-12 of 2560 results</span>
          <span class="text-base">Sort by :</span>
          <div class="border border-[#d9d9d9] rounded-lg h-[30px] w-[175px] flex items-center px-2">
            <span class="text-sm">Default Sorting</span>
            <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vpL6P237dk.png)] bg-cover ml-auto"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Filters -->
    <div class="container mx-auto px-4 mt-8">
      <div class="flex items-center gap-4">
        <h3 class="text-xl font-medium">Category</h3>
        <span class="text-base">Active Filter</span>
        <div class="bg-[#ffc300] rounded-lg h-[34px] px-3 flex items-center">
          <span class="text-lg font-medium">Price : $25.00 - $125.00</span>
          <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/qoULqEove8.png)] bg-cover ml-2"></div>
        </div>
        <div class="bg-[#ffc300] rounded-lg h-[34px] px-3 flex items-center">
          <span class="text-lg font-medium">5 Star</span>
          <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/D1WoGq0aQn.png)] bg-cover ml-2"></div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 mt-12 flex">
      <!-- Sidebar Filters -->
      <div class="w-[215px] mr-8">
        <!-- Categories -->
        <div class="mb-8">
          <h3 class="text-2xl font-medium mb-4">Category</h3>
          <ul class="space-y-4">
            <li class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <span class="text-lg">Vegetables</span>
            </li>
            <li class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <span class="text-lg">Fresh Fruits</span>
            </li>
            <li class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <span class="text-lg">Milk & Eggs</span>
            </li>
            <li class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <span class="text-lg">Bakery</span>
            </li>
            <li class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <span class="text-lg">Drinks</span>
            </li>
          </ul>
        </div>

        <div class="border-t border-black my-6"></div>

        <!-- Price -->
        <div class="mb-8">
          <h3 class="text-2xl font-medium mb-4">Price</h3>
          <span class="text-lg">$25.00 - $125.00</span>
          <div class="mt-4">
            <div class="h-[15px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QVKy1ER9vz.png)] bg-cover"></div>
          </div>
        </div>

        <div class="border-t border-black my-6"></div>

        <!-- Review -->
        <div>
          <h3 class="text-2xl font-medium mb-4">Review</h3>
          <div class="space-y-4">
            <!-- 5 Star -->
            <div class="flex items-center">
              <div class="w-5 h-5 bg-[#197852] rounded mr-3">
                <div class="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/hudC0vDDhM.png)] bg-cover"></div>
              </div>
              <div class="flex">
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/8n6brMe9ai.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/FfJTeMChsM.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/YnV38Vkj8p.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/ArUVvZhQvA.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vw7QPu3MgC.png)] bg-cover"></div>
              </div>
              <span class="text-base font-medium ml-4">5 Star</span>
            </div>

            <!-- 4 Star -->
            <div class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <div class="flex">
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/MKyZpX95vW.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/onddj58Zno.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/NpzZATknky.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/Ugj1AhKxF1.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/cUYU02cqRB.png)] bg-cover"></div>
              </div>
              <span class="text-base font-medium ml-4">4 Star</span>
            </div>

            <!-- 3 Star -->
            <div class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <div class="flex">
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/D0P8gvzuCo.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vOY2w1v4Tb.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vjh8JEx09j.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/5gof52fTst.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/tbQs4g3x83.png)] bg-cover"></div>
              </div>
              <span class="text-base font-medium ml-4">3 Star</span>
            </div>

            <!-- 2 Star -->
            <div class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <div class="flex">
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/uEjv6Sjxog.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/nKW5PZomCQ.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/LW52VXyeBs.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/83EHrfgCH4.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/MxRcH9vho6.png)] bg-cover"></div>
              </div>
              <span class="text-base font-medium ml-4">2 Star</span>
            </div>

            <!-- 1 Star -->
            <div class="flex items-center">
              <div class="w-5 h-5 bg-[#d9d9d9] rounded mr-3"></div>
              <div class="flex">
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QR3xHvELTv.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/n2YkioqKk8.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/NxpdT3wu3z.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/BiuUOkpRh5.png)] bg-cover"></div>
                <div class="w-[22px] h-[22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/g2LKZCnAfH.png)] bg-cover"></div>
              </div>
              <span class="text-base font-medium ml-4">1 Star</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-3 gap-8 flex-1">
        <!-- Product 1 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="bg-[#197852] rounded-lg px-4 py-2">
                <span class="text-lg font-medium text-white">10% off</span>
              </div>
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/YCkQcw5HTp.png)] bg-cover"></div>
            </div>
            <div class="flex justify-center mt-4">
              <div class="w-[213px] h-[189px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/22fgfJcVQ4.png)] bg-cover rounded-lg"></div>
            </div>
          </div>

          <div class="px-4 pb-4">
            <span class="text-sm text-[#197852]">Vegetables</span>
            <h3 class="text-lg font-semibold mt-2">Fresh Red Tomatoes</h3>
            <span class="text-xs text-black/50">500 g</span>

            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-1">
                <span class="text-base font-semibold">$2.25</span>
                <div class="relative">
                  <span class="text-base text-black/50">$2.50</span>
                  <div class="absolute top-1/2 w-full h-px bg-black/50"></div>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <div class="w-[18px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/1iU4Mn30ss.png)] bg-cover"></div>
                  <span class="text-sm font-medium">4.9</span>
                </div>

                <button class="bg-[#edf5f2] rounded-full px-4 py-2 flex items-center gap-1 mt-4">
                  <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/Ym6mCequJ8.png)] bg-cover"></div>
                  <span class="text-xs font-medium text-[#197852]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="bg-[#197852] rounded-lg px-4 py-2">
                <span class="text-lg font-medium text-white">5% off</span>
              </div>
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/aMe5mZDz0G.png)] bg-cover"></div>
            </div>
            <div class="flex justify-center mt-4">
              <div class="w-[265px] h-[222px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/dEwoXp1aNF.png)] bg-cover rounded-lg"></div>
            </div>
          </div>

          <div class="px-4 pb-4">
            <span class="text-sm text-[#197852]">Vegetables</span>
            <h3 class="text-lg font-semibold mt-2">Premium Imported Carrots</h3>
            <span class="text-xs text-black/50">1 kg</span>

            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-1">
                <span class="text-base font-semibold">$4.28</span>
                <div class="relative">
                  <span class="text-base text-black/50">$4.50</span>
                  <div class="absolute top-1/2 w-full h-px bg-black/50"></div>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <div class="w-[18px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/dtjGdT2xwa.png)] bg-cover"></div>
                  <span class="text-sm font-medium">4.9</span>
                </div>

                <button class="bg-[#edf5f2] rounded-full px-4 py-2 flex items-center gap-1 mt-4">
                  <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/N9yyn85NiU.png)] bg-cover"></div>
                  <span class="text-xs font-medium text-[#197852]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 3 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="bg-[#197852] rounded-lg px-4 py-2">
                <span class="text-lg font-medium text-white">20% off</span>
              </div>
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/g23fL6Ezcg.png)] bg-cover"></div>
            </div>
            <div class="flex justify-center mt-4">
              <div class="w-[193px] h-[186px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/YiPbi2WAFf.png)] bg-cover rounded-lg"></div>
            </div>
          </div>

          <div class="px-4 pb-4">
            <span class="text-sm text-[#197852]">Vegetables</span>
            <h3 class="text-lg font-semibold mt-2">Fresh Romaine Lettuce</h3>
            <span class="text-xs text-black/50">250 g</span>

            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-1">
                <span class="text-base font-semibold">$1.60</span>
                <div class="relative">
                  <span class="text-base text-black/50">$2.00</span>
                  <div class="absolute top-1/2 w-full h-px bg-black/50"></div>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <div class="w-[18px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/cv1HhqrOdB.png)] bg-cover"></div>
                  <span class="text-sm font-medium">4.9</span>
                </div>

                <button class="bg-[#edf5f2] rounded-full px-4 py-2 flex items-center gap-1 mt-4">
                  <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/54Q6zZz4Pp.png)] bg-cover"></div>
                  <span class="text-xs font-medium text-[#197852]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 4 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="bg-[#197852] rounded-lg px-4 py-2">
                <span class="text-lg font-medium text-white">5% off</span>
              </div>
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/otAEONCQsz.png)] bg-cover"></div>
            </div>
            <div class="flex justify-center mt-4">
              <div class="w-[261px] h-[173px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/VNeCLWTZjj.png)] bg-cover rounded-lg"></div>
            </div>
          </div>

          <div class="px-4 pb-4">
            <span class="text-sm text-[#197852]">Fruit</span>
            <h3 class="text-lg font-semibold mt-2">Manggo</h3>
            <span class="text-xs text-black/50">400 g</span>

            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-1">
                <span class="text-base font-semibold">$23.75</span>
                <div class="relative">
                  <span class="text-base text-black/50">$25.00</span>
                  <div class="absolute top-1/2 w-full h-px bg-black/50"></div>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <div class="w-[18px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/6GHOX3Yegh.png)] bg-cover"></div>
                  <span class="text-sm font-medium">4.9</span>
                </div>

                <button class="bg-[#edf5f2] rounded-full px-4 py-2 flex items-center gap-1 mt-4">
                  <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/py80gan4kp.png)] bg-cover"></div>
                  <span class="text-xs font-medium text-[#197852]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 5 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="bg-[#197852] rounded-lg px-4 py-2">
                <span class="text-lg font-medium text-white">5% off</span>
              </div>
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/gpFNBs4OgX.png)] bg-cover"></div>
            </div>
            <div class="flex justify-center mt-4">
              <div class="w-[191px] h-[191px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/POmCT35YtE.png)] bg-cover rounded-lg"></div>
            </div>
          </div>

          <div class="px-4 pb-4">
            <span class="text-sm text-[#197852]">Fruit</span>
            <h3 class="text-lg font-semibold mt-2">Fresh snake fruit</h3>
            <span class="text-xs text-black/50">50 g</span>

            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-1">
                <span class="text-base font-semibold">$7.5</span>
                <div class="relative">
                  <span class="text-base text-black/50">$10.00</span>
                  <div class="absolute top-1/2 w-full h-px bg-black/50"></div>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <div class="w-[18px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/FbAb4cte1V.png)] bg-cover"></div>
                  <span class="text-sm font-medium">4.9</span>
                </div>

                <button class="bg-[#edf5f2] rounded-full px-4 py-2 flex items-center gap-1 mt-4">
                  <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/j46xOEXf8N.png)] bg-cover"></div>
                  <span class="text-xs font-medium text-[#197852]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 6 -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-4">
            <div class="flex justify-between">
              <div class="bg-[#197852] rounded-lg px-4 py-2">
                <span class="text-lg font-medium text-white">5% off</span>
              </div>
              <div class="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/1AVbHOAkeQ.png)] bg-cover"></div>
            </div>
            <div class="flex justify-center mt-4">
              <div class="w-[223px] h-[316px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vtt8BMeKD2.png)] bg-cover rounded-lg"></div>
            </div>
          </div>

          <div class="px-4 pb-4">
            <span class="text-sm text-[#197852]">Fruit</span>
            <h3 class="text-lg font-semibold mt-2">CocoMelon</h3>
            <span class="text-xs text-black/50">50 g</span>

            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-1">
                <span class="text-base font-semibold">$7.5</span>
                <div class="relative">
                  <span class="text-base text-black/50">$10.00</span>
                  <div class="absolute top-1/2 w-full h-px bg-black/50"></div>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1">
                  <div class="w-[18px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/0q0yWGgCf3.png)] bg-cover"></div>
                  <span class="text-sm font-medium">4.9</span>
                </div>

                <button class="bg-[#edf5f2] rounded-full px-4 py-2 flex items-center gap-1 mt-4">
                  <div class="w-4 h-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QkbQFKfJJL.png)] bg-cover"></div>
                  <span class="text-xs font-medium text-[#197852]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto text-center mt-[84px] relative">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-white/20"></div>
        <img src="https://i.imgur.com/ebI9RQk.png" alt="Background" class="w-full h-[1320px] object-cover">
      </div>
      <div class="relative z-10">
        <h2 class="text-[31px] font-normal">Our Newsletter</h2>
        <h3 class="text-[40px] font-semibold mt-6">Subscribe to Our Newsletter to</h3>
        <div class="text-[48px] font-semibold">
          <span>Get </span>
          <span class="text-[#1a7554]">Updates on Our Latest Offers</span>
        </div>
        <p class="text-xl mt-6">Get 25% off on your first order just by subscribing to our newsletter</p>

        <div class="flex justify-center mt-[65px]">
          <div class="w-[485px] h-[72px] bg-white rounded-[45px] flex items-center px-8 mr-4">
            <span class="text-xl font-medium text-black/40">Enter Email Address</span>
          </div>
          <button class="w-[211px] h-[72px] bg-[#ffc300] rounded-[41px] flex items-center justify-center">
            <span class="text-xl font-medium">Subscribe</span>
          </button>
        </div>
      </div>
    </div>

    <footer class="bg-[#197852] rounded-[20px] mt-[194px] mx-7 p-20 z-10 relative">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <div class="flex items-start">
            <div
              class="w-[70px] h-[70px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/vzKAJUsRg0.png)] bg-cover rounded-full">
            </div>
            <span class="text-[28px] font-normal text-white ml-4 mt-2">FRUTERAA.</span>
          </div>
          <div class="flex flex-col mt-[84px] ml-[-220px]">
            <p class="text-[20px] font-medium text-white mr-[40px]">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div class="flex gap-4 mt-6">
              <div v-for="(social, index) in socialMedia" :key="index" class="group relative">
                <div
                  class="w-[27px] h-[27px] rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:w-[35px] group-hover:h-[35px]"
                  :class="`group-hover:bg-[${social.color}]`">
                  <a href="#"><i :class="`${social.icon} text-[20px] text-black group-hover:text-white`"></i></a>
                </div>
                <span
                  class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  {{ social.name }}
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-8">
            <div v-for="(column, index) in footerLinks" :key="index" class="flex flex-col">
              <h4 class="text-xl font-semibold text-white">{{ column.title }}</h4>
              <ul class="mt-4 space-y-3">
                <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                  <a href="#" class="text-base text-white hover:underline">{{ link }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-white/20 mt-16 pt-8">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-xl font-medium text-white">Copyright</span>
              <div
                class="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/c3KiHKvq1q.png)] bg-cover ml-2">
              </div>
              <span class="text-xl font-medium ml-2">
                <span>2025 </span>
                <span class="text-[#ffc300]">FAYHANZ FRUTERAA Website</span>
                <span>. All Rights Reserved.</span>
              </span>
            </div>
            <div class="flex items-center gap-8">
              <div class="flex items-center gap-4">
                <span class="text-lg font-medium text-white">English</span>
                <div
                  class="w-[30px] h-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QzwsXv24Jj.png)] bg-cover">
                </div>
              </div>
              <div class="h-[29px] w-px bg-white/20"></div>
              <div class="flex items-center gap-4">
                <span class="text-lg font-medium text-white">USD</span>
                <div
                  class="w-[30px] h-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/2S9oLmMmLz.png)] bg-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

 </div>
</template>
<script setup>
import { ref } from 'vue';

const isCategoryOpen = ref(false);
const recentItems = ref([]);

recentItems.value = [
  { id: 1, name: "Organic Apple", price: "$2.99/kg", image: "https://i.pinimg.com/736x/6f/7b/0b/6f7b0bbf2a84909bbb19cad4fcedb294.jpg" },
  { id: 2, name: "Fresh Avocado", price: "$4.50/pcs", image: "https://i.pinimg.com/736x/42/c4/35/42c43502869c7f686466775f1ddbb736.jpg" }
];

const toggleCategory = () => {
  isCategoryOpen.value = !isCategoryOpen.value;
};

const viewProduct = (id) => {
  console.log(`Viewing product ${id}`);
};

const viewAllHistory = () => {
  console.log("View all history clicked");
};

const navigateToProducts = () => {
  console.log("Navigating to products");
};

const socialMedia = [
  { icon: 'fab fa-instagram', name: 'Instagram', color: '#E1306C' },
  { icon: 'fab fa-facebook-f', name: 'Facebook', color: '#1877F2' },
  { icon: 'fab fa-youtube', name: 'YouTube', color: '#FF0000' },
  { icon: 'fab fa-twitter', name: 'Twitter', color: '#1DA1F2' }
]

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Blog', 'Career', 'Contact Us']
  },
  {
    title: 'Customer Services',
    links: ['My Account', 'Track Your Order', 'Return', 'FAQ']
  },
  {
    title: 'Our Information',
    links: ['Privacy', 'User Terms & Condition', 'Return Policy']
  },
  {
    title: 'Contact Info',
    links: [
      '+62-815-1472-0062',
      'fruteraa@gmail.com',
      'Jl. Cisadane N1. No 16, Cikarang, kota Bekasi'
    ]
  }
]
</script>
<style scoped>
.nav-link {
  transition: opacity 0.3s ease;
}

.nav-link span {
  transition: width 0.3s ease;
}

.group-hover\:translate-y-0 {
  transition: all 0.3s ease;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  height: 0;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.full-page-container {
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.group:hover .group-hover\:bg-\[\#E1306C\] {
  background-color: #E1306C;
}

.group:hover .group-hover\:bg-\[\#1877F2\] {
  background-color: #1877F2;
}

.group:hover .group-hover\:bg-\[\#FF0000\] {
  background-color: #FF0000;
}

.group:hover .group-hover\:bg-\[\#1DA1F2\] {
  background-color: #1DA1F2;
}

</style>
