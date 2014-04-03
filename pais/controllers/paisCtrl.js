function ListarPaisCtrl($scope, $location, Restangular) {
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
				$scope.paises = Restangular.all("pais").getList().$object;
			});
		}
	}
}

function EditarPaisCtrl($scope, $location, Restangular, pais){
	//Debug
	console.log(pais);

	var original = pais;
	$scope.pais = Restangular.copy(original);

	$scope.salvarPais = function() {
		$scope.pais.put().then(function() {
			$location.path('/endereco/pais');
		});
	};

}

function CadastrarPaisCtrl($scope, $location, Restangular) {
	$scope.salvarPais = function() {
		Restangular.all('pais').post($scope.pais).then(function(pais) {
			$location.path('/endereco/pais');
		});
	}
}