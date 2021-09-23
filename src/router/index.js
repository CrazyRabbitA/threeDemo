import {createRouter, createWebHashHistory} from "vue-router";


const index = () => import("../view/index.vue")
const car = () => import("../view/car.vue")
const introduce = () => import("../view/introduce.vue")
const example = () => import("../view/example.vue")
const other = () => import("../view/other.vue")

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
        path: "/example",
        name: "example",
        component: example
    },
    {
        path: "/other",
        name: "other",
        component: other
    },
    {
        path: "/introduce",
        name: "introduce",
        component: introduce
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})
