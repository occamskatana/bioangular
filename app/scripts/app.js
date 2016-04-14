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
				});
	}

	angular
		.module('todo', ['ui.router', 'firebase'])
		.config(config);
})();