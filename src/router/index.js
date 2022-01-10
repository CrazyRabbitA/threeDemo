import {createRouter, createWebHashHistory} from "vue-router";


const index = () => import("../view/index.vue")
const car = () => import("../view/car.vue")
const introduce = () => import("../view/introduce.vue")
const example = () => import("../view/example.vue")
const other = () => import("../view/other.vue")
const demo1 = () => import("../view/demo1.vue")
const note = () => import("../view/note.vue")

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
    },
    {
        path: "/demo1",
        name: "demo1",
        component: demo1
    },
    {
        path: "/note",
        name: "note",
        component: note
    },
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})
