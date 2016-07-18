(function(){
	function TodoCtrl($firebaseArray, $scope){
		var ref = new Firebase('https://bioangular.firebaseio.com/todos')
		$scope.todos = $firebaseArray(ref);

		$scope.addTodo = function(todo){
			$scope.todos.$add({title: todo.title, date: Firebase.ServerValue.TIMESTAMP, completed: false, priority: todo.priority });
			$scope.todo.title = '';
			$scope.todo.priority = '';
		}

		$scope.old = function(todo){
			return	Date.now() - todo.date >=  (7 * 24 * 3600 * 1000)
		}

		$scope.todo;

		$scope.markComplete = function(todo){
			todo.completed = true;
			$scope.todos.$save(todo)
			console.log(todo)
		}

		$scope.markIncomplete = function(todo){
			todo.completed = false;
			$scope.todos.$save(todo)
			console.log(todo)
		}
		
	}

	angular
		.module('todo')
		.controller('TodoCtrl', ['$firebaseArray', '$scope', TodoCtrl]);
})();