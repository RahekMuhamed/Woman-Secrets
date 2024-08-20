import { createRouter, createWebHistory } from "vue-router";
import NailArt from "./components/NailArt.vue";
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/nail-art',
      name: 'NailArt',
      component: NailArt
    },]
  });
export default router;
