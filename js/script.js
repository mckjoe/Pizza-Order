function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.basicCost = function() {
  var cost = 0;
  if (this.size === "1") {
    cost += 5;
  } else if (this.size === "2") {
    cost += 7;
  } else if (this.size === "3") {
    cost += 9;
  } else if (this.size === "4") {
    cost += 10;
  } if ((this.crust === "thin") || (this.crust === "Hand-Tossed")) {
    cost += 2;
  } else if ((this.crust === "Thick") || (this.crust === "Stuffed")) {
    cost += 4;
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
    var flatRate = newPizza.basicCost();
    console.log(flatRate);
  });
});
