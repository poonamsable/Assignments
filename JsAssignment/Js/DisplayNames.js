var x = 0;
var array = Array();

function addElement()
{
 array[x] = document.getElementById("text1").value;
 alert(array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function displayArray()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = "<b>List of Student</b><br>"+ e;
}