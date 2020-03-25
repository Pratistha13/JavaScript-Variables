// 05_variables_warmup_4 JavasScript code


function showHoursAndMinutes() {
    var Minutes= Number(document.getElementById("txtMinutes").value);
    var x= Minutes % 60;
    var y= (Minutes - x)/60;
    var output;
    output= y + " h " + x +" min";
    document.getElementById("pOutput").innerHTML= output;
}


