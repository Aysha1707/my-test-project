let Timetables = [
    {Day:"Sunday", Time: [
        {period:"Breakfast", menu:"Bread, Egg sauce and Tea"},
        {period:"Lunch", menu:"Semo, Gbegiri and Beef"},
        {period:"Dinner", menu:"Rice and Beans"},
        ]
    },
    {Day:"Monday", Time: [
        {period:"Breakfast", menu:"White Rice and fish sauce"},
        {period:"Lunch", menu:"Eba, Egusi with Veg and Soyabean cake"},
        {period:"Dinner", menu:"Beans"},
        ]
    },
    {Day:"Tuesday", Time: [
        {period:"Breakfast", menu:"Bread, Boiled Egg and Tea"},
        {period:"Lunch", menu:"Amala, Gbegiri and Beef"},
        {period:"Dinner", menu:"Beans and Corn"},
        ]
    },
    {Day:"Wednesday", Time: [
        {period:"Breakfast", menu:"Pap and Akara"},
        {period:"Lunch", menu:"Eba, Egusi with Veg and Soyabean cake"},
        {period:"Dinner", menu:"Jollof rice"},
        ]
    },
    {Day:"Thursday", Time: [
        {period:"Breakfast", menu:"Bread, Egg sauce and Tea"},
        {period:"Lunch", menu:"Semo, okro and fish"},
        {period:"Dinner", menu:"Pap and Moimoi"},
        ]
    },
    {Day:"Friday", Time: [
        {period:"Breakfast", menu:"Pap and Akara"},
        {period:"Lunch", menu:"Eba, Vegetable and Soyabean cake"},
        {period:"Dinner", menu:"Spaghetti"},
        ]
    },
    {Day:"Saturday", Time: [
        {period:"Breakfast", menu:"Rice and Stew"},
        {period:"Lunch", menu:"Amala, Ewedu and Fish"},
        {period:"Dinner", menu:"Beans and Corn"},
        ]
    },
]

var Menu = document.getElementById('Menu')
var Day = document.getElementById('Day')
var Period = document.getElementById('Period')
let Table = document.getElementById('foodTT')
let array = []
for (let index = 0; index < Timetables.length; index++) {
    Day.innerHTML += `<option>${Timetables[index].Day}</option>`
    
}
for (let index = 0; index < Timetables.length; index++) {
    Period.innerHTML += `<option>${Timetables[index].Time[index].period}</option>`
    
}
function fetchMeal() {
    Table.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        Table.innerHTML += `
        <tr>
            <td class="text-dark">${i+1}</td>
            <td class="text-dark">${array[i].Day}</td>
            <td class="text-dark">${array[i].period}</td>
            <td class="text-dark">${array[i].menu}</td>
            <td class="text-dark">
                <span onclick="deleteFood(${i})">Del<i class="fa-solid fa-trash-can"></i></span>
            </td>
        </tr>
        `;    
    }
}
function clicker() {
    let result = false;
    if(Day.value == '' || Period.value == ''){
        alert ("Make a selection")
    }
    else if(result){
        alert("Food already selected")
    }
    else{
        let Food = {
            Day: Day.value,
            period: Period.value
        };
        Timetables.forEach(el=>{
            if(el.Day == Food.Day){
                el.Time.forEach(list=>{
                    if(list.period == Food.period){
                        Food.menu = list.menu
                    }
                })
            }
        })
        array.push(Food)
        fetchMeal()

    }
    
       
    
}
fetchMeal()
function deleteFood(Food) {
      array.splice(Food, 1)  
      fetchMeal()
} 









// let foodTT = [
//     {Day:"monday", time:"breakfast", menu:"bread and tea"},
//     {Day:"tuesday", time:"breakfast", menu:"jollof rice and chicken"},
//     {Day:"wednesday", time:"breakfast", menu:"yam and egg"},
//     {Day:"thursday", time:"breakfast", menu:"fried rice and chicken"},
//     {Day:"friday", time:"breakfast", menu:"sandwich and coffee"},
//     {Day:"saturday", time:"breakfast", menu:"pap and akara"},
//     {Day:"sunday", time:"breakfast", menu:"bread and beans"}
// ]

// let Day1 = document.getElementById('Day')
// let food = document.getElementById('menu')

// for (let i=0; i < foodTT.length; i++){
//     Day1.innerHTML += `<Option>${foodTT[i].Day}</Option>`

// }
// function clicker(event){
//     let message = ""
//     for (let index = 0; index < foodTT.length; index++) {
        
//         if(event.target.value==foodTT[index].Day){
//             message = foodTT[index].menu

//         }
//         food.innerHTML= message
//     }
    
    
// }
