<template>
  <div class="shop-page">
    <!-- Top Bar -->
    <div class="top-bar">
      <span class="phone-number">Call Us : +123-456-789</span>
      <div class="promo-text">
        <span>Sign up and GET 25% OFF for your first order. </span>
        <span class="sign-up-link">Sign up now</span>
      </div>
      <div class="social-icons">
        <div class="social-icon" v-for="(icon, index) in socialIcons" :key="index" :style="{ backgroundImage: `url(${icon})` }"></div>
      </div>
    </div>

    <!-- Header -->
    <header class="main-header">
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon"></div>
          <span class="logo-text">FAYHANZ.</span>
        </div>

        <div class="search-bar">
          <div class="search-container">
            <span class="filter-text">Filter</span>
            <span class="search-placeholder">Search for products...</span>
            <div class="search-icon"></div>
            <div class="divider"></div>
            <div class="voice-icon"></div>
          </div>
        </div>

        <div class="header-icons">
          <div class="header-icon" v-for="(icon, index) in headerIcons" :key="index">
            <div :style="{ backgroundImage: `url(${icon})` }"></div>
          </div>
        </div>
      </div>

      <div class="location">
        <div class="location-icon"></div>
        <span class="location-text">New York, USA</span>
        <div class="dropdown-icon"></div>
      </div>

      <nav class="main-nav">
        <div class="categories-button">
          <div class="categories-icon"></div>
          <span>Browse All Categories</span>
        </div>

        <ul class="nav-links">
          <li v-for="(link, index) in navLinks" :key="index">{{ link }}</li>
        </ul>

        <div class="recently-viewed">
          <span>Recently Viewed</span>
          <div class="recent-icon"></div>
        </div>
      </nav>
    </header>

    <!-- Page Title -->
    <div class="page-title">
      <h1>Shop</h1>
      <div class="breadcrumbs">Home / Shop</div>
    </div>

    <!-- Filter Options -->
    <div class="filter-options">
      <h2>Filter Options</h2>
      <span class="results-count">Showing 1-12 of 2560 results</span>
      <div class="sort-by">
        <span>Sort by :</span>
        <div class="sort-dropdown">
          <span>Default Sorting</span>
          <div class="dropdown-icon"></div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="shop-content">
      <!-- Filters Sidebar -->
      <aside class="filters-sidebar">
        <section class="filter-section">
          <h3>Category</h3>
          <div class="filter-item" v-for="(category, index) in categories" :key="index">
            <input type="checkbox" :id="`category-${index}`">
            <label :for="`category-${index}`">{{ category }}</label>
          </div>
        </section>

        <section class="filter-section">
          <h3>Price</h3>
          <div class="price-range">
            <span>$25.00 - $125.00</span>
            <div class="range-slider"></div>
          </div>
        </section>

        <section class="filter-section">
          <h3>Review</h3>
          <div class="rating-filter" v-for="(rating, index) in ratings" :key="index">
            <div class="stars">
              <div class="star" v-for="star in 5" :key="star"
                   :class="{ 'filled': star <= 5 - index }"></div>
            </div>
            <span>{{ 5 - index }} Star</span>
          </div>
        </section>
      </aside>

      <!-- Product Grid -->
      <div class="product-grid">
        <div class="product-row" v-for="(row, rowIndex) in productRows" :key="rowIndex">
          <product-card
            v-for="(product, productIndex) in row"
            :key="productIndex"
            :product="product"
          />
        </div>
      </div>
    </main>

    <!-- Newsletter -->
    <section class="newsletter">
      <h4>Our Newsletter</h4>
      <h3>Subscribe to Our Newsletter to</h3>
      <h2>Get <span>Updates on Our Latest Offers</span></h2>
      <p>Get 25% off on your first order just by subscribing to our newsletter</p>

      <div class="newsletter-form">
        <input type="email" placeholder="Enter Email Address">
        <button>Subscribe</button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <div class="logo-icon"></div>
          <span class="logo-text">FAYHANZ.</span>
          <p>Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit, sed do eiusmod tempor<br>incididunt ut labore et dolore magna.</p>
          <div class="footer-social-icons">
            <div class="social-icon" v-for="(icon, index) in footerSocialIcons" :key="index"
                 :style="{ backgroundImage: `url(${icon})` }"></div>
          </div>
        </div>

        <div class="footer-links">
          <div class="links-column" v-for="(column, index) in footerLinks" :key="index">
            <h5>{{ column.title }}</h5>
            <ul>
              <li v-for="(link, linkIndex) in column.links" :key="linkIndex">{{ link }}</li>
            </ul>
          </div>

          <div class="contact-info">
            <h5>Contact Info</h5>
            <ul>
              <li>+62-815-1472-0062</li>
              <li>fruteraa@gmail.com</li>
              <li>Jl. Cisadane N1. No 16, Cikarang, kota Bekasi</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <span>Copyright</span>
          <span>2025 <span class="highlight">FAYHANZ FRUTERAA Website</span>. All Rights Reserved.</span>
        </div>

        <div class="language-currency">
          <span>English</span>
          <div class="divider"></div>
          <span>USD</span>
          <div class="language-icon"></div>
          <div class="currency-icon"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const socialIcons = ref([
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/LW8B1doO3h.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/6JzySbzpud.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/LL2p5OZLBV.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/sLZBxsUN4R.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/GynHAgVfzB.png'
    ]);

    const headerIcons = ref([
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/BAK9ShNGxO.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/oPPjhUmdLN.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/AzqkcR6DEm.png'
    ]);

    const navLinks = ref(['Home', 'Shop', 'Fruits', 'Vegetables', 'About Us']);

    const categories = ref(['Vegetables', 'Fresh Fruits', 'Milk & Eggs', 'Bakery', 'Drinks']);

    const ratings = ref([4, 3, 2, 1]);

    const productRows = ref([
      [
        {
          id: 1,
          name: 'Fresh Red Tomatoes',
          category: 'Vegetables',
          weight: '500 g',
          price: '$2.25',
          originalPrice: '$2.50',
          discount: '10% off',
          rating: 4.9,
          image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/e12eacae-b2a8-46ee-820e-f00a09fb86e6.png'
        },
        {
          id: 2,
          name: 'Premium Imported Carrots',
          category: 'Vegetables',
          weight: '1 kg',
          price: '$4.28',
          originalPrice: '$4.50',
          discount: '5% off',
          rating: 4.9,
          image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/17999e7e-8e87-46f2-952f-951f1224261d.png'
        },
        {
          id: 3,
          name: 'Fresh Romaine Lettuce',
          category: 'Vegetables',
          weight: '250 g',
          price: '$1.60',
          originalPrice: '$2.00',
          discount: '20% off',
          rating: 4.9,
          image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/0b893783-9b9e-4f42-9110-2a533b5a9cf8.png'
        }
      ],
      [
        {
          id: 4,
          name: 'UHT Low-Fat Milk',
          category: 'Milk & Eggs',
          weight: '1 Liter (approx. 0.26 US gallons)',
          price: '$1.60',
          originalPrice: '$1.70',
          discount: '10% off',
          rating: 4.9,
          image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/4c39edd7-875e-4d57-bdb2-30cd65b8dc72.png'
        },
        {
          id: 5,
          name: 'Selected Standard Chicken Eggs',
          category: 'Milk & Eggs',
          weight: '600 g',
          price: '$1.62',
          originalPrice: '$1.80',
          discount: '10% off',
          rating: 4.9,
          image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/cbb7f8cf-7d4a-4c46-81f6-de6ac65d7fb6.png'
        },
        {
          id: 6,
          name: 'Premium Omega-3 Chicken Eggs',
          category: 'Milk & Eggs',
          weight: '6 Eggs',
          price: '$1.88',
          originalPrice: '$2.20',
          discount: '15% off',
          rating: 4.9,
          image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/07cdacd4-8487-4f76-9671-3a6ff4eee909.png'
        }
      ],
      // More product rows...
    ]);

    const footerSocialIcons = ref([
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/HYgMAXMa0q.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/q263nmnYuF.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/J9Zar3Q3jB.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/BKY2Jyg2Mh.png',
      'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/09eLpRukeJ.png'
    ]);

    const footerLinks = ref([
      {
        title: 'Company',
        links: ['About Us', 'Blog', 'Contact Us', 'Career']
      },
      {
        title: 'Customer Services',
        links: ['My Account', 'Track Your Order', 'Return', 'FAQ']
      },
      {
        title: 'Our Information',
        links: ['Privacy', 'User Terms & Condition', 'Return Policy']
      }
    ]);

    return {
      socialIcons,
      headerIcons,
      navLinks,
      categories,
      ratings,
      productRows,
      footerSocialIcons,
      footerLinks
    };
  }
};
</script>

<style scoped>
/* Base Styles */
.shop-page {
  width: 1512px;
  height: 4411px;
  background: #fff;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  font-family: 'Poppins', 'Inter', sans-serif;
}

/* Top Bar */
.top-bar {
  width: 100%;
  height: 65px;
  background: #f9c51a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 69px;
}

.phone-number {
  font-size: 18px;
  line-height: 27px;
}

.promo-text {
  font-size: 18px;
  line-height: 27px;
}

.sign-up-link {
  color: #1d805a;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 25px;
  height: 25px;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Header */
.main-header {
  width: 100%;
  height: 225px;
  background: #1c8057;
  position: relative;
}

.header-content {
  width: 1289px;
  height: 80px;
  margin: 28px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 13px;
}

.logo-icon {
  width: 70px;
  height: 70px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/q4PQd6FzHk.png');
  background-size: cover;
  border-radius: 50%;
}

.logo-text {
  font-family: 'Inter';
  font-size: 28px;
  line-height: 33.886px;
  color: #fff;
}

.search-bar {
  width: 679px;
  height: 62px;
}

.search-container {
  width: 100%;
  height: 100%;
  background: #2f9869;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 22px;
  position: relative;
}

.filter-text {
  font-size: 22px;
  line-height: 33px;
  color: #fff;
}

.search-placeholder {
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 42px;
}

.search-icon {
  width: 40px;
  height: 28px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/dLmwgeWEpy.png');
  background-size: cover;
  position: absolute;
  left: 79px;
}

.divider {
  width: 1px;
  height: 26px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/6cXZC6hVaQ.png');
  margin: 0 20px;
}

.voice-icon {
  width: 24px;
  height: 24px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/sk2sbkxW2m.png');
  background-size: cover;
  position: absolute;
  right: 22px;
}

.header-icons {
  display: flex;
  gap: 45px;
}

.header-icon {
  width: 24px;
  height: 24px;
}

.header-icon div {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.location {
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 84px;
  left: 362px;
}

.location-icon {
  width: 24px;
  height: 24px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/95gOhdst3S.png');
  background-size: cover;
}

.location-text {
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
  color: #fff;
}

.dropdown-icon {
  width: 24px;
  height: 24px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/UvAc4EzHvp.png');
  background-size: cover;
}

.main-nav {
  width: 1288px;
  height: 49px;
  margin: 148px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categories-button {
  width: 265px;
  height: 49px;
  background: #ffc300;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 19px;
  gap: 30px;
}

.categories-icon {
  width: 24px;
  height: 24px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/BQGLoPOohE.png');
  background-size: cover;
}

.nav-links {
  display: flex;
  gap: 106px;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #fff;
}

.recently-viewed {
  display: flex;
  align-items: center;
  gap: 24px;
  color: #ffc300;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
}

.recent-icon {
  width: 24px;
  height: 24px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/G0bWkdEtct.png');
  background-size: cover;
}

/* Page Title */
.page-title {
  text-align: center;
  margin-top: 113px;
}

.page-title h1 {
  font-size: 64px;
  font-weight: 600;
  line-height: 96px;
  color: #000;
  margin-bottom: 24px;
}

.breadcrumbs {
  font-size: 36px;
  line-height: 54px;
  color: #000;
}

/* Filter Options */
.filter-options {
  width: 1232px;
  height: 36px;
  margin: 180px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-options h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #000;
}

.results-count {
  font-size: 16px;
  line-height: 24px;
  color: #000;
}

.sort-by {
  display: flex;
  align-items: center;
  gap: 22px;
}

.sort-dropdown {
  width: 175px;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}

.dropdown-icon {
  width: 24px;
  height: 24px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/sgxawncNYk.png');
  background-size: cover;
}

/* Shop Content */
.shop-content {
  width: 1300px;
  margin: 32px auto 0;
  display: flex;
}

/* Filters Sidebar */
.filters-sidebar {
  width: 215px;
  margin-right: 103px;
}

.filter-section {
  margin-bottom: 30px;
}

.filter-section h3 {
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #000;
  margin-bottom: 18px;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 16px;
}

.filter-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background: #d9d9d9;
  border-radius: 5px;
}

.price-range {
  margin-top: 30px;
}

.price-range span {
  font-size: 18px;
  line-height: 27px;
  color: #000;
  display: block;
  margin-bottom: 20px;
}

.range-slider {
  width: 100%;
  height: 15px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QGeQfnRtxV.png');
  background-size: cover;
}

.rating-filter {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 18px;
}

.stars {
  display: flex;
  gap: 3px;
}

.star {
  width: 22px;
  height: 22px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/podqkcRWJS.png');
  background-size: cover;
}

.star.filled {
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/TnWhyDVo9g.png');
}

/* Product Grid */
.product-grid {
  flex: 1;
}

.product-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

/* Newsletter */
.newsletter {
  text-align: center;
  margin-top: 194px;
}

.newsletter h4 {
  font-family: 'Inter';
  font-size: 31px;
  line-height: 37.517px;
  color: #000;
  margin-bottom: 24px;
}

.newsletter h3 {
  font-family: 'Inter';
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  color: #000;
  margin-bottom: 12px;
}

.newsletter h2 {
  font-family: 'Inter';
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
  color: #000;
  margin-bottom: 24px;
}

.newsletter h2 span {
  color: #1a7554;
}

.newsletter p {
  font-family: 'Inter';
  font-size: 20px;
  line-height: 24px;
  color: #000;
  margin-bottom: 65px;
}

.newsletter-form {
  width: 708px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.newsletter-form input {
  width: 485px;
  height: 72px;
  background: #fff;
  border-radius: 45px;
  border: none;
  padding: 0 29px;
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.4);
}

.newsletter-form button {
  width: 211px;
  height: 72px;
  background: #ffc300;
  border-radius: 41px;
  border: none;
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #000;
  cursor: pointer;
}

/* Footer */
.main-footer {
  width: 1455px;
  height: 584px;
  background: #197852;
  border-radius: 20px;
  margin: 194px auto 0;
  padding: 80px;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-logo {
  width: 407px;
}

.footer-logo p {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #fff;
  margin: 18px 0 36px;
}

.footer-social-icons {
  display: flex;
  gap: 35px;
}

.footer-social-icons .social-icon {
  width: 29px;
  height: 29px;
}

.footer-links {
  display: flex;
  gap: 110px;
}

.links-column h5 {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #fff;
  margin-bottom: 27px;
}

.links-column ul {
  list-style: none;
}

.links-column li {
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  margin-bottom: 18px;
}

.contact-info {
  width: 167px;
}

.footer-bottom {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #fff;
}

.copyright .highlight {
  color: #ffc300;
}

.language-currency {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #fff;
}

.language-currency .divider {
  width: 1px;
  height: 29px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/6ywRGxe0HW.png');
}

.language-icon {
  width: 30px;
  height: 30px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/3QYa5ULnsH.png');
  background-size: cover;
}

.currency-icon {
  width: 30px;
  height: 30px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/QKeA0vdq57.png');
  background-size: cover;
}

/* Background Elements */
.background-element {
  position: absolute;
  width: 1512px;
  height: 399px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/cfdceca4-02b2-47e6-9bff-cdcd679f4bf5.png');
  background-size: cover;
  opacity: 0.5;
  top: 290px;
  left: 0;
  z-index: -1;
}

.background-element-2 {
  position: absolute;
  width: 1512px;
  height: 1383px;
  background-image: url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-09/a083c518-ddfa-4c8e-9292-4319aba89ea9.png');
  background-size: cover;
  opacity: 0.5;
  top: 3028px;
  left: 0;
  z-index: -1;
}
</style>
