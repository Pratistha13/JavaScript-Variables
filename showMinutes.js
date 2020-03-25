// 05_variables_warmup_3 JavasScript code

function showMinutes() {
    var Hours= Number(document.getElementById("txtHours").value);
    var x= Hours*60;
    var Minutes= Number(document.getElementById("txtMinutes").value);
    
    var output;
    output= (x + Minutes) + " minutes" ;
    document.getElementById("pOutput").innerHTML= output;
}


