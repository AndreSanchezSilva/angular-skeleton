angular.module('time02', ['restangular', 'ngRoute']).
  config(function($routeProvider, RestangularProvider) {
    //Configurações do Roteador
    $routeProvider.
      when('/pais', {
        controller:ListarPaisCtrl, 
        templateUrl:'./pais/views/gridPais.html'
      }).
      when('/pais/editar/:idPais', {
        //controller:EditarPaisCtrl, 
        templateUrl:'./pais/views/formPais.html',
        resolve: {
          pais: function(Restangular, $route){
            //return Restangular.one('projects', $route.current.params.idPais).get();
          }
        }
      }).
      when('/pais/cadastrar', {
        //controller:CadastrarPaisCtrl, 
        templateUrl:'./pais/views/formPais.html'
      }).
      otherwise({redirectTo:'/'});
      

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
