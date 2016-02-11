import {
	Component,
	View
} from 'angular2/core';

import {CabeceraComponent} from './header.component';
import {ContentComponent} from './content.component';
import {FooterComponent} from './footer.component';

@Component({
    selector: 'libro-recetas',
})

@View({
    template:  `
    <div id="container" class="container-fluid">
        <div id="contenido" class="row">
            <mlr-header id="header"></mlr-header>
            <mlr-content id="content"></mlr-content>
            <mlr-footer id="footer"></mlr-footer>
        </div>
    </div>
    `,
    directives: [CabeceraComponent, FooterComponent, ContentComponent]
})

export class LibroRecetasComponents {} 
