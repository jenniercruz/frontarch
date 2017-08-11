const routing = ($stateProvider,  $urlRouterProvider, $locationProvider) => {
    'ngInject';

    $stateProvider
        .state('/', {
            url: '/',
            template: '<h1>HOMEINICIOINDEX</h1>'
        })
        .state('/home',{
            url: '/home',
            component: 'homeComponent'/*,
            resolve: {
                test: function(TestService) {    
                    console.log(TestService.getData());
                }
            }*/
        });
    $urlRouterProvider
        .otherwise('/');
}
export default routing;

