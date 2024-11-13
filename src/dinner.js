export default function loadDinner(){
    const content = document.querySelector("#content");
    
    const grid_container = document.createElement("div");
    grid_container.id = 'dinner';
    const h2 = document.createElement("h2");
    h2.textContent = "Dinner";
    grid_container.appendChild(h2);

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const grid_item1 = document.createElement("div");
    grid_item1.classList.add("grid-item");

    const grid_item2 = document.createElement("div");
    grid_item2.classList.add("grid-item");

    const steak = document.createElement("h4");
    steak.textContent = "New York Strip";
    const steak_desc = document.createElement("span");
    steak_desc.textContent = "12 oz New York Strip with a side of roasted garlic potatoes";
    grid_item1.appendChild(steak);
    grid_item1.appendChild(steak_desc);

    //chinese chicken salad
    const pizza = document.createElement("h4");
    pizza.textContent = "Neapolitan Pizza";
    const pizza_desc = document.createElement("span");
    pizza_desc.textContent = "00 dough, buffalo mozzarella, fresh tomato sauce ";
    grid_item2.appendChild(pizza);
    grid_item2.appendChild(pizza_desc);

    grid.appendChild(grid_item1);
    grid.appendChild(grid_item2);

    grid_container.appendChild(grid);
    content.appendChild(grid_container);
}