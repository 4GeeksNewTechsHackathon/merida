import {
	Component,
	View,
	OnInit
} from 'angular2/core';

import {RouteParams, Router } from 'angular2/router';
import {Receta} from './receta';
import {RecetaService} from './receta.service';

@Component({
    selector: 'mlr-receta-detalle',
	providers: [
        RecetaService
    ]
})

@View({
    template: `
	<div class="recetas">
		<div *ngIf="receta">
            <div class="contenido-recetas col-xs-12 col-sm-10 col-md-12 col-lg-12">
                <div class="todas-recetas detalles-recetas col-xs-12 col-sm-12 col-md-9 col-lg-6">
                    <h2>{{receta.nombrereceta}}</h2>
                    <div class="recetas-1 col-xs-12 col-sm-11 col-md-11 col-lg-11">
                        <div class="estilo-add">
                            <div class="receta-der col-xs-4 col-sm-3 col-md-4 cl-lg-4">
                                <div class="btn-recetas border-bottom col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="btn-recetas-est1 col-xs-5 col-sm-12 col-md-5 col-lg-5"><a href="" class="button btn-estilo btn-editar col-xs-12 col-sm-12 col-md-12 col-lg-12"><img src="./assets/images/note35.png"></a></div>
                                    <div class="btn-recetas-est2 col-xs-5 col-sm-12 col-md-5 col-lg-5"><a href="" class="button btn-estilo btn-eliminar col-xs-12 col-sm-12 col-md-12 col-lg-12"><img src="./assets/images/eliminar1.png"></a></div>
                                </div>
                                <ul>
                                    <li class="border-bottom">{{receta.tiemporeceta}} min</li>
                                    <li class="border-bottom">{{receta.numpersonas}} personas</li>
                                        <li class="border-bottom">{{receta.dificultad}}</li>
                                    <li>
                                        <div class="contenido-tags">
                                            <ul>
                                                <li class="tags-list btn" *ngFor="#tag of receta.tags"><a href="">{{tag}}</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="receta-izq col-xs-7 col-sm-8 col-md-7 col-lg-7">
                                <div class="add-ingredientes">
                                    <h1>Ingredientes:</h1>
                                    <ul>
                                        <li *ngFor="#ingrediente of receta.ingredientes">
                                            <h4>{{ingrediente}}</h4>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="add-preparacion">
                                        <h1>Preparación:</h1>
                                        <ul>
                                            <li *ngFor="#paso of receta.pasos">
                                                <h4> - {{paso}}</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
    `,
	directives: [RecetaDetalleComponent]
})

export class RecetaDetalleComponent implements OnInit { 

    receta: Receta;

    constructor(private _router:Router, private _routeParams: RouteParams, private _service: RecetaService) { }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this.receta = this._service.getReceta(id)
    }

}