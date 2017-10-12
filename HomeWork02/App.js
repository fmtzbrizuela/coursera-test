(function(){
'use strict';
angular.module('ShoppingListCheckOff',[])							// Begin module
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var tbctl = this;
	tbctl.items = ShoppingListCheckOffService.getitemstb();
	tbctl.toBuy = function (Ixtobuy) {
		ShoppingListCheckOffService.toBuy(Ixtobuy);
	}
}

// AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var abctl = this;
	abctl.items = ShoppingListCheckOffService.getitemsab();
}

// ShoppingListCheckOffService
function ShoppingListCheckOffService() {
var service = this;
// items to buy
var itemstb = [{name : 'Celphone', qty : 1}, {name : 'TV set', qty : 2},
							 {name : 'Radios', qty : 5}];
// items already bought
var itemsab = [];
service.getitemstb = function () {	// returns items to buy
	return itemstb;
}
service.getitemsab = function () {	// returns items already bought
	return itemsab;
}
service.toBuy = function (Ixtobuy) {		// move from itemtb to itemab
	itemsab.push(itemstb[Ixtobuy]);
	itemstb.splice(Ixtobuy,1);
}

}

})();
