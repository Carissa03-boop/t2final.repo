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


   //  let toppingOptions = document.getElementsByName("toppings");
   //  let topArray = [];
   //  for(let i = 0; i < toppingOptions.length; i++){
   //      if(toppingOptions[i].checked){
   //          topArray.push(toppingOptions[i].value)
   //          sandwichCost = sandwichCost + +toppingOptions[i].dataset.cost

   //          console.log("topArray")
   //      }
   //  }

//     sandwichOrder.push({
//         sandwichName: sandwichName,
//         sandwichBread: baseBread,
//         sandwichToppings: topArray,
//         totalCost: sandwichCost
//     })


//     console.log(sandwichOrder)

//     document.getElementById("sandwichOrder").reset

}