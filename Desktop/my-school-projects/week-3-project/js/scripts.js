$(document).ready(function(){
    $("form").submit(function(event){
        var name= $("input#name").val();
        alert("Hi," + name + " , " + "Your order will be delivered at your place");

        event.preventDefault();
    });
    
});

