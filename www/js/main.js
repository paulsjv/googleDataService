import angular from 'angular';
import GoogleDataService from './services/googleDataService';
import GoogleQueryService from './services/googleQueryService';
import google from './async/google.js';

export default angular.module('google', []);

google.then(($google) => {
    angular.module('google',[])
        .constant('$google', $google)
        .service('googleDataService', GoogleDataService)
        .service('googleQueryService', GoogleQueryService);
});
