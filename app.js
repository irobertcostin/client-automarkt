
let container = document.querySelector(".container")



container.appendChild(navbar());
container.appendChild(testDriveAdd());
container.appendChild(filtersSection());
container.appendChild(createMainPageContentGrid());
getCars();

getAllMakers();
getAllModelsByMaker("Acura");

// filters section selectors 

let makerSelector = document.querySelector(".maker-selector-filters");
let modelSelector = document.querySelector(".model-selector-filters");
let fromYear = document.querySelector(".year-from-selector-filters");
let toYear = document.querySelector(".year-to-selector-filters");
let fromPrice = document.querySelector(".price-from-selector-filters");
let toPrice = document.querySelector(".price-to-selector-filters");
let fromKm = document.querySelector(".km-from-selector-filters");
let toKm = document.querySelector(".km-to-selector-filters");

let dieselFuel=document.getElementById("diesel")
let gasolineFuel=document.getElementById("gasoline")
let gplFuel=document.getElementById("diesel")

makerSelector.addEventListener("change", (e)=>{
    let obj = e.target.value;
    // console.log(obj)
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

let search = document.getElementById("search-filtered-btn")
search.addEventListener("click",(e)=>{

    let obj = e.target;
    // console.log(obj)

    let filteredMaker = document.querySelector(".maker-selector-filters").value;
    let filteredModel = document.querySelector(".model-selector-filters").value;
    console.log(filteredMaker)
    console.log(filteredModel)

    document.querySelector(".main-page-content-div").innerHTML="";
    getAllCarsByModel(filteredModel);
    


})