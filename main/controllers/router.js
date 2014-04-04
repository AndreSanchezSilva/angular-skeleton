angular.module('time02', ['restangular', 'ngRoute', 'Pais', 'Cidade']).
  config(function($routeProvider, $locationProvider, RestangularProvider) {
    //Configurações do Roteador
    $routeProvider.
      when('/endereco/pais', {
        templateUrl:'./pais/views/gridPais.html',
       controller:'ListarPaisCtrl'
      }).
      when('/endereco/pais/cadastrar', {
        templateUrl:'./pais/views/formPais.html',
        controller:'CadastrarPaisCtrl'
      }).
      when('/endereco/pais/editar/:idPais', {
        templateUrl:'./pais/views/formPais.html',
        controller:'EditarPaisCtrl', 
        resolve: {
          pais: function(Restangular, $route){
            return Restangular.one('pais', $route.current.params.idPais).get();
          }
        }
      }).
      when('/endereco/uf', {
        templateUrl:'./uf/views/gridUf.html',
        //controller:CadastrarPaisCtrl
      }).
      when('/endereco/uf/cadastrar', {
        templateUrl:'./uf/views/formUf.html',
        //controller:CadastrarPaisCtrl 
      }).
      when('/endereco/uf/editar/:idUf', {
        templateUrl:'./uf/views/formUf.html',
        /*controller:CadastrarPaisCtrl,
        resolve: {
          pais: function(Restangular, $route){
            return Restangular.one('pais', $route.current.params.idPais).get();
          }
        }*/
      }).
      when('/endereco/cidade', {
        templateUrl:'./cidade/views/gridCidadeDistrito.html',
        controller:'ListarCidadeCtrl'
      }).
      when('/endereco/cidade/cadastrar', {
        templateUrl:'./cidade/views/formCidadeDistrito.html',
        controller:'CadastrarCidadeCtrl'
      }).
      when('/endereco/cidade/editar/:idcidade', {
        templateUrl:'./cidade/views/formCidadeDistrito.html',
        controller:'EditarCidadeCtrl',
        resolve: {
          pais: function(Restangular, $route){
            return Restangular.one('pais', $route.current.params.idPais).get();
          }
        }
      }).
      otherwise({redirectTo:'/'});

      //Retirar o '#' da URL
      $locationProvider.html5Mode(true);
      

      //Configurações do RestAngular
      RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/escoladeti/collections');
      RestangularProvider.setDefaultRequestParams({ apiKey: 'JaNJ-CH7-P_NPvPnGAqoVtZYrySEzFq0' })
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });      
      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      })
  });