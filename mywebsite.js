function create(){
    let name = document.getElementById('nameInput').value;
    let password = document.getElementById("password2").value;
    let email = document.getElementById('mail2').value;
    let print = document.getElementById("print2");

    if (password == '' || email == '' || name == ''){
        alert ("fill the form completely")   
    }
    if (password.length >= 8){
        print.innerHTML = 'password is too strong';
    }
    if (password.length < 8){
        print.innerHTML = 'password is too weak';
    }
    else{
        let item ={
            id: Math.floor(Math.random()* 10000),
            name: document.getElementById('nameInput').value,
            password: document.getElementById("password2").value,
            email: document.getElementById('mail2').value,
        }
        let variable = localStorage.getItem('cupBoard')
            let details = [];
            if (variable == null){
                details.push(item)
            }
            else{
                details = JSON.parse(localStorage.getItem('cupBoard'))
                if (details.some(el =>el.email == item.email)){
                    return alert ('email already exist')
                }
                details.push(item)
            }
            localStorage.setItem('cupBoard', JSON.stringify(details))
            window.location.assign("mywebsiteLogin.html")
    }
}





let a = 12
let b = 3
let c = a +b

console.log(c) 