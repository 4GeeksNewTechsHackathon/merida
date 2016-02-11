import {
	Component,
	View
} from 'angular2/core';

@Component({
    selector: 'mlr-footer'
})

@View({
    template:  `
		<div class="content-footer">
			<div class="footer-derechos col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h5>Mi Libro de Cocina © 2015 - Todos los derechos reservados</h5>
			</div>
		</div>
    `,
})

export class FooterComponent {}
