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
    var RecetasComponent;
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
            RecetasComponent = (function () {
                function RecetasComponent(_recetaService) {
                    this._recetaService = _recetaService;
                }
                RecetasComponent.prototype.getRecetas = function () {
                    var _this = this;
                    this._recetaService.getRecetas().then(function (recetas) { return _this.recetas = recetas; });
                };
                RecetasComponent.prototype.ngOnInit = function () {
                    this.getRecetas();
                };
                RecetasComponent.prototype.onSelect = function (receta) { this.selectedReceta = receta; };
                RecetasComponent = __decorate([
                    core_1.Component({
                        selector: 'mlr-recetas',
                        providers: [
                            receta_service_1.RecetaService
                        ]
                    }),
                    core_1.View({
                        template: "\n\t<div class=\"recetas\">\n\t\t<div class=\"contenido-recetas col-xs-12 col-sm-10 col-md-12 col-lg-12\">\n\t\t\t<div class=\"todas-recetas col-xs-12 col-sm-12 col-md-9 col-lg-8\">\n\t\t\t\t<h2>Recetas</h2>\n\t\t\t\t<ul>\n\t\t            <li *ngFor=\"#receta of recetas; #i = index\" class=\"recetas-1 fondo-receta col-xs-11 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t<a [routerLink]=\"['RecetaDetalle', {id: i}]\">\n\t\t\t\t\t\t\t<div class=\"rh-masdatos\">\n\t\t\t\t\t\t\t\t<div class=\"num-personas col-xs-7 col-sm-6 col-md-8 col-lg-8\">\n\t\t\t\t\t\t\t\t\t<h5>Receta para {{receta.numpersonas}} personas</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"tiempo-coccion col-xs-5 col-sm-6 col-md-4 col-lg-4\">\n\t\t\t\t\t\t\t\t\t<h5>{{receta.tiemporeceta}} minutos</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"rh-titulo\">\n\t\t\t\t\t\t\t\t<h2>{{ receta.nombrereceta }}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"contenido-tags\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class=\"tags-list btn\" *ngFor=\"#tag of receta.tags\"><a href=\"\">{{tag}}</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"rh-bottom\">\n\t\t\t\t\t\t\t\t<div class=\"rh-bottom-izq col-xs-12 col-s6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rh-bottom-der col-s-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t<h5>{{receta.dificultad}}</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t            </li>\n\t\t     \t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [receta_service_1.RecetaService])
                ], RecetasComponent);
                return RecetasComponent;
            })();
            exports_1("RecetasComponent", RecetasComponent);
        }
    }
});
//# sourceMappingURL=recetas.component.js.map