function ListarPaisCtrl($scope, Restangular) {
	//Acessa o servidor RestFull e recupera toda listagem de paises.
	$scope.paises = Restangular.all("pais").getList().$object;
}

function EditarPaisCtrl($scope, Restangular, pais){
	var original = pais;
  	$scope.pais = Restangular.copy(original);

}

function CadastrarPaisCtrl($scope, Restangular) {

}