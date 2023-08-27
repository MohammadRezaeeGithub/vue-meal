import { createRouter,createWebHistory } from "vue-router";
import Home from '../view/Home.vue';
import MealList from "../view/Ingrediant.vue";
import MealsByName from "../view/MealsByName.vue";
import MealsByLetter from "../view/MealsByLetter.vue";
import DeafaultLayout from "../components/DeafaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../view/MealDetails.vue";
import Ingrediant from "../view/Ingrediant.vue";
import MealsByIngrediant from "../view/MealsByIngrediant.vue";

const routes = [
    {
        path:'/',
        component: DeafaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component: Home,
            },
            {
                path:'/by-letter/:letter?',
                name:'byLetter',
                component: MealsByLetter,
            },
            {
                path:'/by-name/:name?',
                name:'byName',
                component: MealsByName,
            },
            {
                path:'/ingrediant',
                name:'ingrediant',
                component: Ingrediant,
            },
            {
                path:'/by-ingrediant/:ingrediant?',
                name:'byIngrediant',
                component: MealsByIngrediant,
            },
            {
                path:'/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            }
        ]
    },
    {
        path:'/guest',
        component: GuestLayout,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;