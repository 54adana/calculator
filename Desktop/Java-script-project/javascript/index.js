function akanEntry(){

    var CC=parseInt(document.getElementById("century").value);
    var YY=parseInt(document.getElementById("year").value);
    var MM=parseInt(document.getElementById("month").value);
    var DD=parseInt(document.getElementById("day").value);

    var day = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

    alert("Your Birthday is "+" "+ DD+ " "+ MM +" " + CC + YY);

    var gender=parseInt(document.querySelector('input[name="gender"]:checked').value);




 
if(gender==1)
{
 alert ("You are  Female");  


 if (day===0){
alert("your akan name should be Akosua");
}


else if (day===1){
    alert("your akan name should be Adwoa");     
}

else if (day===2){
    alert("your akan name should be Abenaa");
}
else if (day===3){
    alert("your akan name should be Akua");
}

else if (day===4){
      alert("your akan name should be Yaa");
}
else if (day===5){
    alert("your akan name should be Afua");
}
else if (day===6){
    alert("your akan name should be Ama");
}
else{
    alert("error");
}
}
 
if(gender==2)
{
 alert ("You are  Male");  


 if (day===0){
alert("your akan name should be kwasi");
}


else if (day===1){
    alert("your akan name should be kwadao");     
}

else if (day===2){
    alert("your akan name should be kwabena");
}
else if (day===3){
    alert("your akan name should be kwaku");
}

else if (day===4){
      alert("your akan name should be Yaw");
}
else if (day===5){
    alert("your akan name should be kofi");
}
else if (day===6){
    alert("your akan name should be kwame");
}
else{
    alert("error");
}
}
}

akanEntry();









