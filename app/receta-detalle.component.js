System.register(['angular2/core', 'angular2/router', './receta.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, receta_service_1;
    var RecetaDetalleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (receta_service_1_1) {
                receta_service_1 = receta_service_1_1;
            }],
        execute: function() {
            RecetaDetalleComponent = (function () {
                function RecetaDetalleComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                RecetaDetalleComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    this.receta = this._service.getReceta(id);
                };
                RecetaDetalleComponent = __decorate([
                    core_1.Component({
                        selector: 'mlr-receta-detalle',
                        providers: [
                            receta_service_1.RecetaService
                        ]
                    }),
                    core_1.View({
                        template: "\n\t<div class=\"recetas\">\n\t\t<div *ngIf=\"receta\">\n            <div class=\"contenido-recetas col-xs-12 col-sm-10 col-md-12 col-lg-12\">\n                <div class=\"todas-recetas detalles-recetas col-xs-12 col-sm-12 col-md-9 col-lg-6\">\n                    <h2>{{receta.nombrereceta}}</h2>\n                    <div class=\"recetas-1 col-xs-12 col-sm-11 col-md-11 col-lg-11\">\n                        <div class=\"estilo-add\">\n                            <div class=\"receta-der col-xs-4 col-sm-3 col-md-4 cl-lg-4\">\n                                <div class=\"btn-recetas border-bottom col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                    <div class=\"btn-recetas-est1 col-xs-5 col-sm-12 col-md-5 col-lg-5\"><a href=\"\" class=\"button btn-estilo btn-editar col-xs-12 col-sm-12 col-md-12 col-lg-12\"><img src=\"./assets/images/note35.png\"></a></div>\n                                    <div class=\"btn-recetas-est2 col-xs-5 col-sm-12 col-md-5 col-lg-5\"><a href=\"\" class=\"button btn-estilo btn-eliminar col-xs-12 col-sm-12 col-md-12 col-lg-12\"><img src=\"./assets/images/eliminar1.png\"></a></div>\n                                </div>\n                                <ul>\n                                    <li class=\"border-bottom\">{{receta.tiemporeceta}} min</li>\n                                    <li class=\"border-bottom\">{{receta.numpersonas}} personas</li>\n                                        <li class=\"border-bottom\">{{receta.dificultad}}</li>\n                                    <li>\n                                        <div class=\"contenido-tags\">\n                                            <ul>\n                                                <li class=\"tags-list btn\" *ngFor=\"#tag of receta.tags\"><a href=\"\">{{tag}}</a></li>\n                                            </ul>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"receta-izq col-xs-7 col-sm-8 col-md-7 col-lg-7\">\n                                <div class=\"add-ingredientes\">\n                                    <h1>Ingredientes:</h1>\n                                    <ul>\n                                        <li *ngFor=\"#ingrediente of receta.ingredientes\">\n                                            <h4>{{ingrediente}}</h4>\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                    <div class=\"add-preparacion\">\n                                        <h1>Preparaci\u00F3n:</h1>\n                                        <ul>\n                                            <li *ngFor=\"#paso of receta.pasos\">\n                                                <h4> - {{paso}}</h4>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\t</div>\n    ",
                        directives: [RecetaDetalleComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, receta_service_1.RecetaService])
                ], RecetaDetalleComponent);
                return RecetaDetalleComponent;
            })();
            exports_1("RecetaDetalleComponent", RecetaDetalleComponent);
        }
    }
});
//# sourceMappingURL=receta-detalle.component.js.map