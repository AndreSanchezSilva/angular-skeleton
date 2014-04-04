angular.module('Cidade', []).controller('ListarCidadeCtrl', function($scope, $rootScope,  $location) {
	
	$scope.cidades = [];
	console.log($scope.cidades);

});

angular.module('Cidade').controller('EditarCidadeCtrl', function($scope, $rootScope, $location){
	
	$scope.cidade = {};

});

angular.module('Cidade').controller('CadastrarCidadeCtrl', function($scope, $rootScope, $location) {
	
	$scope.formCidade = {};

});