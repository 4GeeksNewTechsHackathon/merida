import {
	Component,
	View
} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {CabeceraComponent} from './header.component';
import {ContentComponent} from './content.component';
import {FooterComponent} from './footer.component';

@Component({
    selector: 'libro-recetas',
    providers: [
        ROUTER_PROVIDERS
    ]
})

@View({
    template:  `
    <div id="container" class="container-fluid">
        <div id="contenido" class="row">
            <mlr-header id="header"></mlr-header>
            <div id="content">
                <router-outlet></router-outlet>
            </div>
            <mlr-footer id="footer"></mlr-footer>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, CabeceraComponent, FooterComponent, ContentComponent]

})

@RouteConfig([
    {
        path: '/index',
        name: 'Index',
        component: ContentComponent
    },
    {
        path: '/recetas',
        name: 'Recetas',
        component: ContentComponent
    }
] )

export class LibroRecetasComponents {} 
