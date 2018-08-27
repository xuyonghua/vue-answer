import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Score from "./views/Score"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/score",
            name: "Score",
            component: Score
        }
    ]
});
