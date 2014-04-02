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
      when('/new', {
        //controller:CriarPaisCtrl, 
        templateUrl:'./pais/views/formPais.html'
      }).
      otherwise({redirectTo:'/'});
      

      //Configurações do RestAngular
      RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/angularjs/collections');
      RestangularProvider.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })
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