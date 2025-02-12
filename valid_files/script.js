document.addEventListener("DOMContentLoaded", function() {
	// Obtener los parámetros de la URL 
	const params = new URLSearchParams(window.location.search); 
	// Modificar el título si existe el parámetro 'titulo' 
	if (params.has('c')) 
	{ 
		document.getElementById('cuve').textContent = params.get('c'); 
	} 
	// Modificar el contenido si existe el parámetro 'contenido' 
	if (params.has('f')) 
	{ 
		document.getElementById('fch').textContent = params.get('f'); 
	} 
	if (params.has('n')) 
	{ 
		document.getElementById('nro').textContent = params.get('n'); 
	} 
	if (params.has('p')) 
	{ 
		document.getElementById('ptr').textContent = params.get('p'); 
	} 
});
