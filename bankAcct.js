let AccountDetails = [
    {accountName:"Aysha", accountNumber:"0211191554"},
    {accountName:"Titilayo", accountNumber:"3026435540"},
    {accountName:"susan", accountNumber:"6089752212"},
    {accountName:"Jide", accountNumber:"0017893450"},
    {accountName:"Fuad", accountNumber:"3456789012"}
]
function ActiveBtn(event){
    var AcctName = document.getElementById("AcctName");

    let userId = event.target.value;
    let message = "";
    for (let index = 0; index < AccountDetails.length; index++) {
        if(userId.length < 10){
            message = "is less than the digit"
        }
        else if(userId.length > 10){
            message = "more than the digit"
        }

        else{
            if (AccountDetails[index].accountNumber == userId){
                AcctName.innerHTML = AccountDetails[index].accountName
                break; 
            }
            else{
                message = "invalid account details"
            }
        }
        AcctName.innerHTML = message
    }
}

function Aisha(event){
    let response = document.getElementById("response")
    let balance = document.getElementById("activeAccount").value
    let bringBalance = document.getElementById("balanceAccount").value
    let balancesheet = document.getElementById("balanceInput").value
    let balanceshit = Number(balancesheet)

    if (balance == true){
        if(bringBalance == true && balancesheet > 0){
            response.innerHTML = "Your balance $" + balanceshit
        }
        else if(bringBalance == false){
            response.innerHTML = "Your account is no longer active"
        }
        else if(balancesheet == 0){
            response.innerHTML = "Insufficient fund or your acct is empty"
        }
        else if(balancesheet < 0){
            response.innerHTML = "Your account is negative contact your bank manager"
        }
    }
    else{
        response.innerHTML = "Thank you have a nice day"
    }
    
}
