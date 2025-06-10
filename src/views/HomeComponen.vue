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
              <a href="#"
                class="nav-link text-[18px] font-medium text-white opacity-100 hover:opacity-100 transition-opacity duration-300 relative group"
                data-target="home">
                Home
                <span
                  class="absolute bottom-[-10px] left-0 w-full h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/shop"
                class="nav-link text-[18px] font-medium text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative group"
                data-target="shop">
                Shop
                <span
                  class="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
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
              <span
                class="text-[18px] font-medium text-[#E6A175] group-hover:text-white transition-colors duration-300">
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

    <section class="w-full h-[722px] bg-white relative">
      <div data-aos="fade-up" data-aos-duration="800"
        class="absolute top-[70px] left-[120px] w-[35px] h-[35px] bg-[#E8F5FE] rounded-full flex items-center justify-center">
        <img src="https://i.imgur.com/8htfrA1.png" alt="Shopping Bag Icon" class="w-[24px] h-[24px] object-contain">
      </div>

      <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
        class="absolute top-[77px] left-[167px] text-[16px] font-medium">
        The Best Online Grocery Store
      </h2>

      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-out-back"
        class="absolute top-[133px] left-[120px] text-[48px] font-semibold leading-tight">
        Your One-Stop Shop<br>
        for <span class="text-[#197852]">Quality Groceries</span>
      </h1>

      <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
        class="absolute top-[275px] left-[120px] text-[20px] font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
        sed do eiusmod tempor incididunt ut labore et dolore.
      </p>

      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400"
        class="absolute top-[390px] left-[120px] flex gap-4">
        <button class="w-[190px] h-[60px] bg-[#197852] rounded-full flex items-center justify-center gap-2 group">
          <span class="text-[16px] font-semibold text-white">Shop Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <a href="">
          <p class="text-black px-6 py-4 rounded-md font-medium text-[16px] underline">
            View All Products
          </p>
        </a>
      </div>

      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"
        class="absolute top-[495px] left-[120px] flex items-end">
        <div class="flex flex-row">

          <div v-for="(avatar, index) in [
            { img: 'https://i.pinimg.com/736x/d5/f2/0e/d5f20ebf66f702bf5538e0967a42f7fb.jpg', name: 'Sarah' },
            { img: 'https://i.pinimg.com/736x/cf/d4/13/cfd413c84851920d5dbc820610176e41.jpg', name: 'John' },
            { img: 'https://i.pinimg.com/736x/5c/2c/71/5c2c71a48d6d1a166c529c2c9d2c7348.jpg', name: 'Roshida John' },
            { img: 'https://i.pinimg.com/736x/ca/82/1f/ca821ff208476fdad21bc3f3b0f6a6cc.jpg', name: 'Michael' },
            { img: 'https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg', name: 'Affan Muhammad' }
          ]" :key="index" class="relative group transition-all duration-300 ease-in-out flex flex-col items-center"
            :style="{ 'margin-left': index > 0 ? '-20px' : '0', 'z-index': 5 - index }" data-aos="fade-up"
            :data-aos-delay="500 + (index * 100)">

            <div
              class="w-[60px] h-[60px] rounded-full border-2 border-white overflow-hidden
                  group-hover:w-[80px] group-hover:h-[80px] group-hover:ml-[10px] group-hover:mr-[10px] transition-all duration-300 ease-in-out">
              <img :src="avatar.img" :alt="avatar.name" class="w-full h-full object-cover">
            </div>
            <div
              class="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <span class="bg-[#197852] text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap block">
                {{ avatar.name }}
              </span>
              <div
                class="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-500 mx-auto">
              </div>
            </div>
          </div>
        </div>
        <div class="ml-[28px]">
          <p class="text-[20px] font-semibold text-black">4.8 Ratings+</p>
          <p class="text-[16px] font-normal text-black mt-[6px]">Trusted by 75k+ Customers</p>
        </div>
      </div>
      <div class="absolute top-[52px] right-[52px] w-[1158px] h-[670px] overflow-hidden">
        <img src="https://i.imgur.com/IHCCxr9.png" alt="Grocery Products" height="670" width="1158"
          class="object-cover">
      </div>

      <!-- Kotak Pertama - Secure Payment -->
      <div data-aos="slide-left" data-aos-duration="1200" class="absolute right-[160px] top-[313px] w-[191px] h-[48px] bg-white rounded-[50px]
            shadow-[8px_8px_4px_rgba(0,0,0,0.5)] flex items-center
            transition-all duration-300 ease-in-out
            hover:shadow-[8px_8px_4px_rgba(25,120,82,0.7)] hover:scale-105">
        <div class="w-[42px] h-[42px] bg-[#197852] rounded-full ml-[3px] my-[3px] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
            <path d="M3 5v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"></path>
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
          </svg>
        </div>
        <span class="text-[16px] text-center flex items-center font-medium ml-[7px] mr-[7px]">Secure Payment</span>
      </div>

      <!-- Kotak Kedua - Fast Delivery -->
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="500" class="absolute right-[451px] bottom-[123px] w-[163px] h-[48px] bg-white rounded-[50px]
            shadow-[8px_8px_4px_rgba(0,0,0,0.5)] flex items-center
            transition-all duration-300 ease-in-out
            hover:shadow-[8px_8px_4px_rgba(25,120,82,0.7)] hover:scale-105">
        <div class="w-[42px] h-[42px] bg-[#197852] rounded-full ml-[3px] my-[3px] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3H1V16H16V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 8H20L23 11V16H16V8Z" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <span class="text-[16px] font-medium ml-[6px] mr-[7px]">Fast Delivery</span>
      </div>
    </section>

    <section class="flex flex-col items-center h-[500px]">
      <h2 class="text-[20px] font-medium mt-[50px] text-center">Categories</h2>
      <h1 class="text-[48px] font-medium mt-[17px] text-center">Featured <span class="text-[#197852]">Categories</span>
      </h1>
      <div class="w-full mt-[48px] px-[48px] relative">
        <div class="overflow-x-auto whitespace-nowrap pb-4 hide-scrollbar" id="categories-scroll-container">
          <div class="inline-flex gap-[42px]" id="categories-scroll-content">
            <div v-for="(cat, index) in categories" :key="index"
              class="flex flex-col items-center w-[240px] p-4 pt-4 group transition-all duration-300 hover:scale-85 rounded-xl relative">
              <div
                class="absolute inset-[4px] border-2 border-transparent group-hover:border-[#197852] rounded-xl pointer-events-none transition-all duration-300">
              </div>
              <div class="rounded-full overflow-hidden flex items-center justify-center w-[200px] h-[200px]">
                <img :src="cat.image" :alt="cat.name"
                  class="object-cover w-[200px] h-[200px] transition-all duration-300 group-hover:brightness-95" />
              </div>
              <h3
                class="text-[24px] font-semibold mt-[13px] capitalize text-center leading-tight group-hover:text-[28px] w-full px-2">
                {{ cat.name }}
              </h3>
              <p class="text-[16px] mt-1 transition-all duration-300 group-hover:text-[18px] leading-snug">
                {{ cat.productCount }} Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <!-- Kotak Pertama (Kiri) - Biru -->
      <div
        class="absolute left-[120px] w-[627px] h-[400px] bg-blue-50 rounded-2xl p-12 flex transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div class="flex-1 flex flex-col">
          <!-- Badge dengan animasi bounce -->
          <div
            class="absolute top-[35px] left-[35px] w-fit px-6 py-3 bg-amber-400 rounded-full flex items-center justify-center animate-bounce">
            <span class="text-xl font-semibold uppercase tracking-wide text-[#fff]">
              Flat 20% Discount
            </span>
          </div>
          <div class="mt-[55px]">
            <h2
              class="text-4xl font-medium leading-tight mb-3 transform transition-all duration-300 hover:translate-x-2">
              Purely Fresh<br />
              Vegetables
            </h2>
            <p
              class="text-base font-normal mb-6 max-w-[90%] text-gray-600 transform transition-all duration-300 hover:translate-x-2">
              Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit
            </p>
            <button
              class="w-[190px] h-[60px] mt-[59px] bg-green-700 rounded-full flex items-center justify-center gap-2 text-white hover:bg-green-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              aria-label="Shop Now with 20% discount">
              <span class="text-lg font-semibold capitalize">Shop Now</span>
              <svg class="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="absolute top-[69px] right-[20px] w-[263px] h-[263px] transform transition-all duration-500 hover:scale-110 hover:rotate-6">
          <img src="https://i.imgur.com/36SPH1t.png" alt="Fresh Vegetables"
            class="w-full h-full object-contain animate-float" loading="lazy">
        </div>
      </div>

      <!-- Kotak Kedua (Kanan) - Kuning -->
      <div
        class="absolute right-[120px] w-[627px] h-[400px] bg-[#F9C51A] rounded-2xl p-12 flex transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div class="flex-1 flex flex-col">
          <!-- Badge dengan animasi bounce yang sama -->
          <div
            class="absolute top-[35px] left-[35px] w-fit px-6 py-3 bg-white rounded-full flex items-center justify-center animate-bounce">
            <span class="text-xl font-semibold uppercase tracking-wide text-gray-800">
              Flat 20% Discount
            </span>
          </div>
          <div class="mt-[55px]">
            <h2
              class="text-4xl font-medium leading-tight mb-3 transform transition-all duration-300 hover:translate-x-2">
              Fresh Fruits, <br>
              Pure Quality
            </h2>
            <p
              class="text-base font-normal mb-6 max-w-[90%] text-gray-700 transform transition-all duration-300 hover:translate-x-2">
              Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit
            </p>
            <button
              class="w-[190px] h-[60px] mt-[59px] bg-green-700 rounded-full flex items-center justify-center gap-2 text-white hover:bg-green-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              aria-label="Shop Now with 20% discount">
              <span class="text-lg font-semibold capitalize">Shop Now</span>
              <svg class="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="absolute top-[69px] right-[20px] w-[263px] h-[263px] transform transition-all duration-500 hover:scale-110 hover:-rotate-6">
          <img src="https://i.imgur.com/JqDb0DC.png" alt="Fresh Fruits"
            class="w-full h-full object-contain animate-float-delay" loading="lazy">
        </div>
      </div>
    </section>

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

const categories = [
  {
    name: 'Vegetables',
    image: 'https://i.imgur.com/iba4eZV.png',
    productCount: 52,
  },
  {
    name: 'Snacks & Sweets',
    image: 'https://i.imgur.com/XvOTupx.png',
    productCount: 52,
  },
  {
    name: 'Fresh Fruits',
    image: 'https://i.imgur.com/BhsgGX8.png',
    productCount: 48,
  },
  {
    name: 'Milk & Eggs',
    image: 'https://i.imgur.com/KX9nH0C.png',
    productCount: 12,
  },
  {
    name: 'Bakery',
    image: 'https://i.imgur.com/GhUsTfJ.png',
    productCount: 62,
  },
  {
    name: 'Dry Fruits',
    image: 'https://i.imgur.com/HUqVTTU.png',
    productCount: 52,
  },
  {
    name: 'Salads',
    image: 'https://i.imgur.com/DsGhp0h.png',
    productCount: 30,
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('categories-scroll-container');
  const content = document.getElementById('categories-scroll-content');

  if (container && content) {
    let scrollAmount = 0;
    const scrollSpeed = 1;
    // const scrollDelay = 20;
    let isScrolling = true;
    let animationId;
    let isHovered = false;

    function autoScroll() {
      if (!isScrolling || isHovered) {
        cancelAnimationFrame(animationId);
        return;
      }

      scrollAmount += scrollSpeed;

      if (scrollAmount >= content.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }

      container.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(autoScroll);
    }

    container.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    container.addEventListener('mouseleave', () => {
      isHovered = false;
      animationId = requestAnimationFrame(autoScroll);
    });

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }
});
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

[data-aos] {
  transition-property: transform, opacity;
}

/* Optional: Jika ingin animasi lebih halus saat scroll */
html {
  scroll-behavior: smooth;
}

[data-aos] {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
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

body {
  overflow: hidden;
}

section {
  width: 100%;
  position: relative;
}

header {
  height: 365px;
}

section:nth-of-type(1) {
  height: 722px;
}

section:nth-of-type(2) {
  height: 500px;
}

section:nth-of-type(3) {
  height: 500px;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-delay {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 3s ease-in-out infinite 0.5s;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
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
