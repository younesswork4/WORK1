
let num1=10
let num2=11
document.getElementById("num1-bl").textContent=num1
document.getElementById("num2-bl").textContent=num2
let sum=num1+num2
console.log(sum)
document.getElementById("sumbl").textContent= " " + sum
let startgamebl=document.getElementById("perbl")
let msgbl=document.getElementById("msg")

function startgame(){
    let result = sum*100
    startgamebl.textContent =" Per: " + result + "$"
    if(result<5000){
        msgbl.innerText=" Non Valide HI,What do you doing"

    }else{
        let msg = "non valide"
        msgbl.textContent=msg
    }

}





