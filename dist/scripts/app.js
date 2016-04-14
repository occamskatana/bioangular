(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			})

			$stateProvider
				.state('landing', {
					url: '/',
					controller: 'TodoCtrl',
					templateUrl: 'templates/home.html'
				})

				.state('old', {
					url:'/old',
					controller: 'TodoCtrl',
					templateUrl: 'templates/old.html'
				});
	}

	angular
		.module('todo', ['ui.router', 'firebase'])
		.config(config);
})();