
let countEL = document.getElementById("count-el");
let saveEL=document.getElementById("save-el");
let count=0;
function increment() {
    count = count + 1;
    countEL.innerText = count;
    console.log(count);

}
function save() {
let countStr=count + "-";
    saveEL.innerText += countStr;
    console.log(count);

    }

