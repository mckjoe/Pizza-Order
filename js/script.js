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

Pizza.prototype.toppingCost = function() {
  var toppingCost = 0;
  if (this.toppings.length === 1) {
    toppingCost += 1;
  } else if (this.toppings.length === 2) {
    toppingCost += 2;
  } else if (this.toppings.length === 3) {
    toppingCost += 3;
  } else if (this.toppings.length === 4) {
    toppingCost += 4;
  } else if (this.toppings.length === 5) {
    toppingCost += 5;
  } else if (this.toppings.length === 6) {
    toppingCost += 6;
  } else if (this.toppings.length === 7) {
    toppingCost += 7;
  } else if (this.toppings.length === 8) {
    toppingCost += 8;
  } else if (this.toppings.length === 9) {
    toppingCost += 9;
  } else if (this.toppings.length === 10) {
    toppingCost += 10;
  } else if (this.toppings.length === 11) {
    toppingCost += 11;
  } else if (this.toppings.length === 12) {
    toppingCost += 12;
  }
  return toppingCost;
}

$(document).ready(function() {
  var toppings = [];
  $("#pizza").submit(function(event) {
    event.preventDefault();
    // debugger;
    var size = $("#size").val();
    var crust = $("#crust").val();
    var newPizza = new Pizza(size, crust, toppings);
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });
    var flatRate = newPizza.basicCost();
    $(".initTotal").text(flatRate);
    var toppingTotal = newPizza.toppingCost();
    $(".toppingTotal").text(toppingTotal);
    var pizzaTotal = flatRate += toppingTotal;
    $(".finalTotal").text(pizzaTotal);
    $(".crust").text(crust);
    $(".size").text(size);
    $("#pizza").hide();
    $(".receipt").show(2000);
  });
});
