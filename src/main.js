import Vue from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Import vue router để sử dụng
import VueRouter from 'vue-router';

// Import component HelloWorld.vue để sử dụng
import HelloWorld from './components/HelloWorld.vue'

// Import component EmployeeList.vue để sử dụng
import EmployeeList from './views/employee/EmployeeList.vue'

// Khai báo EventBus
export const eventBus = new Vue();

// Định nghĩa các path để router đến đúng url
export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/employee-list', component: EmployeeList }
    ]
});

// Khai báo sử dụng Vue router
Vue.use(VueRouter);

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')