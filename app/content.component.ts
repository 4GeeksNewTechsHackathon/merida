import {
	Component,
	View
} from 'angular2/core';

import {RecetasCategoriasComponent} from './recetas-categorias.component';
import {RecetasUltimasComponent} from './recetas-ultimas.component';

@Component({
    selector: 'mlr-content'
})

@View({
    template:  `
	<div class="home">
		<div class="contenido-home col-xs-12 col-sm-11 col-md-9 col-lg-8">
			<mlr-recetas-categorias></mlr-recetas-categorias>
			<mlr-recetas-ultimas></mlr-recetas-ultimas>		
		</div>
	</div>
    `,
	directives: [RecetasCategoriasComponent, RecetasUltimasComponent]
})

export class ContentComponent { }