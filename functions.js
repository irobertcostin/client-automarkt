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


// retrieve API info 
async function getCars(){


    let response = await fetch ("http://localhost:3000/api/v1/cars");

    response = await response.json();
    console.log(response.masini)

    let container = document.querySelector(".container")

    for(i in response.masini) {
        container.appendChild(createCard(response.masini[i]))
    }

}

// retrieve allMakers API 

async function getAllMakers() {

    let response = await fetch ("http://localhost:3000/api/v1/cars/allMakers")
    response=await response.json();


    for(i in response) {


    }
}



// create filters section

// create maker selector

function populateMakerSelector() {

    let selector = document.createElement("select");
    // selector.classList.
}    


// populate maker selector
function populateMakerSelector(arr) {

let option = document.createElement("option");

for(let i=0;i<arr.length;i++){



}


}
