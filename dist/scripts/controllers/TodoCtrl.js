(function(){
	function TodoCtrl($firebaseArray, $scope){
		var ref = new Firebase('https://bioangular.firebaseio.com/todos')
		$scope.todos = $firebaseArray(ref);

		$scope.addTodo = function(todo){
			$scope.todos.$add({title: todo, date: Firebase.ServerValue.TIMESTAMP, completed: false });
		}

		$scope.old = function(todo){
			return	Date.now() - todo.date >=  (7 * 24 * 3600 * 1000)
		}

		$scope.todo;
	}

	angular
		.module('todo')
		.controller('TodoCtrl', ['$firebaseArray', '$scope', TodoCtrl]);
})();