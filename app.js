
let container = document.querySelector(".container")



container.appendChild(navbar());
container.appendChild(testDriveAdd());
container.appendChild(filtersSection());
container.appendChild(createMainPageContentGrid());
getCars();

getAllMakers();
getAllModelsByMaker("Acura");


let makerSelector = document.querySelector(".maker-selector-filters");

makerSelector.addEventListener("change", (e)=>{
    let obj = e.target.value;
    console.log(obj)
    document.querySelector(".model-selector-filters").innerHTML=""
    getAllModelsByMaker(obj)
})


let filterButton=document.getElementById("menu-btn")
filterButton.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj);
    let filters=document.querySelector(".filters-section")
    if(filters.classList.contains("hide")==false){
        filters.classList.add("hide");
    } else {
        filters.classList.remove("hide")
    }
    

})

// YEAR filters / API min year max year for arr 
// MOVE YEAR to KM 