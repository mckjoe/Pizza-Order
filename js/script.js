function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.basicCost = function() {
  var cost = 0;
  if (this.size === "Small") {
    cost += 5;
  } else if (this.size === "Medium") {
    cost += 7;
  } else if (this.size === "Large") {
    cost += 9;
  } else if (this.size === "XLRG") {
    cost += 10;
  }
  return cost;
}

$(document).ready(function() {
  var toppings = [];
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var crust = $("#crust").val();
    var newPizza = new Pizza(size, crust, toppings);
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });
    console.log(newPizza);
  });
});
