(function () {
'use strict';
angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.search = '';
  ctrl.delMenuItems = function (index) {
    console.log('-->index: ' + index);
    ctrl.items.splice(index,1);
  }
  ctrl.getMatchedMenuItems = function(){
    if(ctrl.search != '') {
      console.log('-->search: ' + ctrl.search);
    var response = MenuSearchService.getMatchedMenuItems(ctrl.search);
    response.then(function(resp) {
      ctrl.items = [];
          console.log('-->length readed: ' + resp.data.menu_items.length);
      for(var i=0; i < resp.data.menu_items.length; i++){
        if(resp.data.menu_items[i].description.toLowerCase().indexOf(ctrl.search.toLowerCase()) !== -1) {
          ctrl.items.push(resp.data.menu_items[i]);
        }
    }
    console.log('-->length filtered: ' + ctrl.items.length);
    return;
  })
  .catch(function (error) {
    console.log(error);
  })
    }
    // if(ctrl.search == '' || ctrl.items.length == 0) {
    //   // display message: Nothing found
    // }
  };
  }
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;
  service.getMatchedMenuItems = function (search){
    var response = $http({
      method: "GET",
      url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
    });
    return response;
}
}
})();
