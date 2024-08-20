<template>
        <div class=" row Container ">
            <div class="col-4">
                <img src="../assets/image 26.svg">
            </div>
            <div class="col-4 content " >
                <p >Enhancing everythng related to women's charm and allure is our mission.</p>
                <button >Contact Us</button>
            </div>
            <div class="col-4">
                <img src="../assets/image 25.svg"  >
            </div>
        </div>
</template>
<style scoped>
.Container{
    margin: 0;
    padding: 0;
    height: 760px;
}

.content {
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  font-family: 'League Spartan', sans-serif;
  font-size: 44px;
  font-weight: 500;
  line-height: 66px;
  text-align: center;
}

button {
  width: 162px;
  height: 50px;
  padding: 10px ;
  border-radius: 50px ;
  background-color:#DEEBF6;
  border: none;
}
/* Media Queries */
@media (max-width: 767px) {
  .Container {
    height: auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .col-4:first-child,.col-4:last-child img {
    display: none;
  }

  .content {
    background-image: url('../assets/image 25.svg'); 
    background-size: cover;
    background-position: center;
    padding: 32px;
    width: 100%;
    text-align: center;
    border-radius: 16px; 
  }

  p {
    font-size: 24px;
    color: #fff;
  }

  button {
    width: auto;
    height: 40px;
    padding: 8px 16px;
    border-radius: 25px;
  }

}


</style>