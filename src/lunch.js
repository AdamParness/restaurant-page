export default function loadLunch(){
    const content = document.querySelector("#content");
    
    const grid_container = document.createElement("div");
    grid_container.id = 'lunch';
    const h2 = document.createElement("h2");
    h2.textContent = "Lunch";
    grid_container.appendChild(h2);

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const grid_item1 = document.createElement("div");
    grid_item1.classList.add("grid-item");

    const grid_item2 = document.createElement("div");
    grid_item2.classList.add("grid-item");

    const sandwich = document.createElement("h4");
    sandwich.textContent = "Club Sandwich";
    const sandwich_desc = document.createElement("span");
    sandwich_desc.textContent = "The turkey club comes with iceberg lettuce, tomato, mayo between two fresh slices of sourdough";
    grid_item1.appendChild(sandwich);
    grid_item1.appendChild(sandwich_desc);

    //chinese chicken salad
    const ccs = document.createElement("h4");
    ccs.textContent = "Chinese Chicken Salad";
    const ccs_desc = document.createElement("span");
    ccs_desc.textContent = "Napa cabbage, thinly sliced carrots, with our peanut marinaded chicken, with our peanut dressing";
    grid_item2.appendChild(ccs);
    grid_item2.appendChild(ccs_desc);

    grid.appendChild(grid_item1);
    grid.appendChild(grid_item2);

    grid_container.appendChild(grid);
    content.appendChild(grid_container);
}