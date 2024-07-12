function buildCanvas(size) {
    let container = document.body.querySelector("#grid-container")
    if (container != null) {
        console.log(container);
        container.remove();
    }

    let tempGrid = document.createElement("div");
    tempGrid.setAttribute("id", "grid-container");
    tempGrid.style.width = "600px";
    tempGrid.style.height = "600px";
    tempGrid.style.backgroundColor = "red";
    document.body.appendChild(tempGrid);

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "white";
            /*square.style.height = "16px";
            square.style.width = "16px";*/
            square.style.height = `${tempGrid.clientHeight/(size)}px`;
            square.style.width = `${tempGrid.clientWidth/(size)}px`;

            square.addEventListener("mouseover", function(e) {
                if (e.buttons == 1) {
                    square.style.backgroundColor = "black";
                    square.style.border = "rgb(223, 223, 223)";
                }
            });
    
            row.appendChild(square);
        }
    
        tempGrid.appendChild(row);
    }

    //document.body.appendChild(tempGrid);
}

buildCanvas(16);

const slider = document.querySelector("#slider");

/*slider.addEventListener("oninput", () => {
    sliderDisplay.textContent = slider.getAttribute("value");
});*/

const sliderDisplay = document.querySelector("#slider-display");
sliderDisplay.textContent = slider.getAttribute("value");

function showVal(newVal) {
    sliderDisplay.textContent = newVal;
}

const textBox = document.querySelector("#text-input");
textBox.addEventListener("keyup", function(e) {
    if (e.key === "Enter" && textBox.value != "" && Number.isInteger(parseInt(textBox.value)) && !textBox.value.includes(".")) {
        sliderDisplay.textContent = textBox.value;

        buildCanvas(textBox.value);
    }
});