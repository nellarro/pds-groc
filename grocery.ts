const app = angular.module('groceryApp', ['ui.router']); 

// Controller (::State::)
app.controller('GroceryAppController', function() {
    let groceryList = this
    groceryList.items = [
      { text:'Milk', inCart: true, id: 1 },
      { text:'Eggs', inCart: false, id: 2 }
    ]

  // Methods
  groceryList.addItem = () => {
    groceryList.items.push({ 
      text: groceryList.itemText, 
      inCart: false, 
      id: new Date().getTime() 
    })
    groceryList.itemText = ''
  }
  groceryList.remaining = () => {
    return groceryList.items.filter(item => !item.inCart).length
  }
  groceryList.delete = id => {
    groceryList.items = groceryList.items.filter(item => item.id !== id)
  }
  groceryList.send = () => {
    return groceryList.items.filter(groceries => groceries.inCart)
  }
})

// Routing
app.config(function($stateProvider, $urlRouterProvider) {
  let checkoutDone = {
    name: 'checkout',
    url: '/checkout',
    templateUrl: 'views/checkout.html'
  }
  let checkoutNeed = {
    name: 'need',
    url: '/list',
    templateUrl: 'views/list.html'
  }
  $stateProvider.state(checkoutDone)
  $stateProvider.state(checkoutNeed)
  $urlRouterProvider.otherwise('/list')
})