import {
	Component,
	View,
	OnInit
} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Receta} from './receta';
import {RecetaService} from './receta.service';


@Component({
    selector: 'mlr-recetas-ultimas',
	providers: [
        RecetaService
    ]
})

@View({
    template: `
	<div class="home-der col-xs-11 col-sm-7 col-md-7 col-lg-7">
		<div class="rh-pestania">
			<h2>Últimas Recetas</h2>
			<div class="rh-contenido-home-der col-xs-12 col-sm-12 col-md-11 col-lg-11">
				<ul>
		            <li *ngFor="#receta of recetas; #i = index" class="receta-home col-xs-11 col-sm-11 col-md-6 col-lg-6">
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
							<div cass="rh-bottom-izq col-xs-12 col-sm-6 col-md-6 col-lg-6">
						</div>
						<div class="rh-bottom-der col-xs-12 col-sm-6 col-md-6 col-lg-6">
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

export class RecetasUltimasComponent implements OnInit { 

	title = 'Tour of Recetas';
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
