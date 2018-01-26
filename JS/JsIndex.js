function nextPage(){       
	 var lastname = document.forms[0].elements[0].value;
     var firstname = document.forms[0].elements[1].value;
     var email = document.forms[0].elements[2].value;
     var password = document.forms[0].elements[3].value;
     var day = document.forms[0].elements[4].value;
     var year = document.forms[0].elements[6].value;
     var phone = document.forms[0].elements[8].value;

     if (lastname == "" || firstname == "" || email == "" || password == "" ||
     	day == "" || year == "" || phone == "") {
     	document.forms[0].elements[0].value = "";
     	document.forms[0].elements[1].value = "";
     	document.forms[0].elements[2].value = "";
     	document.forms[0].elements[3].value = "";
     	document.forms[0].elements[4].value = "";
     	document.forms[0].elements[6].value = "";
     	document.forms[0].elements[8].value = "";
     }
     else{
     	window.location="listTeamU23.html";
     }
} 