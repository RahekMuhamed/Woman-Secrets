<template>
  <div class="Container">
    <div id="header">
      <img src="../assets/Frame 120.svg" />
      <p>
        GOOCHIE is a leading Chinese brand in permanent makeup, founded in 1996.
        It offers a variety of devices and pigments to meet global market needs,
        with a wide network of agents in over 64 countries. The brand focuses on
        providing high-quality products and professional, safe services to users
      </p>
    </div>
    <div id="main-contant">
      <h3>Duogel Product Showcase</h3>

      <ul id="coll-list">
        <li><router-link to="/devices">Devices</router-link></li>
        <li>
          <router-link to="/uv-gel-nail-polishes"
            >UV gel nail polishes</router-link
          >
        </li>
        <li><router-link to="/nail-art">Nail art</router-link></li>
        <li><router-link to="/accessories">Accessories</router-link></li>
        <li><router-link to="/uv-gels">UV Gels</router-link></li>
        <li>
          <router-link to="/liquids-preparations"
            >Liquids / Preparations</router-link
          >
        </li>
        <li><router-link to="/care">Care</router-link></li>
        <li>
          <router-link to="/disinfection-hygiene"
            >Disinfection / Hygiene</router-link
          >
        </li>
        <li><router-link to="/acrylics">Acrylics</router-link></li>
        <li><router-link to="/outlet">Outlet</router-link></li>
        <li><router-link to="/collections">Collections</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.Container {
  margin: 120px 0;
  padding: 40px;
  background-color: #deebf6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#header {
  width: 100%;
  max-width: 904px;
  text-align: center;
}

p {
  font-family: "League Spartan";
  font-size: 16px;
  line-height: 26px;
  color: #737373;
}

#main-contant {
  width: 100%;
  max-width: 1360px;
  padding: 56px 40px;
  border-radius: 24px;
  background-color: #fefeff;
}

h3 {
  font-family: "League Spartan";
  font-size: 32px;
  line-height: 26px;
}

#coll-list {
  padding: 40px 0  ;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

#coll-list li {
  display: inline;
}

#coll-list a {
  text-decoration: none;
  color: #0000004d;
  padding: 5px ;
  transition: background-color 0.3s ease;
}

#coll-list a.router-link-active,
#coll-list a.router-link-exact-active {
  width: auto;
  padding: 10px 16px;
  border-radius: 50px;
  color: #020203;
  background-color: #deebf6;
}

/* Media Queries */
@media (max-width: 767px) {
  .Container {
    margin: 60px 0;
    padding: 20px;
  }

  #header {
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  #main-contant {
    width: 100%;
    padding: 20px;
  }

  h3 {
    font-size: 24px;
  }

  #coll-list {
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
  }

  #coll-list li {
    margin-bottom: 10px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  #main-contant {
    padding: 40px;
  }

  h3 {
    font-size: 28px;
  }
}
</style>







