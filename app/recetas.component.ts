import {
	Component,
	View,
	OnInit
} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Receta} from './receta';
import {RecetaService} from './receta.service';

@Component({
    selector: 'mlr-recetas',
	providers: [
        RecetaService
    ]
})

@View({
    template: `
	<div class="recetas">
		<div class="contenido-recetas col-xs-12 col-sm-10 col-md-12 col-lg-12">
			<div class="todas-recetas col-xs-12 col-sm-12 col-md-9 col-lg-8">
				<h2>Recetas</h2>
				<ul>
		            <li *ngFor="#receta of recetas; #i = index" class="recetas-1 fondo-receta col-xs-11 col-sm-5 col-md-5 col-lg-5">
						<a [routerLink]="['RecetaDetalle', {id: i}]">
							<div class="rh-masdatos">
								<div class="num-personas col-xs-7 col-sm-6 col-md-8 col-lg-8">
									<h5>Receta para {{receta.numpersonas}} personas</h5>
								</div>
								<div class="tiempo-coccion col-xs-5 col-sm-6 col-md-4 col-lg-4">
									<h5>{{receta.tiemporeceta}} minutos</h5>
								</div>
							</div>
							<div class="rh-titulo">
								<h2>{{ receta.nombrereceta }}</h2>
							</div>
							<div class="contenido-tags">
								<ul>
									<li class="tags-list btn" *ngFor="#tag of receta.tags"><a href="">{{tag}}</a></li>
								</ul>
							</div>
							<div class="rh-bottom">
								<div class="rh-bottom-izq col-xs-12 col-s6 col-md-6 col-lg-6">
								</div>
								<div class="rh-bottom-der col-s-12 col-sm-6 col-md-6 col-lg-6">
									<h5>{{receta.dificultad}}</h5>
								</div>
							</div>
						</a>
		            </li>
		     	</ul>
			</div>
		</div>
	</div>
    `,
	directives: [ROUTER_DIRECTIVES]
})

export class RecetasComponent implements OnInit { 

    recetas: Receta[];
    selectedReceta: Receta;

    constructor(private _recetaService: RecetaService) { }

    getRecetas() {
    this._recetaService.getRecetas().then(recetas => this.recetas = recetas);
    }

    ngOnInit() {
    this.getRecetas();
    }

    onSelect(receta: Receta) { this.selectedReceta = receta; }

}