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
    var RecetasCategoriasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RecetasCategoriasComponent = (function () {
                function RecetasCategoriasComponent() {
                }
                RecetasCategoriasComponent = __decorate([
                    core_1.Component({
                        selector: 'mlr-recetas-categorias'
                    }),
                    core_1.View({
                        template: "\n\t<div class=\"home-izq col-xs-11 col-sm-4 col-md-4 col-lg-4\">\n\t\t<div class=\"collapse navbar-collapse menu-desplegable\" collapse=\"isCollapsed\">\n\t\t\t<div class=\"rh-pestania menu-desplegable\">\n\t\t\t\t<h2>Recetas por Categor\u00EDas</h2>\n\t\t\t</div>\n\t\t\t<div class=\"rh-contenido\">\n\t\t\t\t<div>\n\t\t\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t\t\t\t<li><a href=\"#/categoriaArroz\">Arroz</a></li>\n\t\t\t\t\t\t<li><a href=\"#/categoriaPollo\">Pollo</a></li>\n\t\t\t\t\t\t<li><a href=\"#/categoriaCarnes\">Carnes</a></li>\n\t\t\t\t\t\t<li><a href=\"#/categoriaPastas\">Pastas</a></li>\n\t\t\t\t\t\t<li><a href=\"#/categoriaPostres\">Postres</a></li>\n\t\t\t\t\t\t<li><a href=\"#/categoriaSana\">Fitness</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecetasCategoriasComponent);
                return RecetasCategoriasComponent;
            })();
            exports_1("RecetasCategoriasComponent", RecetasCategoriasComponent);
        }
    }
});
//# sourceMappingURL=recetas-categorias.component.js.map