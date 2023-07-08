let cart =[
    {carte:"milo", price:"$20"},
    {carte:"milk", price:"$30"},
    {carte:"custard", price:"$35"},
    {carte:"lux", price:"$10"},
]

let goods = document.getElementById('item');
let show = document.getElementById('display');

// let select = ""

for (let index = 0; index < cart.length; index++) {
     goods.innerHTML += `<option>${cart[index].carte}</option>`
    
}
function dot(event){
    let select = ""
    for (let index = 0; index < cart.length; index++) {
    if (event.target.value==cart[index].carte){
        select = cart[index].price
    }
        show.innerHTML = select
    }
    
}









// // let ca = document.getElementById('show');
// let ica = document.getElementById('1ca');


// function table() {
//     if (ica.value <= 15) {
//        ica.innerHTML = ica;
       
//     }
//     // else{
//     //     ica.innerHTML = 'qqq';

//     // }
   
// }
// table();