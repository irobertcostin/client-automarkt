// function to create new ad button

function addSellOffer() {
    let btn = document.createElement("button");
    btn.textContent="✚ Sell now"
    btn.id="sell-now-btn"


    return btn;
}


// function to create navbar
function navbar(){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("navbar");

    let menuBtn = document.createElement("button");
    mainDiv.appendChild(menuBtn);
    menuBtn.textContent="⚙︎"
    menuBtn.id = "menu-btn"


    let appName = document.createElement("p");
    mainDiv.appendChild(appName);
    appName.id="app-name";
    appName.textContent="AUTOKIT.RO"


    mainDiv.appendChild(addSellOffer());


    return mainDiv;
}


// function to create a smaller div for front page (before modal)
function createCard (obj){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div")
    mainDiv.appendChild(imgDiv)

    let poster = document.createElement("img");
    // poster.src="./images/COVER_Aventador-SVJ.webp"
    poster.src="./images/Yellow Luxury Car Showroom Instagram Post.png"
    poster.id = "poster-card"
    imgDiv.appendChild(poster)


    let secondDiv=document.createElement("div");
    secondDiv.classList.add("card-second-div")
    mainDiv.appendChild(secondDiv)

    let maker = document.createElement("p");
    maker.id="maker-card"
    secondDiv.appendChild(maker);
    maker.textContent=obj.maker;

    let model = document.createElement("p");
    model.id="model-card"
    secondDiv.appendChild(model);
    model.textContent=obj.model;


    let thirdDiv=document.createElement("div");
    thirdDiv.classList.add("card-third-div")
    mainDiv.appendChild(thirdDiv)

    let year = document.createElement("p");
    year.id="year-card"
    thirdDiv.appendChild(year);
    year.textContent=obj.year;

    let mileage = document.createElement("p")
    thirdDiv.appendChild(mileage);
    mileage.id="mileage-card"
    mileage.textContent=obj.mileage + " km"

    let engine = document.createElement("p");
    engine.id="engine-card"
    thirdDiv.appendChild(engine)
    engine.textContent=obj.engine_size +" cm3";

    let price = document.createElement("p");
    price.id="price-card"
    price.textContent=obj.price;
    mainDiv.appendChild(price)


    return mainDiv;
}


// retrieve API info - all cars  
async function getCars(){


    let response = await fetch ("http://localhost:3000/api/v1/cars");

    response = await response.json();
    console.log(response.masini)

    let container = document.querySelector(".container")

    for(i in response.masini) {
        container.appendChild(createCard(response.masini[i]))
    }

}






// populate maker selector
function populateMakerSelector(obj) {
let option = document.createElement("option");
option.id = "maker-selector-option-filters"
option.text = obj;
return option;
}


// create maker selector

function createMakerSelector() {

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("maker-filter")

    let label = document.createElement("label");
    label.textContent="Maker"
    mainDiv.appendChild(label);

    let selector = document.createElement("select");
    selector.classList.add("maker-selector-filters")
    mainDiv.appendChild(selector)


    return mainDiv;
}    


// create model selector 

function createModelSelector() {

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("model-filter")

    let label = document.createElement("label");
    label.textContent="Model"
    mainDiv.appendChild(label);

    let selector = document.createElement("select");
    selector.classList.add("model-selector-filters")
    mainDiv.appendChild(selector)


    return mainDiv;
}    

// create year selector 

function createYearSelector() {

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("year-filter")

    let label = document.createElement("label");
    label.textContent="Year"
    mainDiv.appendChild(label);

    let secondDiv=document.createElement("div");
    secondDiv.classList.add("year-filter-from-to-div")
    mainDiv.appendChild(secondDiv)

    let fromDiv=document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(fromDiv);

    let toDiv=document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(toDiv)

    let fromLabel = document.createElement("label")
    fromLabel.textContent="From"
    fromDiv.appendChild(fromLabel)

    let toLabel = document.createElement("label")
    toLabel.textContent="To"
    toDiv.appendChild(toLabel)

    let selector = document.createElement("select");
    selector.classList.add("year-from-selector-filters")
    fromDiv.appendChild(selector)

    let selector2 = document.createElement("select");
    selector.classList.add("year-to-selector-filters")
    toDiv.appendChild(selector2)


    return mainDiv;
} 



// create price selector

function createPriceSelector() {

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("price-filter")

    let label = document.createElement("label");
    label.textContent="Price"
    mainDiv.appendChild(label);

    let secondDiv=document.createElement("div");
    secondDiv.classList.add("price-filter-from-to-div")
    mainDiv.appendChild(secondDiv)

    let fromDiv=document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(fromDiv);

    let toDiv=document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(toDiv)

    let fromLabel = document.createElement("label")
    fromLabel.textContent="From"
    fromDiv.appendChild(fromLabel)

    let toLabel = document.createElement("label")
    toLabel.textContent="To"
    toDiv.appendChild(toLabel)

    let selector = document.createElement("select");
    selector.classList.add("price-from-selector-filters")
    fromDiv.appendChild(selector)

    let selector2 = document.createElement("select");
    selector.classList.add("price-to-selector-filters")
    toDiv.appendChild(selector2)


    return mainDiv;
} 


// create KM selector 

function createKmSelector() {

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("km-filter")

    let label = document.createElement("label");
    label.textContent="Km"
    mainDiv.appendChild(label);

    let secondDiv=document.createElement("div");
    secondDiv.classList.add("km-filter-from-to-div")
    mainDiv.appendChild(secondDiv)

    let fromDiv=document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(fromDiv);

    let toDiv=document.createElement("div");
    // secondDiv.classList.add("year-filter-from-to-div")
    secondDiv.appendChild(toDiv)

    let fromLabel = document.createElement("label")
    fromLabel.textContent="From"
    fromDiv.appendChild(fromLabel)

    let toLabel = document.createElement("label")
    toLabel.textContent="To"
    toDiv.appendChild(toLabel)

    let selector = document.createElement("select");
    selector.classList.add("km-from-selector-filters")
    fromDiv.appendChild(selector)

    let selector2 = document.createElement("select");
    selector.classList.add("km-to-selector-filters")
    toDiv.appendChild(selector2)


    return mainDiv;
} 




// create search filtered button 

function searchFilteredButton() {
    let btn = document.createElement("button");
    btn.textContent="Search"
    btn.id="search-filtered-btn"


    return btn;
}


// create marketing section




// create filters section

function filtersSection() {

    let filtersSection = document.createElement("section");
    filtersSection.classList.add("filters-section")
    filtersSection.appendChild(createMakerSelector())
    filtersSection.appendChild(createModelSelector());
    filtersSection.appendChild(createYearSelector())
    filtersSection.appendChild(createPriceSelector());
    filtersSection.appendChild(createKmSelector());
    filtersSection.appendChild(searchFilteredButton())
    return filtersSection;
}



// retrieve allMakers API for the filter by maker section 

async function getAllMakers() {

    let response = await fetch ("http://localhost:3000/api/v1/cars/allMakers")
    response=await response.json();


    for(i in response) {
        console.log(response[i]);
        document.querySelector(".maker-selector-filters").appendChild(populateMakerSelector(response[i]))
    }
}