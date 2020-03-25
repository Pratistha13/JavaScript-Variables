// 05_variables_warmup_2 JavasScript code
function add() {
    var Firstnumber= Number(document.getElementById("txtFirst").value);
    var Secondnumber= Number(document.getElementById("txtSecond").value);
    
    var output;
    output= Firstnumber + "+" + Secondnumber + "="+ (Firstnumber+Secondnumber) ;
    document.getElementById("pOutput").innerHTML= output;
}


