System.register(['angular2/core', './header.component', './content.component', './footer.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, content_component_1, footer_component_1;
    var LibroRecetasComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (content_component_1_1) {
                content_component_1 = content_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            LibroRecetasComponents = (function () {
                function LibroRecetasComponents() {
                }
                LibroRecetasComponents = __decorate([
                    core_1.Component({
                        selector: 'libro-recetas',
                    }),
                    core_1.View({
                        template: "\n    <div id=\"container\" class=\"container-fluid\">\n        <div id=\"contenido\" class=\"row\">\n            <mlr-header id=\"header\"></mlr-header>\n            <mlr-content id=\"content\"></mlr-content>\n            <mlr-footer id=\"footer\"></mlr-footer>\n        </div>\n    </div>\n    ",
                        directives: [header_component_1.CabeceraComponent, footer_component_1.FooterComponent, content_component_1.ContentComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LibroRecetasComponents);
                return LibroRecetasComponents;
            })();
            exports_1("LibroRecetasComponents", LibroRecetasComponents);
        }
    }
});
//# sourceMappingURL=app.component.js.map