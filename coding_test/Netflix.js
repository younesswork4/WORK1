
let contentEL = document.getElementById("content-co")

//i=content.length
//while(i>=0){
    //contentEL.textContent += content[i] + " "
   // i++
//}
function text(){
    let content=[
        "Hi, I'm youness mchaar I'm 23 years old"
        ,"and thank you for watching this conntent"
        ,"good bay"
    ]
    for (let i=0;i<content.length;i++){
        contentEL.textContent+= content[i] + " "
    }
}