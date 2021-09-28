const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peliculas: [],
			programas:[],
			personas: [],
			trending: [],
			rating: []
		},
		actions: {
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			
            //funcion de ejemplo para hacer peticiones fetch
		loadPeliculas: () => {
                
			fetch(`https://api.themoviedb.org/3/movie/popular?api_key=66fe2d4dcf98813e405cc05181238577`)
			.then((response) => response.json())
			.then((data) =>  setStore({peliculas: data.results}));
		},

		loadProgramas: () => {

			fetch(`https://api.themoviedb.org/3/tv/popular?api_key=66fe2d4dcf98813e405cc05181238577`)
			.then((response) => response.json())
			.then((data) =>  setStore({programas: data.results}));
		},

		loadPersonas: () => {

			fetch(`https://api.themoviedb.org/3/person/popular?api_key=66fe2d4dcf98813e405cc05181238577`)
			.then((response) => response.json())
			.then((data) =>  setStore({personas: data.results}));
		},
		
		loadTrending: () => {

			fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=66fe2d4dcf98813e405cc05181238577`)
			.then((response) => response.json())
			.then((data) =>  setStore({trending: data.results}));
		},
		
		loadRating: () => {

			fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=66fe2d4dcf98813e405cc05181238577`)
			.then((response) => response.json())
			.then((data) =>  setStore({rating: data.results}));
		},
		

	}
};
};
			
                
				//Para obtener datos de la store y usarlos como en el ejemplo de la linea 23 a la 26
				// const store = getStore();

				//suponiendo que demo es un array con datos  
				//con colores predefinidos
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm = color;
				// 	return elm;
				// });

			
export default getState;