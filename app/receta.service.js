System.register(['./mock-recetas', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_recetas_1, core_1;
    var RecetaService;
    return {
        setters:[
            function (mock_recetas_1_1) {
                mock_recetas_1 = mock_recetas_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RecetaService = (function () {
                function RecetaService() {
                }
                RecetaService.prototype.getRecetas = function () {
                    return Promise.resolve(mock_recetas_1.RECETAS);
                };
                RecetaService.prototype.getReceta = function (id) {
                    return mock_recetas_1.RECETAS[id];
                };
                // See the "Take it slow" appendix
                RecetaService.prototype.getRecetasSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_recetas_1.RECETAS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                RecetaService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RecetaService);
                return RecetaService;
            })();
            exports_1("RecetaService", RecetaService);
        }
    }
});
//# sourceMappingURL=receta.service.js.map