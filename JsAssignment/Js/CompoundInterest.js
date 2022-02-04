function calculateInterest(){
    var p = document.getElementById("principle").value;
     console.log(p);
    var r = document.getElementById("intrest").value;
    console.log(r);
    var n = document.getElementById("period").value;
    console.log(n);
    var ans = p*(Math.pow((1+r/100),n));
    console.log(ans);
    document.getElementById("ans").innerHTML= "answer is : "+ans;
    
}