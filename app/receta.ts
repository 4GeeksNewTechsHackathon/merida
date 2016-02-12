export interface Receta {
	numpersonas: number;
	nombrereceta: string;
	tiemporeceta: number;
	dificultad: string;
	ingredientes: Array<string>;
	pasos: Array<string>;

}