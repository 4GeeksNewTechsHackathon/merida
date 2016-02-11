System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RecetasUltimasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RecetasUltimasComponent = (function () {
                function RecetasUltimasComponent() {
                }
                RecetasUltimasComponent = __decorate([
                    core_1.Component({
                        selector: 'mlr-recetas-ultimas'
                    }),
                    core_1.View({
                        template: "\n\t<div class=\"home-der col-xs-11 col-sm-7 col-md-7 col-lg-7\">\n\t\t<div class=\"rh-pestania\">\n\t\t\t<h2>\u00DAltimas Recetas</h2>\n\t\t</div>\n\t\t<div class=\"rh-contenido-home-der col-xs-12 col-sm-12 col-md-11 col-lg-11\">\n\t\t\t<div class=\"receta-home col-xs-11 col-sm-11 col-md-6 col-lg-6\" ng-repeat=\"(id, receta) in recetas\">\n\t\t\t\t<a href=\"#/detallesRecetas/{{receta._id}}\">\n\t\t\t\t\t<div class=\"rh-masdatos\">\n\t\t\t\t\t\t<div class=\"num-personas col-xs-7 col-sm-6 col-md-8 col-lg-8\">\n\t\t\t\t\t\t\t<h5>Receta para {{receta.numpersonas}} personas</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tiempo-coccion col-xs-5 col-sm-6 col-md-4 col-lg-4\">\n\t\t\t\t\t\t\t<h5>{{receta.tiemporeceta}} minutos</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"rh-titulo\">\n\t\t\t\t\t\t<h2>{{ receta.nombrereceta }}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"contenido-tags\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"tags-list btn\" ng-repeat='tag in receta.tags'><a href=\"\">{{tag.text}}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"rh-bottom\">\n\t\t\t\t\t\t<div class=\"rh-bottom-izq col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rh-bottom-der col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t<h5>{{receta.dificultad}}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecetasUltimasComponent);
                return RecetasUltimasComponent;
            })();
            exports_1("RecetasUltimasComponent", RecetasUltimasComponent);
        }
    }
});
//# sourceMappingURL=recetas-ultimas.component.js.map