import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Journal from './views/Journal.vue';
import JournalItem from './views/JournalItem.vue';
import MonitoringItem from './views/MonitoringItem.vue';
import Monitorings from './views/Monitorings.vue';
import References from './views/References.vue';
import Services from './views/Services.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/journal',
      name: 'journal',
      component: Journal,
    },
    {
      path: '/journal/:id',
      name: 'journalitem',
      component: JournalItem,
    },
    {
      path: '/monitorings',
      name: 'monitorings',
      component: Monitorings,
    },
    {
      path: '/monitorings/:id',
      name: 'monitoringsitem',
      component: MonitoringItem,
    },
    {
      path: '/references',
      name: 'references',
      component: References,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
  ],
});
