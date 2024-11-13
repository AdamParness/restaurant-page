import "./styles.css";
import loadBreakfast from './breakfast.js';
import loadLunch from './lunch.js';
import loadDinner from './dinner.js';
import loadDessert from './dessert.js';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const breakfast_btn = document.querySelector("#breakfast");
    const lunch_btn = document.querySelector("#lunch");
    const dinner_btn = document.querySelector("#dinner");
    const dessert_btn = document.querySelector("#dessert");
    const content = document.querySelector("#content");

    if (breakfast_btn) {
        breakfast_btn.addEventListener("click", () => {
            content.innerHTML = '';
            loadBreakfast();
        });
    }

    if (lunch_btn) {
        lunch_btn.addEventListener("click", () => {
            content.innerHTML = '';
            loadLunch();
        });
    }

    if (dinner_btn) {
        dinner_btn.addEventListener("click", () => {
            content.innerHTML = '';
            loadDinner();
        });
    }

    if (dessert_btn) {
        dessert_btn.addEventListener("click", () => {
            content.innerHTML = '';
            loadDessert();
        });
    }
});