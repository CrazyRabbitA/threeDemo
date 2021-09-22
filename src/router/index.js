import {createRouter, createWebHashHistory} from "vue-router";


const car = () => import("../view/car.vue")
const pyramid = () => import("../view/pyramid.vue")

const routes = [
    {path: "/", redirect: "/car"},
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
