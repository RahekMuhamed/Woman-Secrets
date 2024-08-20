<template>
  <div class="scrolling-text-container">
    <div class="scrolling-text">
      <p>
        <span class="color-change-span">BE THE BEST YOU CAN BE. </span>
        <span class="color-change-others">BE THE BEST YOU CAN BE. </span>
        <span class="color-change-span">BE THE BEST YOU CAN BE. </span>
        <span class="color-change-others">BE THE BEST YOU CAN BE. </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.scrolling-text-container {
  overflow: hidden;
  white-space: nowrap;
  width: 1440px;
  height: 131px;
  top: 2961px;
  padding: 16px 0;
  gap: 10px;
}

.scrolling-text {
  font-family: "League Spartan", sans-serif;
  font-size: 64px;
  font-weight: 100;
  line-height: 58.88px;
  text-align: left;
  display: inline-block;
  animation: scroll    15s linear infinite;
}

.color-change-span {
  font-weight: 700; 
  animation: color-change-span 15s linear infinite;
}

.color-change-others {
  color: gray; 
  animation: color-change-others 15s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes color-change-span {
  0% {
    color: black;
  }
  100% {
    color: gray;
  }
}

@keyframes color-change-others {
  0% {
    color: gray;
  }
  100% {
    color: lightgray;
  }
}
</style>
