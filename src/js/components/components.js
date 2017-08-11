import { headerComponent, footerComponent } from './commonComponent/common.component';
import { homeComponent } from './homeComponent/home.component';
import rootComponent from './rootComponent/root.component';

const components = angular
    .module('components',[])
    .component('rootComponent', rootComponent)
    .component('headerComponent', headerComponent)
    .component('footerComponent', footerComponent)
    .component('homeComponent', homeComponent)
    .name;

export default components;