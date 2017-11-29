class HomeCtrl {
    
    constructor(TestService, API) {
        'ngInject'

        this.API = API;
        this.TestService = TestService;
    }

    $onInit() {
        console.log('Home Controller');
        
        //this.TestService.getData();
    }
}

export default HomeCtrl;
