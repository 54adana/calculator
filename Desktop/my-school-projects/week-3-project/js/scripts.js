$(document).ready(function(){
    $("form").submit(function(event){
        var name= $("input#name").val();
        alert("Hi," + name + " , " + "Your order will be delivered at your place");

        event.preventDefault();
    });
    
        
    }
});
function pizza(toppings, crust ,size , total , order number) {
    this.toppings= toppings;
    this.crust= crust;
    this.size= size
    this.total= total;
    this.order number= order nember;
    
}
$('btn .cart').click(function){
     var sizePizza = $(".size option:selected").val();
     var toppingsPizza = $(".toppings option:selected").val();
     var crustPizza = $(".crust option:selected").val();
     var total = parseInt(sizePizza) + parseInt(toppingsPizza) + parseInt(crustPizza);
     var order = 1;
     var grandTotal = 0;
}
$("#size").html($(".size option:selected").text() + " - " + sizePizza);
     $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsPizza);
     $("#crust").html($(".crust option:selected").text() + " - " + crustPizza);
     $("#total").html(total);
