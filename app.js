
let container = document.querySelector(".container")


container.appendChild(navbar());
// getCars();
container.appendChild(filtersSection());
getAllMakers();
getAllModelsByMaker("Acura");


let makerSelector = document.querySelector(".maker-selector-filters");

makerSelector.addEventListener("change", (e)=>{
    let obj = e.target.value;
    document.querySelector(".model-selector-filters").innerHTML=""
    getAllModelsByMaker(obj)
})



