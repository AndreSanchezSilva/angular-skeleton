function ListarPaisCtrl($scope, Restangular) {
	//Acessa o servidor RestFull e recupera toda listagem de paises.
	$scope.paises = Restangular.all("pais").getList().$object;
}
