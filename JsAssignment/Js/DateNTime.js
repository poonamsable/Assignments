var t = new Date();
document.getElementById('d1').innerHTML=t;
var hr = t.getHours();
console.log(hr);
if(hr<12){
    document.getElementById('d').innerHTML="Good Morning ";
}
else if(hr>12&&hr<17){
    document.getElementById('d').innerHTML="Good Afternoon ";
}
else{
    document.getElementById('d').innerHTML="Good Night ";
}
