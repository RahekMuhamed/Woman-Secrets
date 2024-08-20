<template>
  <div class="row Container">
    <div class="col-4 image">
       <img src="../assets/image 44.svg">
    </div>
    <div class="col-4 content">
      <div>
        <p id="header">About Us</p>
        <p>
          From ancient times to the present day, our journey continues to bring
          the best to the modern woman. We draw inspiration from our rich
          heritage and blend it with contemporary touches to offer you a diverse
          range of products that reflect the elegance and sophistication of the
          past with a modern twist.
        </p>
      </div>
      <div>
        <p id="list-title">Values</p>
        <ul class="values-list">
          <li class="item">Sustainability</li>
          <li class="item">Women's Empowerment</li>
          <li class="item">Innovation and Creativity</li>
          <li class="item">Excellent Customer Service</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Container {
  padding: 80px 0;
  height: 760px;
  gap: 80px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 640px;
  gap: 55px;
}
.image {
  width: 640px;
  height: 724px;
}
#header {
  font-family: "League Spartan";
  font-size: 140px;
  font-weight: 100;
  line-height: 128.8px;
  text-align: left;
}

p {
  font-family: League Spartan;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
}
.values-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#list-title {
  font-family: League Spartan;
  font-size: 48px;
  font-weight: 700;
  line-height: 44.16px;
  text-align: left;
}
.item {
  width: 640px;
  height: 48px;
  padding: 10px 16px;
  margin-bottom: 8px;
  border-radius: 12px;
  border-width: 0px 0px 1px 1px;
  background-color: #f4f4f4;
  color: #020203;
}
/* Media Queries */
@media (max-width: 767px) {
  .Container {
    padding: 40px ;
    height: auto;
    gap: 20px;
  }

  .content {
    width: 100%;
    gap: 30px;
    text-align: center;
  }

  .image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }

  #header {
    font-size: 48px;
    line-height: 56px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  .values-list {
    padding: 0;
  }

  #list-title {
    font-size: 24px;
    line-height: 28px;
  }

  .item {
    width: auto;
    height: auto;
    padding: 8px 12px;
    margin-bottom: 6px;
    border-width: 0px;
    background-color: #f4f4f4;
    color: #020203;
  }
}

</style>
