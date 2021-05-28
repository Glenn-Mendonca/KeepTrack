var arr = [],attemp=0,count=1;
function input(num,id){
    color='red';
    flash(color,id);
    if(count<=arr.length){
        check(num,arr[count-1]);
        count++;
    }
    else{
        count = 1;
        window.arr.push(num);
        comp(arr);
    }  
}
function check(num,para){
    if(num!=para){
        disableAllBtn();
    }
}
async function comp(arr) {
    disableAllBtn();
    window.arr.push(Math.floor(Math.random() * 9) + 1);
    for(let i=0;i<arr.length;i++){
        await sleep(500)
        flash(color='blue',id=('b'+arr[i]));
    }
    enableAllBtn();
}
function flash(color,id){ 
    document.getElementById(id).style.backgroundColor = color;
    setTimeout(function(id){document.getElementById(id).style.backgroundColor = 'white';},500,id);
}
function disableAllBtn() {
    for(let i=1;i<10;i++){
    document.getElementById("b"+i).disabled = true;}
}
function enableAllBtn() {
    for(let i=1;i<10;i++){
    document.getElementById("b"+i).disabled = false;}
}
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }