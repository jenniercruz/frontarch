import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';


import routing from './routing/routing';
import components from './components/components';
import services from './services/services';

angular
    .module('app', [services, uiRouter, components])
    .config(routing)
    .constant('API', 'http://api.express-jenniercruz.c9users.io')
    .name;
    