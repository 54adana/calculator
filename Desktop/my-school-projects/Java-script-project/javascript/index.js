function userInfo(){
    let century=document.forms["myForm"]["century"].value
    let year=document.forms["myForm"]["year"].value
    let month=document.forms["myForm"]["month"].value
    let day=document.forms["myForm"]["day"].value
    let gender=document.forms["myForm"]["gender"].value

}


var cc= parseInt(prompt("Enter the first two digits of the century you were born"))
var yy= parseInt(prompt("Enter  the last two digitsof the year you were born"))
var mm= parseInt(prompt("Enter the two digits of the month you were born"))
var dd= parseInt(prompt("enter the digit of the day you were born"))

//alert(Your Birthday is "+" "+ dd + " "+ mm +" " + cc + yy" )

var day = parseInt( (cc/4) -
alert("The day of the week you were born is;" + day);
var gender=prompt ("Enter the number that represents your gender. 1= Female 2= Male ");
 
if(gender===1)
{
 alert ("You are  Female");  
}

else if (century==""){
alert("input the correct century");
}


else if (year==""){
    alert("input the correct year");     
}

else if (month==""){
    alert("input the correct month");
}
else if (dayofmonth=""){
    alert("input the day of the week");
}




