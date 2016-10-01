(function(){
  'use strict';
  angular.module("ShoppingListApp", [])
  .controller("ShoppingListController", ShoppingListController)
  .controller("ShoppingListBoughtController", ShoppingListBoughtController)
  .service("ShoppingListService", ShoppingListService);

  ShoppingListController.$inject = ["ShoppingListService"];
  function ShoppingListController(ShoppingListService){
    var shoppingList = this;
    ShoppingListService.initializeArray();
    shoppingList.items = ShoppingListService.getItems();
    shoppingList.CheckOffItem = function(itemIndex){
      ShoppingListService.markItemBought(itemIndex);
    };
  }

  ShoppingListBoughtController.$inject = ["ShoppingListService"];
  function ShoppingListBoughtController(ShoppingListService){
    var shoppingListBought = this;
    shoppingListBought.items = ShoppingListService.getBoughtItems();
  }

  function ShoppingListService() {
    var service = this;
    var items = [];
    var itemsBought = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity,
        bought: false
      };
      items.push(item);
    };

    service.markItemBought = function (itemIndex) {
      itemsBought.push(items[itemIndex]);
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return itemsBought;
    };

    service.initializeArray = function(){
      service.addItem("Coockies and Cream", "50 bags");
      service.addItem("Milk", "10 liters");
      service.addItem("Bread", "2 packs");
      service.addItem("Yogurt", "20 bottles");
      service.addItem("Cake", "7 three layers");
      service.addItem("Beer", "10 6-packs");
      service.addItem("Nutella", "10 cans");
      service.addItem("Chicken", "10 thighs");
    };

  }

})();
