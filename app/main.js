System.register(['angular2/platform/browser', './header.component'], function(exports_1) {
    var browser_1, header_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(header_component_1.CabeceraComponent);
        }
    }
});
//# sourceMappingURL=main.js.map