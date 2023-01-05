let container = document.querySelector(".container")


// create card 

function createCard (obj){

    let mainDiv = document.createElement("div");
    container.appendChild(mainDiv);
    mainDiv.classList.add("card");

    let maker = document.createElement("p");
    mainDiv.appendChild(maker);
    maker.textContent=obj.Maker;

    let model = document.createElement("p");
    mainDiv.appendChild(model);
    model.textContent=obj.Model;

    let year = document.createElement("p");
    mainDiv.appendChild(year);
    year.textContent=obj.Year;

    let vin = document.createElement("p");
    mainDiv.appendChild(vin);
    vin.textContent=obj.VIN;

    return mainDiv;
}


createCard(masina[0]);

async function getCars(){

  
    let response = await fetch ("http://localhost:3000/api/v1/cars",{

    
    method:"GET",

    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    mode:"no-cors"
    });

    console.log(response);

  
    let data= await response.json();

    console.log(data);

}

