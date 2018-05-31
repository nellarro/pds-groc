angular.module('todoApp', [])
  .controller('TodoListController', function() {
    let todoList = this
    todoList.todos = [
      { text:'learn AngularJS', done: true },
      { text:'build an AngularJS app', done: false }
    ]
 
    todoList.addTodo = function() {
      todoList.todos.push({ text: todoList.todoText, done: false })
      todoList.todoText = ''
    }
 
    todoList.remaining = function() {
      return todoList.todos.filter(todo => !todo.done).length
    }
 
    todoList.archive = function() {
     todoList.todos = todoList.todos.filter(todo => !todo.done)
    }
  })