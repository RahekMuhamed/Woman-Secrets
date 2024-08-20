<template>
  <div id="header">
    <div class="logo">
      <img src="../../assets/Logo.svg" alt="Logo" />
    </div>

    <div class="navbar">
      <ul class="navbar-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Service</a></li>
        <li><a href="#">Partner Brands</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <ul class="navbar-icons">
        <li>
          <a href="#"
            ><img src="../../assets/twitter.svg" alt=" twitter  " class="icon"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img src="../../assets/instagram.svg" alt="instagram" class="icon"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img src="../../assets/facebook.svg" alt="facebook" class="icon"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  border-bottom: 1px solid #C2C2D6;
}

.logo {
  margin: 1rem 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
}

.navbar-list,
.navbar-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
}

.navbar-list li,
.navbar-icons li {
  list-style: none;
}

.navbar-list li a,
.navbar-icons li a {
  text-decoration: none;
  color: #000000;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.navbar-icons li a {
  padding: 10px;
}

.navbar-list li a.active {
  border-bottom: 2px solid #000;
}

/* Media Queries */
@media (max-width: 767px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-list {
    flex-direction: column;
    width: 100%;
  }

  .navbar-list li a {
    padding: 10px;
    display: block;
  }

  .navbar-icons {
    margin-top: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .navbar-list li a {
    font-size: 14px;
  }

  .navbar-icons li a {
    padding: 8px;
  }
}

@media (min-width: 1024px) {
  .navbar-list li a {
    font-size: 16px;
  }

  .navbar-icons li a {
    padding: 10px;
  }
}
</style>
