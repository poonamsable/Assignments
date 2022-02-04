var element="";
var array =[];
for (var index = 1; index <= 100; index++) {
    var num =index; 
    array.push(num);
}
console.log(array)
for (var index = 0; index < array.length; index++) {
    element += array[index]+" ";
    if(index%10==0&&array[index]>=10)
        element +="<br>"
     document.getElementById("p1").innerHTML=element;
}
