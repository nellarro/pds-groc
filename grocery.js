
angular.module('groceryApp', ['ui.router'])
  .controller('GroceryAppController', function() {
    let groceryList = this
    groceryList.items = [
      { text:'learn AngularJS', inCart: true },
      { text:'build an AngularJS app', inCart: false }
    ]
 
    groceryList.addItem = function() {
      groceryList.items.push({ text: groceryList.groceryText, inCart: false })
      groceryList.groceryText = ''
    }
 
    groceryList.remaining = function() {
      return groceryList.items.filter(item => !item.inCart).length
    }
 
    groceryList.archive = function() {
     groceryList.items = groceryList.itemss.filter(item => !item.inCart)
    }
  })
  .config(function($stateProvider) {
    let standardState = {
      name: 'home',
      url: '/index',
      templateUrl: 'index.html'
    }
    let checkoutState = {
      name: 'checkout',
      url: '/done',
      templateUrl: 'done.html'
    }
    $stateProvider.state(checkoutState)
    $stateProvider.state(standardState)
  })