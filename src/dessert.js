export default function loadDessert(){
    const content = document.querySelector("#content");
    
    const grid_container = document.createElement("div");
    grid_container.id = 'dessert';
    const h2 = document.createElement("h2");
    h2.textContent = "Dessert";
    grid_container.appendChild(h2);

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const grid_item1 = document.createElement("div");
    grid_item1.classList.add("grid-item");

    const grid_item2 = document.createElement("div");
    grid_item2.classList.add("grid-item");

    const lava = document.createElement("h4");
    lava.textContent = "Molten Chocolate Lava Cake";
    const lava_desc = document.createElement("span");
    lava_desc.textContent = "A rich, warm chocolate cake with a gooey, molten center, served with a scoop of creamy vanilla ice cream and a drizzle of raspberry coulis for a perfect balance of sweetness and tartness";
    grid_item1.appendChild(lava);
    grid_item1.appendChild(lava_desc);

    const tira = document.createElement("h4");
    tira.textContent = "Classic Tiramisu";
    const tira_desc = document.createElement("span");
    tira_desc.textContent = "Layers of espresso-soaked ladyfingers and velvety mascarpone cream,dusted with cocoa powder. This Italian favorite melts in your mouth with every bite, offering a delightful hint of coffee and a smooth, creamy finish";
    grid_item2.appendChild(tira);
    grid_item2.appendChild(tira_desc);

    grid.appendChild(grid_item1);
    grid.appendChild(grid_item2);

    grid_container.appendChild(grid);
    content.appendChild(grid_container);
    console.log("executed");
}