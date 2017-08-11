//"use strict"
class TestService {
    
    constructor(API, $http){
        'ngInject';
        
        this.API = API;        
        this.$http = $http;
    }
    getData(){
        return this.$http({ method: 'GET', url:`${this.API}/home`})
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
}
//TestService.$inject = ['API', '$http'];

export default TestService;