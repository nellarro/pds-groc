var require:any
require('angular')
require('@uirouter/angularjs')
const app = angular.module('groceryApp', ['ui.router'])

// Init State (singleton state)
app.factory('List', function(){
return {
    data: [
      { text:'Milk', inCart: true, id: 1 },
      { text:'Eggs', inCart: false, id: 2 }
    ],
    delete: function(id) {
      this.data = this.data.filter(item => id !== item.id)
    }
  }
})
// Controller
app.controller('GroceryAppController', ['$scope', 'List', function($scope, List) {
    let groceryList = this
    groceryList.items = List.data

  // Methods
  groceryList.addItem = () => {
    groceryList.items.push({
      text: groceryList.itemText,
      inCart: false,
      id: new Date().getTime()
    })
    groceryList.itemText = ''
  }
  groceryList.update = id => {
    groceryList.items = groceryList.items.map(function(groceries) {
      if (groceries.id === id) {
        console.log(groceries.inCart = !groceries.inCart)
        return groceries
      }
      return groceries
    })
  }
  groceryList.remaining = () => {
    return groceryList.items.filter(item => !item.inCart).length
  }
  groceryList.delete = id => {
    List.delete(id)
    groceryList.items = List.data;
  }
  groceryList.send = () => {
    return groceryList.items.filter(groceries => groceries.inCart)
  }
}])

// Routing
app.config(function($stateProvider, $urlRouterProvider) {
  let checkoutDone = {
    name: 'checkout',
    url: '/checkout',
    templateUrl: './views/checkout.html'
  }
  let checkoutNeed = {
    name: 'need',
    url: '/list',
    templateUrl: './views/list.html'
  }
  $stateProvider.state(checkoutDone)
  $stateProvider.state(checkoutNeed)
  $urlRouterProvider.otherwise('/list')
})
