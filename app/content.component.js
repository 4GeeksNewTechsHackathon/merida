System.register(['angular2/core', './recetas-categorias.component', './recetas-ultimas.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, recetas_categorias_component_1, recetas_ultimas_component_1;
    var ContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recetas_categorias_component_1_1) {
                recetas_categorias_component_1 = recetas_categorias_component_1_1;
            },
            function (recetas_ultimas_component_1_1) {
                recetas_ultimas_component_1 = recetas_ultimas_component_1_1;
            }],
        execute: function() {
            ContentComponent = (function () {
                function ContentComponent() {
                }
                ContentComponent = __decorate([
                    core_1.Component({
                        selector: 'mlr-content'
                    }),
                    core_1.View({
                        template: "\n\t<div class=\"home\">\n\t\t<div class=\"contenido-home col-xs-12 col-sm-11 col-md-9 col-lg-8\">\n\t\t\t<mlr-recetas-categorias></mlr-recetas-categorias>\n\t\t\t<mlr-recetas-ultimas></mlr-recetas-ultimas>\t\t\n\t\t</div>\n\t</div>\n    ",
                        directives: [recetas_categorias_component_1.RecetasCategoriasComponent, recetas_ultimas_component_1.RecetasUltimasComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContentComponent);
                return ContentComponent;
            })();
            exports_1("ContentComponent", ContentComponent);
        }
    }
});
//# sourceMappingURL=content.component.js.map