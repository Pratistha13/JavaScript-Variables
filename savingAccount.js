// 05_variables_warmup_5 JavasScript code

function calculate() {
    var StartingBalance= Number(document.getElementById("txtStartingBalance").value);
    var AnnualInterestRate= Number(document.getElementById("txtInterestRate").value);
    
    var output1;
    var y= StartingBalance+(AnnualInterestRate/100)*StartingBalance;
    
    output1= "1."+"year:"+ y.toFixed(2);

    
    var output2;
    var x= y+(AnnualInterestRate/100)*y;

    output2= "2. "+"year: "+ x.toFixed(2) ;
   
    document.getElementById("pOutput").innerHTML= output1 + "<br/>" + output2;

}