

let items = [
    {goods:"phone", amount:"#4000"},
    {goods:"diaper", amount:"#1000"},
    {goods:"golden morn", amount:"#2500"},
    {goods:"calculator", amount:"#500"}
];
let select1 = document.getElementById('opt');
let money = document.getElementById('price');


for(let i=0; i < items.length; i++){
        select1.innerHTML += `<option> ${items[i].goods}</option>`
}

function getItemPrice(event){
    let select = "";

    for (let index = 0; index < items.length; index++) {

        if(event.target.value==items[index].goods){
           
           select = items[index].amount
    }
    money.innerHTML = select
    }
    
}
    




    // if (money =="" && select1 =="") {
    //     alert =("can't accept empty input")
    // }
      
    

    



 // let select1 = document.getElementById('opt');
    // let money =document.getElementById('price').value;

        // money.innerHTML += items[i].amount






// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputfield = document.getElementById('inputfield');

// addToDoButton.addEventListener('click', function(){
//     var paragragh = document.createElement('p');
//     paragragh.classList.add('paragragh-styling');
//     paragragh.innerText = inputfield.value;
//     toDoContainer.appendChild(paragragh);
//     inputfield.value = "";
//     paragragh.addEventListener('click', function(){
//         paragragh.style.decoration = "line through";
//     })
//     paragragh.addEventListener('dblclick', function(){
//         paragragh.removeChild(paragragh);
//     })
// })



// let ToDoList = document.getElementById('container')
// let input = document.getElementById('ToDoList-input');
// let submit = document.getElementById('submit');
// let container = document.getElementById('ToDoList-item')

// ToDoList.addEventListener('click', functon(){
//     var paragragh = document.createElement('p')
//     paragragh.innertext = input.Value;
//     container.appendchild(paragragh):
// })

// let array = [
    
// ]