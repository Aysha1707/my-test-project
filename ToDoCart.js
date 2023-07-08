let stock = [
    {product:"ladies shirt", price: 100},
    {product:"men shirt", price: 150},
    {product:"jean", price: 300},
    {product:"joggers", price: 450},
    {product:"bra", price: 50},
    {product:"ladies pant", price: 20},
    {product:"boxers", price: 80},
    {product:"plain T-shirt", price: 200},
    {product:"unisex pyjamas", price: 100},
    {product:"lingerie", price: 120},
    {product:"jalab", price: 500}
]

var totalprice = document.getElementById('totalprice')
var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
let array = []

for (let i = 0; i < stock.length; i++) {
    item1.innerHTML += `<option>${stock[i].product}</option>`
    
}
function selectClick(event) {
    let result = "";
    for (let index = 0; index < stock.length; index++) {
        if (event.target.value == stock[index].product) {
            result = stock[index].price
        }    
        item2.value = result
    }
}
function clickMe(){
    let addFirstItem = document.getElementById('item1').value
    let addSecondItem = document.getElementById('item2').value
    let result = false
    let Sum = {designer:addFirstItem, price:addSecondItem};

    for (let index = 0; index < array.length; index++) {
        if (addFirstItem == array[index].designer){
            result = true
        }
        
    }
    if (addFirstItem =="") {
        alert ("make a selection")
    }
    else if (result){
        alert ("item already selected")
    }
    else{
        array.push(Sum)
        dataFetcher()
    }
}

let cartItem = document.querySelector('#cartitem')

function dataFetcher() {
    totalprice = Number()
    cartItem.innerHTML = `
            <tr>
                <th>S/N</th>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>DELETE ITEM</th>
            </tr>

    `
    for (let index = 0; index < array.length; index++) {
        totalprice += Number(array[index].price)
       

        cartItem.innerHTML +=`
        <tr>
            <td class="ml-auto">${index + 1}</td>
            <td class="ml-auto">${array[index].designer}</td>
            <td class="ml-auto">$${array[index].price}</td>
            <td>
                <span class="ml-auto" onclick="deleteCart(${index})"> Delete<span> 
            </td>
        </tr>
        `   
    }
    document.getElementById('totalprice').value = totalprice
}
dataFetcher ()

function deleteCart(params) {
    array.splice(params, 1)
    dataFetcher()
}


function listItems(){
    let duplicate = false

    if (addFirstItem.value =="" || addSecondItem.value ==""){
        return alert ("please select an item")
    }
    for (let i = 0; i < array.length; i++){
        if (addFirstItem.value == array[i].items)
        return duplicate = true
    }
    if (duplicate){
        alert ("duplicate selection")
    }
    else{
        array.push({
            items: addFirstItem.value,
            price: addSecondItem.value,
            totalprice: sum 
        })
    }
}

