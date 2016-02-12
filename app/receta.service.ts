import {Receta} from './receta';
import {RECETAS} from './mock-recetas';
import {Injectable} from 'angular2/core';

@Injectable()
export class RecetaService {
	getRecetas() {
		return Promise.resolve(RECETAS);
	}
	getReceta(id: number | string) {
		return RECETAS[id];
	}
	// See the "Take it slow" appendix
	getRecetasSlowly() {
		return new Promise<Receta[]>(resolve =>
			setTimeout(()=>resolve(RECETAS), 2000) // 2 seconds
		);
	}
}