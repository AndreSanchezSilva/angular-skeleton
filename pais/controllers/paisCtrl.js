angular.module('Pais', []).controller('ListarPaisCtrl', function($scope,  $rootScope, $location, Restangular) {
	//Acessa o servidor RestFull e recupera toda listagem de paises.
	//$scope.paises = Restangular.all('pais').getList().$object;
	Restangular.all('pais').getList().then(function(paises) {
		$scope.paises = paises;

		//Debug
		console.log($scope.paises);
	});

	$scope.removerPais = function(pais){
		if (confirm('Desejar deletar o pais '+pais.nome+' ?')) {
			pais.remove().then(function() {
				Restangular.all('pais').getList().then(function(paises) {
					$scope.paises = paises;

					//Debug
					console.log($scope.paises);
				});
			});
		}
	}
});

angular.module('Pais').controller('EditarPaisCtrl', function($scope, $rootScope, $location, Restangular, pais){
	//Debug
	console.log(pais);

	var original = pais;
	$scope.pais = Restangular.copy(original);

	$scope.salvarPais = function() {
		$scope.pais.put().then(function() {
			$location.path('/endereco/pais');
		});
	};

});

angular.module('Pais').controller('CadastrarPaisCtrl', function($scope, $location, Restangular) {
	$scope.salvarPais = function() {
		Restangular.all('pais').post($scope.pais).then(function(pais) {
			$location.path('/endereco/pais');
		});
	}
});