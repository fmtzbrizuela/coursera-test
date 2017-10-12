(function () {
'use strict';
angular.module('ShoppingListApp', [])
	.controller('ShoppingListAddController', ShoppingListAddController)
	.controller('ShoppingListShowController', ShoppingListShowController)
	.service('ShoppingListService', ShoppingListService);
ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
	var itemAdd = this;
	itemAdd.name = '';
	itemAdd.qty = '';
	itemAdd.addItem = function () {
		ShoppingListService.addItem(itemAdd.name, itemAdd.qty);
	}
}

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
	var showList = this;
	showList.items = ShoppingListService.getItems();
	showList.delItem = function (itemIndex) {
		ShoppingListService.delItem(itemIndex);
	}
}

function ShoppingListService() {
	var servicio = this;
	var items = [];

	servicio.addItem = function (itemName, quantity) {
		var item = {name : itemName, qty : quantity};
		items.push(item);
	}
	servicio.delItem = function (itemIndex) {
		items.splice(itemIndex, 1);
	}
	servicio.getItems = function () {
		return items;
	}
}

})();