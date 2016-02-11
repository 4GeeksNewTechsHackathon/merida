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
    var CabeceraComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CabeceraComponent = (function () {
                function CabeceraComponent() {
                }
                CabeceraComponent = __decorate([
                    core_1.Component({
                        selector: 'mlr-header'
                    }),
                    core_1.View({
                        template: "\n    <div class=\"content-header\" >\n\t\t<div class=\"col-xs-12 col-sm-11 col-md-9 col-lg-8 pad navbar\">\n\t\t\t<div class=\"mr-menu1\">\n\t\t\t\t<div class=\"menu-der col-xs-8 col-sm-5 col-md-4 col-lg-3\">\n\t\t\t\t\t<div class=\"mr-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 pad\">\n\t\t\t\t\t\t<a href=\"#/\">\n\t\t\t\t\t\t\t<h1 class=\"txt-title\">Mi Libro<br> <span class=\"margen-titulo\">de Cocina</span></h1>\n\t\t\t\t\t\t\t<!-- <img class=\"img-title\"src=\"images/gorro2.png\"> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"menu-izq col-xs-4\">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".menu-desplegable\" ng-click=\"isCollapsed = !isCollapsed\">\n\t\t\t\t\t\t<span class=\"sr-only\">Desplegar navegaci\u00F3n</span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"menu-entrar col-xs-12 col-sm-5 col-md-4 col-lg-4\">\n\t\t\t\t\t<div class=\"collapse navbar-collapse menu-desplegable\" collapse=\"isCollapsed\">\n\t\t\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t\t\t<li class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><a href=\"#/login\">Entrar</a></li>\n\t\t\t\t\t\t\t<li class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><a href=\"#/registro\">Reg\u00EDstrate</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<div class=\"mr-menu2\">\n\t\t<div class=\"col-xs-12 col-sm-11 col-md-9 col-lg-8 pad\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pad navbar\">\n\t\t\t\t<div class=\"menu-inicio col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n\t\t\t\t\t<div class=\"collapse navbar-collapse menu-desplegable\" collapse=\"isCollapsed\">\n\t\t\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t\t\t<li role=\"navigation\" ng-class=\"{ 'menu-active' : menu.minicio}\" class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\"><a href=\"#/\">Inicio</a></li>\n\t\t\t\t\t\t\t<li role=\"navigation\" ng-class=\"{ 'menu-active' : menu.mrecetas}\" class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\"><a href=\"#/recetas\">Recetas</a></li>\n\t\t\t\t\t\t\t<li role=\"navigation\" ng-class=\"{ 'menu-active' : menu.mnueva}\" class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\"><a href=\"#/addReceta\">Crear Receta</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"menu-registro col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li role=\"presentation\" class=\"search col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t\t\t\t\t\t\t<form class=\"navbar-form\" role=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Receta ...\">\n\t\t\t\t\t\t\t      <span class=\"input-group-btn\">\n\t\t\t\t\t\t\t        <button class=\"btn btn-default\" type=\"button\"><img src=\"./assets/images/lupa.png\"></button>\n\t\t\t\t\t\t\t      </span>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], CabeceraComponent);
                return CabeceraComponent;
            })();
            exports_1("CabeceraComponent", CabeceraComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map