// 05_variables_warmup_1 JavasScript code

function showEmail() {
    var Givenname= document.getElementById("txtGivenName").value;
    var Surname= document.getElementById("txtSurname").value;
    
    var email;
    email= Givenname +"."+ Surname + "@myy.haaga-helia.fi";
    document.getElementById("pOutput").innerHTML= email;
}




