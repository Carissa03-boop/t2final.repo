let sandwichOrder = [];

makeSandwich = () =>{

    let sandwichCost = 0;

     let sandwichName = document.getElementById("sandwichName").value;
     let baseBread = document.getElementById("baseBread").value;

     if(baseBread === "White Bread"){
        sandwichCost = sandwichCost + 20;
     } else if(baseBread === "Wheat Bread"){
        sandwichCost = sandwichCost + 18;
     } else if(baseBread === "Multi-grain Bread"){
        sandwichCost = sandwichCost + 22;   
     }

     console.log("sandwichCost")


    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value)
            sandwichCost = sandwichCost + +toppingOptions[i].dataset.cost

            console.log("topArray");
        }
    }

    let saucesOptions = document.getElementsByName("sauces");
    let sauceArray = [];
    for(let i = 0; i < saucesOptions.length; i++){
        if(saucesOptions[i].checked){
            sauceArray.push(saucesOptions[i].value)
            sandwichCost = sandwichCost + +saucesOptions[i].dataset.cost

            console.log("sauces");
        }
    }


    sandwichOrder.push({
        sandwichName: sandwichName,
        sandwichBread: baseBread,
        sandwichToppings: topArray,
        sandwichSauces: sauceArray,
        totalCost: sandwichCost
    })


    console.log(sandwichOrder);

    document.getElementById("currentCost").innerHTML = "0.00"
    document.getElementById("sandwichForm").reset();

}

currentCost = () => {

    updatingCost = 0;

    let baseBread = document.getElementById("baseBread").value;

     if(baseBread === "White Bread"){
        updatingCost = updatingCost + 20;
     } else if(baseBread === "Wheat Bread"){
        updatingCost = updatingCost + 18;
     } else if(baseBread === "Multi-grain Bread"){
        updatingCost = updatingCost + 22;   
     }


    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            updatingCost = updatingCost + +toppingOptions[i].dataset.cost
        }
    }

    let saucesOptions = document.getElementsByName("sauces");
    for(let i = 0; i < saucesOptions.length; i++){
        if(saucesOptions[i].checked){
            updatingCost = updatingCost + +saucesOptions[i].dataset.cost
        }
    }

    document.getElementById("currentCost").innerHTML =  + updatingCost + ".00"
}

displayOrder = () => {

    let area = document.getElementById("orders");
    let total = document.getElementById("orderTotal");

    area.innerHTML  = "";

    let overallTotal = 0;

    for(let i = 0; i < sandwichOrder.length; i++){
         
        let name = sandwichOrder[i].sandwichName;
        let sauce = sandwichOrder[i].sandwichSauces;
        let base = sandwichOrder[i].sandwichBread;
        let toppings = sandwichOrder[i].sandwichToppings;
        let price = sandwichOrder[i].totalCost;

        overallTotal += price;

        area.innerHTML += `

        <div class="card" id="outicard">
             <div class="row">
                 <div class="col-12">
                     <div class="card-body">
                         <h5 class="card-title">${name}</h5>
                         <hr class="my-44">
                         <p class="card-text"><strong>Bread:</strong> ${base}</p>
                         <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                         <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                         <p class="card-text"><strong>Cost:</strong> R${price}</p>
                     </div>
                 </div>
             </div>`

        total.innerHTML = "R" + overallTotal +".00"

    }

}