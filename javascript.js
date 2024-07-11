function buildCanvas(size) {
    let container = document.body.querySelector("#grid-container")
    if (container != null) {
        console.log(container);
        container.remove();
    }

    let tempGrid = document.createElement("div");
    tempGrid.setAttribute("id", "grid-container");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "white";
            square.style.height = "16px";
            square.style.width = "16px";
    
            square.addEventListener("mouseover", function(e) {
                if (e.buttons == 1) {
                    square.style.backgroundColor = "black";
                }
            });
    
            row.appendChild(square);
        }
    
        tempGrid.appendChild(row);
    }

    document.body.appendChild(tempGrid);
}

buildCanvas(32);