displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].sandwichName;
        let sauce = data[i].sandwichSauces;
        let base = data[i].sandwichBread;
        let toppings = data[i].sandwichToppings;
        let price = data[i].totalCost;

        checkTotal += price;

        items.innerHTML +=`
             <div class="card" style="margin-top: -16px">
                        <div class="card-body" style="float: left;width: 700px;margin-left="-10px" ">
                          <h4>${name}</h4>
                          <hr class="my-44" style="margin-bottom: 50px;">
                          <p style="float: right;margin-right: 480px;margin-top: -50px;"><strong>Bread:</strong> ${base}</p>
                          <p style="float: right;margin-right: 123px;margin-top: -50px;"><strong>Toppings:</strong> ${toppings}</p>
                          <p style="float: right;margin-right: -10px;margin-top: -50px; "><strong>Sauce:</strong> ${sauce}</p>
                          <hr class="my-44">
                          <p><strong>Total:</strong> R${price}</p>
                        </div>
                      </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00"
    
    }

}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '/ROOT/buildasub'
}

promoNumber = () => {
    let value = +document.getElementById('promo').value
    let newTotal = document.getElementById('totalOut')

    if( value === 12345){
        let discount = 0.10;
        let awnser= +totalOut - (totalOut * discount/100);
        console.log(awnser)


        newTotal.innerHTML = "R" + +awnser + ".00"

    }else {
        alert("Promo Code Invalid")
    }
}

 



  
