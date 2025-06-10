<template>
  <div class="min-h-screen bg-green-50">
    <!-- Header with Vegetable Theme -->
    <header class="bg-green-600 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h1 class="text-xl font-semibold text-white">Frutera</h1>
        </div>
        <div class="flex items-center space-x-4">
          <button class="p-2 rounded-full hover:bg-green-700 relative" @click="toggleNotifications">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span v-if="unreadNotifications > 0" class="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              {{ unreadNotifications }}
            </span>
          </button>
          <div class="relative">
            <button @click="toggleProfileDropdown" class="flex items-center space-x-2 focus:outline-none">
              <img class="h-8 w-8 rounded-full border-2 border-white" :src="user.avatar" alt="Profile">
              <span class="text-sm font-medium text-white">{{ user.firstName }} {{ user.lastName }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div v-if="profileDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
              <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50" @click="profileDropdownOpen = false">Your Profile</router-link>
              <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50" @click="profileDropdownOpen = false">Settings</router-link>
              <button @click="logout" class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Notification Panel -->
    <transition name="fade">
      <div v-if="showNotifications" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeNotifications">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="w-full">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Notifications
                      <span v-if="unreadNotifications > 0" class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {{ unreadNotifications }} new
                      </span>
                    </h3>
                    <div class="flex items-center">
                      <button @click="markAllAsRead" class="text-sm text-green-600 hover:text-green-800 mr-4">
                        Mark all as read
                      </button>
                      <button @click="closeNotifications" class="text-gray-400 hover:text-gray-500">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="divide-y divide-gray-200 max-h-96 overflow-y-auto notification-scroll-container">
                    <div v-for="(notification, index) in sortedNotifications" :key="index"
                         @click="handleNotificationClick(notification)"
                         class="py-3 px-2 hover:bg-green-50 cursor-pointer transition-colors duration-150"
                         :class="{'bg-green-100': notification.highlighted}">
                      <div class="flex items-start">
                        <div class="flex-shrink-0 relative">
                          <span :class="[
                            'h-8 w-8 rounded-full flex items-center justify-center',
                            notification.read ? 'bg-gray-200' : 'bg-green-100'
                          ]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="notification.read ? 'text-gray-600' : 'text-green-600'" viewBox="0 0 20 20" fill="currentColor">
                              <path v-if="notification.type === 'message'" fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              <path v-else-if="notification.type === 'order'" fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                              <path v-else fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                            </svg>
                          </span>
                          <span v-if="!notification.read" class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                        </div>
                        <div class="ml-3 flex-1">
                          <div class="flex justify-between">
                            <p class="text-sm font-medium" :class="notification.read ? 'text-gray-900' : 'text-green-800'">
                              {{ notification.title }}
                            </p>
                            <span class="text-xs text-gray-500">
                              {{ formatRelativeTime(notification.timestamp) }}
                            </span>
                          </div>
                          <p class="mt-1 text-sm" :class="notification.read ? 'text-gray-500' : 'text-gray-700'">
                            {{ notification.message }}
                          </p>
                          <div v-if="notification.actions" class="mt-2 flex space-x-3">
                            <button v-for="(action, actionIndex) in notification.actions" :key="actionIndex"
                                    @click.stop="handleNotificationAction(notification, action)"
                                    class="text-xs px-2 py-1 rounded border border-gray-300 text-gray-700 hover:bg-green-50">
                              {{ action.label }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div v-if="notifications.length === 0" class="py-4 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <p class="mt-2 text-sm text-gray-500">No notifications yet</p>
                      <p class="mt-1 text-xs text-gray-400">We'll notify you when something arrives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" @click="clearAllNotifications" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Left Sidebar - Vegetable Themed -->
        <div class="w-full lg:w-1/4">
          <div class="bg-white rounded-lg shadow overflow-hidden border border-green-100">
            <!-- Profile Card with Vegetable Background -->
            <div class="p-6 bg-gradient-to-br from-green-50 to-green-100">
              <div class="flex flex-col items-center">
                <div class="relative mb-4">
                  <img class="h-24 w-24 rounded-full border-4 border-white shadow-md" :src="user.avatar" alt="Profile">
                  <button @click="showAvatarUpload = true" class="absolute bottom-0 right-0 bg-green-600 rounded-full p-1 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
                <h2 class="text-lg font-semibold text-gray-900">{{ user.firstName }} {{ user.lastName }}</h2>
                <p class="text-sm text-green-700">{{ user.membership }}</p>
                <div class="mt-2">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {{ user.role }}
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-green-700">Profile Completion</span>
                  <span class="text-sm font-medium text-green-600">{{ profileCompletion }}%</span>
                </div>
                <div class="w-full bg-green-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" :style="`width: ${profileCompletion}%`"></div>
              </div>

              <div class="mt-6 space-y-3">
                <button @click="activeTab = 'edit'" :class="{'bg-green-600 text-white': activeTab === 'edit', 'bg-white text-gray-700 border border-green-300': activeTab !== 'edit'}" class="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium hover:bg-green-700 hover:text-white transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" :class="activeTab === 'edit' ? 'text-white' : 'text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                  Edit Profile
                </button>
                <button @click="activeTab = 'password'" :class="{'bg-green-600 text-white': activeTab === 'password', 'bg-white text-gray-700 border border-green-300': activeTab !== 'password'}" class="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium hover:bg-green-700 hover:text-white transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" :class="activeTab === 'password' ? 'text-white' : 'text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                  Change Password
                </button>
              </div>
            </div>

            <!-- Navigation with Vegetable Icons -->
            <div class="border-t border-green-200">
              <nav class="space-y-1 p-4">
                <router-link to="/dashboard" class="flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-200" :class="activeTab === 'dashboard' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-green-50'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" :class="activeTab === 'dashboard' ? 'text-green-500' : 'text-green-400 group-hover:text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Dashboard
                </router-link>
                <router-link to="/profile" class="flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-200" :class="activeTab === 'profile' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-green-50'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" :class="activeTab === 'profile' ? 'text-green-500' : 'text-green-400 group-hover:text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                  Profile
                </router-link>
                <router-link to="/orders" class="flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-200" :class="activeTab === 'orders' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-green-50'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" :class="activeTab === 'orders' ? 'text-green-500' : 'text-green-400 group-hover:text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                  </svg>
                  My Orders
                </router-link>
                <router-link to="/messages" class="flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-200" :class="activeTab === 'messages' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-green-50'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" :class="activeTab === 'messages' ? 'text-green-500' : 'text-green-400 group-hover:text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                  </svg>
                  Messages
                  <span v-if="unreadMessages > 0" class="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {{ unreadMessages }}
                  </span>
                </router-link>
                <router-link to="/help" class="flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors duration-200" :class="activeTab === 'help' ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-green-50'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" :class="activeTab === 'help' ? 'text-green-500' : 'text-green-400 group-hover:text-green-500'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                  </svg>
                  Help
                </router-link>
              </nav>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="w-full lg:w-3/4 space-y-6">
          <!-- Edit Profile Tab -->
          <div v-if="activeTab === 'edit'" class="bg-white shadow rounded-lg overflow-hidden border border-green-100">
            <!-- Profile Details with Vegetable Header -->
            <div class="px-6 py-4 border-b border-green-200 bg-green-50">
              <h3 class="text-lg font-medium leading-6 text-green-800">Profile Information</h3>
              <p class="mt-1 text-sm text-green-600">Update your account's profile information and email address.</p>
            </div>

            <div class="px-6 py-4">
              <form @submit.prevent="saveProfile">
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                    <div class="mt-1">
                      <input type="text" v-model="user.firstName" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border" required>
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <div class="mt-1">
                      <input type="text" v-model="user.lastName" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border" required>
                    </div>
                  </div>

                  <div class="sm:col-span-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                    <div class="mt-1">
                      <input id="email" v-model="user.email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border" required>
                    </div>
                  </div>

                  <div class="sm:col-span-4">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone number</label>
                    <div class="mt-1">
                      <input id="phone" v-model="user.phone" name="phone" type="tel" autocomplete="tel" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border">
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <label for="address" class="block text-sm font-medium text-gray-700">Delivery Address</label>
                    <div class="mt-1">
                      <input type="text" v-model="user.address" id="address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                    <div class="mt-1">
                      <input type="text" v-model="user.city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                    <div class="mt-1">
                      <input type="text" v-model="user.state" id="state" autocomplete="address-level1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                    <div class="mt-1">
                      <input type="text" v-model="user.postalCode" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border">
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                  <button type="button" @click="resetForm" class="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
                    Cancel
                  </button>
                  <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
                    <span v-if="isSaving">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                    <span v-else>Save</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Change Password Tab -->
          <div v-if="activeTab === 'password'" class="bg-white shadow rounded-lg overflow-hidden border border-green-100">
            <div class="px-6 py-4 border-b border-green-200 bg-green-50">
              <h3 class="text-lg font-medium leading-6 text-green-800">Change Password</h3>
              <p class="mt-1 text-sm text-green-600">Ensure your account is using a long, random password to stay secure.</p>
            </div>

            <div class="px-6 py-4">
              <form @submit.prevent="changePassword">
                <div class="space-y-6">
                  <div>
                    <label for="current-password" class="block text-sm font-medium text-gray-700">Current Password</label>
                    <div class="mt-1 relative">
                      <input id="current-password" v-model="password.current" name="current-password" :type="showPassword.current ? 'text' : 'password'" autocomplete="current-password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border" required>
                      <button type="button" @click="togglePasswordVisibility('current')" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label for="new-password" class="block text-sm font-medium text-gray-700">New Password</label>
                    <div class="mt-1 relative">
                      <input id="new-password" v-model="password.new" name="new-password" :type="showPassword.new ? 'text' : 'password'" autocomplete="new-password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border" required>
                      <button type="button" @click="togglePasswordVisibility('new')" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                    <p class="mt-2 text-xs text-gray-500">
                      Password must be at least 8 characters long and contain at least one number and one special character.
                    </p>
                  </div>

                  <div>
                    <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div class="mt-1 relative">
                      <input id="confirm-password" v-model="password.confirm" name="confirm-password" :type="showPassword.confirm ? 'text' : 'password'" autocomplete="new-password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border" required>
                      <button type="button" @click="togglePasswordVisibility('confirm')" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                  <button type="button" @click="activeTab = 'edit'" class="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
                    Back
                  </button>
                  <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
                    <span v-if="isChangingPassword">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </span>
                    <span v-else>Update Password</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- Close flex flex-col lg:flex-row gap-6 -->
    </main>

    <!-- Avatar Upload Modal with Vegetable Theme -->
    <transition name="fade">
      <div v-if="showAvatarUpload" class="fixed inset-0 z-50 overflow-y-auto" @click.self="showAvatarUpload = false">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
            <div>
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg leading-6 font-medium text-green-800">Change Profile Picture</h3>
                <button @click="showAvatarUpload = false" class="text-gray-400 hover:text-gray-500">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="text-center">
                <div class="mx-auto flex items-center justify-center h-48 w-48 rounded-full bg-green-100 overflow-hidden mb-4 border-4 border-green-200">
                  <img v-if="avatarPreview" :src="avatarPreview" alt="Preview" class="h-full w-full object-cover">
                  <svg v-else class="h-24 w-24 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div class="flex justify-center">
                  <div class="relative">
                    <input type="file" ref="avatarInput" @change="handleAvatarChange" accept="image/*" class="hidden">
                    <button @click="$refs.avatarInput.click()" class="inline-flex items-center px-4 py-2 border border-green-300 shadow-sm text-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Choose Photo
                    </button>
                  </div>
                </div>
                <p class="mt-2 text-xs text-gray-500">JPG, GIF or PNG. Max size of 2MB</p>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button type="button" @click="uploadAvatar" :disabled="!avatarFile" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed">
                Upload
              </button>
              <button type="button" @click="showAvatarUpload = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm transition-colors duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Success Notification with Green Theme -->
    <transition name="slide-up">
      <div v-if="showSuccessNotification" class="fixed bottom-4 right-4 z-50">
        <div class="rounded-md bg-green-50 p-4 shadow-lg border border-green-100">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">
                {{ successMessage }}
              </p>
            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button @click="showSuccessNotification = false" class="inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Error Notification -->
    <transition name="slide-up">
      <div v-if="showErrorNotification" class="fixed bottom-4 right-4 z-50">
        <div class="rounded-md bg-red-50 p-4 shadow-lg border border-red-100">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">
                {{ errorMessage }}
              </p>
            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button @click="showErrorNotification = false" class="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      activeTab: 'edit',
      profileDropdownOpen: false,
      showNotifications: false,
      showAvatarUpload: false,
      avatarFile: null,
      avatarPreview: null,
      isSaving: false,
      isChangingPassword: false,
      showPassword: {
        current: false,
        new: false,
        confirm: false
      },
      showSuccessNotification: false,
      showErrorNotification: false,
      successMessage: '',
      errorMessage: '',
      originalUser: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        membership: 'Premium Member',
        role: 'Pembeli',
        preferences: ['organic', 'local']
      },
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        membership: 'Premium Member',
        role: 'Pembeli',
        preferences: ['organic', 'local']
      },
      password: {
        current: '',
        new: '',
        confirm: ''
      },
      notifications: [
        {
          id: 1,
          title: 'New message',
          message: 'Your order of organic carrots has been shipped',
          timestamp: new Date(Date.now() - 3600000),
          read: false,
          type: 'message',
          actions: [
            { label: 'Reply', action: 'reply' },
            { label: 'View', action: 'view' }
          ]
        },
        {
          id: 2,
          title: 'Order update',
          message: 'Your subscription payment has been processed',
          timestamp: new Date(Date.now() - 86400000),
          read: true,
          type: 'order'
        },
        {
          id: 3,
          title: 'Farm update',
          message: 'New seasonal vegetables have been added to the market',
          timestamp: new Date(Date.now() - 172800000),
          read: true,
          type: 'system'
        }
      ],
      unreadMessages: 3
    }
  },
  computed: {
    profileCompletion() {
      let completedFields = 0;
      const fieldsToCheck = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'postalCode', 'preferences'];

      fieldsToCheck.forEach(field => {
        if (Array.isArray(this.user[field])) {
          if (this.user[field].length > 0) completedFields++;
        } else if (this.user[field] && this.user[field].trim() !== '') {
          completedFields++;
        }
      });

      return Math.round((completedFields / fieldsToCheck.length) * 100);
    },
    unreadNotifications() {
      return this.notifications.filter(n => !n.read).length;
    },
    sortedNotifications() {
      return [...this.notifications].sort((a, b) => {
        // Sort by unread first, then by timestamp
        if (!a.read && b.read) return -1;
        if (a.read && !b.read) return 1;
        return b.timestamp - a.timestamp;
      });
    }
  },
  methods: {
    toggleProfileDropdown() {
      this.profileDropdownOpen = !this.profileDropdownOpen;
    },
    closeProfileDropdown() {
      this.profileDropdownOpen = false;
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
      // Mark all as read when opened
      if (this.showNotifications) {
        this.notifications.forEach(n => n.read = true);
      }
    },
    closeNotifications() {
      this.showNotifications = false;
    },
    markAllAsRead() {
      this.notifications.forEach(n => n.read = true);
    },
    clearAllNotifications() {
      this.notifications = [];
      this.closeNotifications();
    },
    handleNotificationClick(notification) {
      notification.read = true;
      notification.highlighted = true;
      setTimeout(() => {
        notification.highlighted = false;
      }, 500);

      this.closeNotifications();

      // Navigation based on notification type
      switch(notification.type) {
        case 'message':
          this.$router.push('/messages');
          break;
        case 'order':
          this.$router.push('/orders');
          break;
        case 'system':
          this.$router.push('/updates');
          break;
        default:
          break;
      }
    },
    handleNotificationAction(notification, action) {
      notification.read = true;
      switch(action.action) {
        case 'reply':
          this.$router.push('/messages/compose');
          break;
        case 'view':
          this.handleNotificationClick(notification);
          break;
        default:
          break;
      }
      this.closeNotifications();
    },
    handleAvatarChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      // Validate file
      if (file.size > 2 * 1024 * 1024) {
        this.showError('File size should be less than 2MB');
        return;
      }

      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        this.showError('Only JPG, PNG, and GIF files are allowed');
        return;
      }

      this.avatarFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadAvatar() {
      if (!this.avatarFile) return;

      this.isSaving = true;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.user.avatar = e.target.result;
        this.originalUser.avatar = e.target.result;
        this.showAvatarUpload = false;
        this.avatarFile = null;
        this.avatarPreview = null;
        this.isSaving = false;
        this.showSuccess('Profile picture updated successfully');
      };
      reader.onerror = () => {
        this.isSaving = false;
        this.showError('Error uploading image');
      };
      reader.readAsDataURL(this.avatarFile);
    },
    saveProfile() {
      this.isSaving = true;

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.user.email)) {
        this.isSaving = false;
        this.showError('Please enter a valid email address');
        return;
      }

      // Simulate API call
      setTimeout(() => {
        this.originalUser = JSON.parse(JSON.stringify(this.user));
        this.isSaving = false;
        this.showSuccess('Profile updated successfully');
      }, 1500);
    },
    resetForm() {
      this.user = JSON.parse(JSON.stringify(this.originalUser));
    },
    changePassword() {
      // Validate password
      if (!this.password.current) {
        this.showError('Please enter your current password');
        return;
      }

      if (this.password.new.length < 8) {
        this.showError('Password must be at least 8 characters long');
        return;
      }

      const hasNumber = /\d/.test(this.password.new);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.password.new);
      if (!hasNumber || !hasSpecialChar) {
        this.showError('Password must contain at least one number and one special character');
        return;
      }

      if (this.password.new !== this.password.confirm) {
        this.showError('New passwords do not match');
        return;
      }

      this.isChangingPassword = true;

      // Simulate API call
      setTimeout(() => {
        this.isChangingPassword = false;
        this.password = { current: '', new: '', confirm: '' };
        this.showSuccess('Password changed successfully');
      }, 1500);
    },
    togglePasswordVisibility(field) {
      this.showPassword[field] = !this.showPassword[field];
    },
    formatRelativeTime(date) {
      const now = new Date();
      const diff = now - date;

      const minute = 60 * 1000;
      const hour = 60 * minute;
      const day = 24 * hour;

      if (diff < minute) {
        return 'just now';
      } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} min ago`;
      } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else {
        const days = Math.floor(diff / day);
        return `${days} day${days > 1 ? 's' : ''} ago`;
      }
    },
    showSuccess(message) {
      this.successMessage = message;
      this.showSuccessNotification = true;
      setTimeout(() => {
        this.showSuccessNotification = false;
      }, 5000);
    },
    showError(message) {
      this.errorMessage = message;
      this.showErrorNotification = true;
      setTimeout(() => {
        this.showErrorNotification = false;
      }, 5000);
    },
    logout() {
      // Implement actual logout logic
      console.log('Logging out...');
      this.profileDropdownOpen = false;
      this.$router.push('/login');
    },
    handleClickOutside(event) {
      if (this.profileDropdownOpen && !this.$el.contains(event.target)) {
        this.profileDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* Custom scrollbar for notifications */
.notification-scroll-container::-webkit-scrollbar {
  width: 8px;
}
.notification-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.notification-scroll-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.notification-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Loading spinner animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

/* Focus styles for accessibility */
button:focus, input:focus, textarea:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.5);
}

/* Smooth transitions for interactive elements */
button, a, input, textarea, select {
  transition: all 0.2s ease;
}

/* Custom checkbox styling for multiple select */
select[multiple] option:checked {
  background-color: #d1fae5;
  color: #065f46;
}
</style>
