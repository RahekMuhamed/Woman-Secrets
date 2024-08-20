<template>
  <div>
    <div class="row-list">
      <div
        class="row-item"
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ 'selected-item': currentIndex === index }"
      >
        <img :src="item.image" :alt="item.altText" />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <div class="arrow-container">
      <div
        class="arrow arrow-left"
        :class="{ 'arrow-disabled': currentIndex === 0 }"
        @click="prevItem"
      >
        <i class="fas fa-chevron-left"></i>
      </div>
      <div
        class="arrow arrow-right"
        :class="{ 'arrow-disabled': currentIndex === items.length - 1 }"
        @click="nextItem"
      >
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/folia-transferowa-silver-01.webp.svg";
import image2 from "@/assets/new-duo-sugar-lemon.webp.svg";
import image3 from "@/assets/new-duo-gabki-do-ombre.webp.svg";
import image4 from "@/assets/paint-gel-5g-063-barbie.webp.svg";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image: image1,
          altText: "Image 1",
          text: "Folia Transferowa silver 01",
        },
        {
          id: 2,
          image: image2,
          altText: "Image 2",
          text: "New Due Sugar lemon",
        },
        {
          id: 3,
          image: image3,
          altText: "Image 3",
          text: "New Due Ombre Sponges",
        },
        {
          id: 4,
          image: image4,
          altText: "Image 4",
          text: "Paint Gel 5g - 063 Barbie",
        },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
  methods: {
    prevItem() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.updateScroll();
    },
    nextItem() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      }
      this.updateScroll();
    },
    updateScroll() {
      const rowList = this.$el.querySelector(".row-list");
      const itemWidth = this.$el.querySelector(".row-item").offsetWidth;
      rowList.scrollTo({
        left: this.currentIndex * itemWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.row-list {
  padding: 40px 0;
  display: flex;
  gap: 32px;
  height: 344px;
}

.row-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 284px;
  height: 344px;
  padding: 24px 16px;
  border-radius: 16px;
  background-color: #f4f4f4;
}

.row-item img {
  width: 252px;
  height: 252px;
}

.row-item p {
  width: 209px;
  height: 20px;
  font-family: "League Spartan";
  font-weight: 500;
  line-height: 20.24px;
}

.arrow-container {
  display: flex;
  width: 100px;
  height: 20px;
  gap: 20px;
  margin-top: 60px;
}
.arrow {
  width: 40px;
  height: 40px;
  padding: 10px 7px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  color: #f4f4f4;

  background-color: #83b7d7;
}


.arrow-left {
  transform: rotate(0deg);
}

.arrow-right {
  transform: rotate(0deg);
}

.arrow-disabled {
  color: #f4f4f4;
  background-color: #d9d9d9;
  cursor: not-allowed;
  opacity: 0.5;
}

.selected-item {
  transform: scale(1.1);
  z-index: 1;
}

/* Carousel Media Queries */
@media (max-width: 767px) {
  .row-list {
    padding: 20px 0;
    gap: 16px;
    height: auto;
    overflow-x: auto;
  }

  .row-item {
    width: 150px;
    height: auto;
    padding: 12px;
  }

  .row-item img {
    width: 140px;
    height: auto;
  }

  .row-item p {
    font-size: 12px;
    width: auto;
  }

  .arrow-container {
    margin-top: 10px;
    width: 100%;
    max-width: 250px;
    gap: 10px;
  }

  .arrow {
    width: 30px;
    height: 30px;
    padding: 6px;
    font-size: 18px;
  }
}</style>























