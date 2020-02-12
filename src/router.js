import Measure from "./pages/Measure";
import ABTesting from "./pages/ABTesting";
import VueRouter from "vue-router";


const routes = [
    { path: '/measure', component: Measure },
    { path: '/', component: Measure },
    { path: '/ab-testing', component: ABTesting }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

export default  router;