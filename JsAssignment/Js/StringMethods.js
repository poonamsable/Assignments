function myFunction() {
   var str ="Cybage Software Pvt Ltd"
   console.log(str)
    var ch = document.getElementById("ch").value;
    var res=str.includes
    console.log(ch)
    if(str.includes(ch)){
        document.getElementById("oc").innerHTML ="first occurence of this letter is at index " +str.indexOf(ch);
    }
    else{
            document.getElementById("oc").innerHTML ="String does not contain this character ";
    }
    document.getElementById("extractStr").innerHTML =str+" is populary known as "+str.substr(0,15);
    document.getElementById("lower").innerHTML =str.toLowerCase();
    document.getElementById("uppr").innerHTML =str.toUpperCase();
} 
