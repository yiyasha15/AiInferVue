import {createRouter, createWebHistory} from 'vue-router';
import Homepage from '@/pages/Homepage.vue';
import Showrecords from '@/pages/Showrecords.vue'
import Basicinformation from '@/pages/Basicinformation.vue'
import Signout from '@/pages/Signout.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Homepage",
        component: Homepage
      },
      {
        path: "/showrecords",
        name: "Showrecords",
        component: Showrecords
      },
      {
        path: "/basicinformation",
        name: "Basicinformation",
        component: Basicinformation
      },
      {
        path: "/signout",
        name: "Signout",
        component: Signout
      }
    ],
  });
  export default router;