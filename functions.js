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

// function to create testDriveAdd  

function testDriveAdd() {

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("test-drive-ad")


    let btnDiv = document.createElement("div");
    btnDiv.classList.add("test-drive-btn-div");
    mainDiv.appendChild(btnDiv)

    let btnImg = document.createElement("img");
    btnImg.src="./images/pirellibutton.png"
    btnDiv.appendChild(btnImg)
    

    let text=document.createElement("p");
    btnDiv.appendChild(text);
    text.textContent="Test drive it"   



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


// create a mainDiv for displaying homepage content

function homepageContentDiv1(){
    let mainDiv=document.createElement("div");
    mainDiv.classList.add("homepage-content-div1");

    


    return mainDiv
}

// create the content grid 
function createMainPageContentGrid(){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("main-page-content-div");

    // mainDiv.appendChild(homepageContentDiv1())

    return mainDiv
}




// retrieve API info - all cars  
async function getCars(){
    
    


    let response = await fetch ("http://localhost:3000/api/v1/cars");

    response = await response.json();
    // console.log(response.masini)
    let contentGridParent = document.querySelector(".main-page-content-div")
    contentGridParent.appendChild(homepageContentDiv1())
    let contentGrid = document.querySelector(".homepage-content-div1")
    for(i in response.masini) {
        
        contentGrid.appendChild(createCard(response.masini[i]))
    }

}






// populate maker selector
function populateMakerSelector(obj) {
let option = document.createElement("option");
option.id = "maker-selector-option-filters"
option.text = obj;
return option;

}

// populate model selector
function populateModelSelector(obj) {
    let option = document.createElement("option");
    option.id = "model-selector-option-filters"
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

    let testOption2=document.createElement("option");
    selector.appendChild(testOption2);


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

    let testOption2=document.createElement("option");
    selector.appendChild(testOption2);


    return mainDiv;
}    

// function to create km options

function createKmOption(obj){
    let option=document.createElement("option");
    option.id=obj;
    option.textContent=obj + " Km";

    return option;
}

function createYearOption(obj){
    let option=document.createElement("option");
    option.id=obj;
    option.textContent=obj;

    return option;
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

    let testOption1=document.createElement("option");
    selector.appendChild(testOption1);




    let selector2 = document.createElement("select");
    selector2.classList.add("year-to-selector-filters")
    toDiv.appendChild(selector2)
    let testOption2=document.createElement("option");
    selector2.appendChild(testOption2);
    
    let arr=[1970,1980,1990,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];

    for(i=0;i<arr.length;i++){
        selector.appendChild(createYearOption(arr[i]))
        selector2.appendChild(createYearOption(arr[i]))
    }

    return mainDiv;
} 

// create price options
function createPriceOption(obj){
    let option=document.createElement("option");
    option.id=obj;
    option.textContent=obj +" EUR";

    return option;
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

    let testOption1=document.createElement("option");
    selector.appendChild(testOption1);

    let selector2 = document.createElement("select");
    selector2.classList.add("price-to-selector-filters")
    toDiv.appendChild(selector2)

    let testOption2=document.createElement("option");
    selector2.appendChild(testOption2);

    let arr=[1000,5000,10000,50000,100000,150000,200000];

    for(i=0;i<arr.length;i++){
        selector.appendChild(createPriceOption(arr[i]))
        selector2.appendChild(createPriceOption(arr[i]))
    }



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
    selector2.classList.add("km-to-selector-filters")
    toDiv.appendChild(selector2)

    let testOption1=document.createElement("option");
    selector.appendChild(testOption1);

    let testOption2=document.createElement("option");
    selector2.appendChild(testOption2);

    let arr=[0,1000,5000,10000,50000,100000,150000,200000];

    for(i=0;i<arr.length;i++){
        selector.appendChild(createKmOption(arr[i]))
        selector2.appendChild(createKmOption(arr[i]))
    }


    return mainDiv;
} 

// create radio inputs for fuel
function createFuelType (){

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("fuel-type-filter")

    let label = document.createElement("label");
    label.textContent="Fuel type"
    mainDiv.appendChild(label);

    let secondDiv=document.createElement("div");
    secondDiv.classList.add("fuel-filters-div")
    mainDiv.appendChild(secondDiv)

    let diesel = document.createElement("input");
    diesel.type="checkbox";
    diesel.id="diesel"
    diesel.textContent="Diesel";
    secondDiv.appendChild(diesel)

    let dieselLabel = document.createElement("label");
    dieselLabel.textContent="Diesel"
    secondDiv.appendChild(dieselLabel);

    let gasoline = document.createElement("input");
    gasoline.type="checkbox";
    gasoline.id="gasoline"
    gasoline.textContent="Gasoline";
    secondDiv.appendChild(gasoline)

    let gasolinelLabel = document.createElement("label");
    gasolinelLabel.textContent="Gasoline"
    secondDiv.appendChild(gasolinelLabel);

    let gpl = document.createElement("input");
    gpl.type="checkbox";
    gpl.id="gpl"
    gpl.textContent="GPL";
    secondDiv.appendChild(gpl)

    let gplLabel = document.createElement("label");
    gplLabel.textContent="GPL"
    secondDiv.appendChild(gplLabel);

    return mainDiv

}






// create search filtered button 

function searchFilteredButton() {
    let btn = document.createElement("button");
    btn.textContent="Search"
    btn.id="search-filtered-btn"
    return btn;
}


// create filters section

function filtersSection() {

    let filtersSection = document.createElement("section");
    filtersSection.classList.add("filters-section")
    // filtersSection.classList.add("hide")
    filtersSection.appendChild(createMakerSelector())
    filtersSection.appendChild(createModelSelector());
    filtersSection.appendChild(createYearSelector())
    filtersSection.appendChild(createPriceSelector());
    filtersSection.appendChild(createKmSelector());
    filtersSection.appendChild(createFuelType());
    filtersSection.appendChild(searchFilteredButton());
    return filtersSection;
}



// retrieve allMakers API for the filter by maker section 

async function getAllMakers() {

    let response = await fetch ("http://localhost:3000/api/v1/cars/allMakers")
    response=await response.json();


    for(i in response) {
        // console.log(response[i]);
        document.querySelector(".maker-selector-filters").appendChild(populateMakerSelector(response[i]))
    }
}

async function getAllModelsByMaker(param){

    let response = await fetch(`http://localhost:3000/api/v1/cars/${param}/models`)
    response=await response.json();

    for(i in response) {

        document.querySelector(".model-selector-filters").appendChild(populateModelSelector(response[i]))

    }

}


async function getAllCarsByMinYear(param){

    let response = await fetch(`http://localhost:3000/api/v1/cars/year-filter/min-year=${param}`);
    response = await response.json();

    console.log(response)


}


async function getAllCarsByMaxYear(param){

    let response = await fetch(`http://localhost:3000/api/v1/cars/year-filter/max-year=${param}`);
    response = await response.json();

    console.log(response)

    
}

// get all Cars by model 

async function getAllCarsByModel(param){

    let response = await fetch(`http://localhost:3000/api/v1/cars/model-filter/model=${param}`)
    response = await response.json();

    for(let i = 0; i<response.length;i++){
        document.querySelector(".main-page-content-div").appendChild(createCard(response[i]))
    }

    

}