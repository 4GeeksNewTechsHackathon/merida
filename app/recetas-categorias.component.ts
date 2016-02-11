import {
Component,
View
} from 'angular2/core';

@Component({
    selector: 'mlr-recetas-categorias'
})

@View({
    template: `
	<div class="home-izq col-xs-11 col-sm-4 col-md-4 col-lg-4">
		<div class="collapse navbar-collapse menu-desplegable" collapse="isCollapsed">
			<div class="rh-pestania menu-desplegable">
				<h2>Recetas por Categorías</h2>
			</div>
			<div class="rh-contenido">
				<div>
					<ul class="nav nav-pills nav-stacked">
						<li><a href="#/categoriaArroz">Arroz</a></li>
						<li><a href="#/categoriaPollo">Pollo</a></li>
						<li><a href="#/categoriaCarnes">Carnes</a></li>
						<li><a href="#/categoriaPastas">Pastas</a></li>
						<li><a href="#/categoriaPostres">Postres</a></li>
						<li><a href="#/categoriaSana">Fitness</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    `,
})

export class RecetasCategoriasComponent { }