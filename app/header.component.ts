import {
	Component,
	View
} from 'angular2/core';

@Component({
    selector: 'mlr-header'
})

@View({
    template:  `
    <div class="content-header" >
		<div class="col-xs-12 col-sm-11 col-md-9 col-lg-8 pad navbar">
			<div class="mr-menu1">
				<div class="menu-der col-xs-8 col-sm-5 col-md-4 col-lg-3">
					<div class="mr-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12 pad">
						<a href="#/">
							<h1 class="txt-title">Mi Libro<br> <span class="margen-titulo">de Cocina</span></h1>
							<!-- <img class="img-title"src="images/gorro2.png"> -->
						</a>
					</div>
				</div>
				<div class="menu-izq col-xs-4">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".menu-desplegable" ng-click="isCollapsed = !isCollapsed">
						<span class="sr-only">Desplegar navegación</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div class="menu-entrar col-xs-12 col-sm-5 col-md-4 col-lg-4">
					<div class="collapse navbar-collapse menu-desplegable" collapse="isCollapsed">
						<ul class="nav nav-pills">
							<li class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><a href="#/login">Entrar</a></li>
							<li class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><a href="#/registro">Regístrate</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
	<div class="mr-menu2">
		<div class="col-xs-12 col-sm-11 col-md-9 col-lg-8 pad">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pad navbar">
				<div class="menu-inicio col-xs-12 col-sm-8 col-md-8 col-lg-8">
					<div class="collapse navbar-collapse menu-desplegable" collapse="isCollapsed">
						<ul class="nav nav-pills">
							<li role="navigation" ng-class="{ 'menu-active' : menu.minicio}" class="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a href="#/">Inicio</a></li>
							<li role="navigation" ng-class="{ 'menu-active' : menu.mrecetas}" class="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a href="#/recetas">Recetas</a></li>
							<li role="navigation" ng-class="{ 'menu-active' : menu.mnueva}" class="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a href="#/addReceta">Crear Receta</a></li>
						</ul>
					</div>
				</div>
				<div class="menu-registro col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<ul class="nav navbar-nav">
						<li role="presentation" class="search col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<form class="navbar-form" role="search">
								<div class="input-group">
							      <input type="text" class="form-control" placeholder="Buscar Receta ...">
							      <span class="input-group-btn">
							        <button class="btn btn-default" type="button"><img src="./assets/images/lupa.png"></button>
							      </span>
							    </div>
							</form>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div> 
    `,
})

export class CabeceraComponent {}