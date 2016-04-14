(function(){
	function TodoCtrl($firebaseArray, $scope){
		var ref = new Firebase('https://bioangular.firebaseio.com/todos')
		$scope.todos = $firebaseArray(ref);

		$scope.addTodo = function(todo){
			$scope.todos.$add({title: todo});
		}

		$scope.todo;
	}

	angular
		.module('todo')
		.controller('TodoCtrl', ['$firebaseArray', '$scope', TodoCtrl]);
})();