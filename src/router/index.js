import {createRouter, createWebHashHistory} from "vue-router";


const index = () => import("../view/index.vue")
const car = () => import("../view/car.vue")
const pyramid = () => import("../view/pyramid.vue")

const routes = [
    {
        path: "/",
        name: "index",
        component: index
    },
    {
        path: "/car",
        name: "car",
        component: car
    },
    {
        path: "/pyramid",
        name: "pyramid",
        component: pyramid
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})
