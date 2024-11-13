export default function loadBreakfast(){
    const content = document.querySelector("#content");
    
    const grid_container = document.createElement("div");
    grid_container.id = 'breakfast';
    const h2 = document.createElement("h2");
    h2.textContent = "Breakfast";
    grid_container.appendChild(h2);

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const grid_item1 = document.createElement("div");
    grid_item1.classList.add("grid-item");

    const grid_item2 = document.createElement("div");
    grid_item2.classList.add("grid-item");

    const pancakes = document.createElement("h4");
    pancakes.textContent = "Sourdough Pancakes";
    const pancakes_desc = document.createElement("span");
    pancakes_desc.textContent = "Our homemade sourdough pancakes served with maple syrup";
    grid_item1.appendChild(pancakes);
    grid_item1.appendChild(pancakes_desc);

    //bacon,egg, cheese
    const bec = document.createElement("h4");
    bec.textContent = "Bacon, Egg, and Cheese";
    const bec_desc = document.createElement("span");
    bec_desc.textContent = "Our signature breakfast sandwich with bacon, soft scrambled eggs, cheddar cheese on an everything bagel";
    grid_item2.appendChild(bec);
    grid_item2.appendChild(bec_desc);

    grid.appendChild(grid_item1);
    grid.appendChild(grid_item2);

    grid_container.appendChild(grid);
    content.appendChild(grid_container);


}

