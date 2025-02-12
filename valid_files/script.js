document.addEventListener("DOMContentLoaded", function() {
	// Obtener los parámetros de la URL 
	const params = new URLSearchParams(window.location.search); 
	// Modificar el título si existe el parámetro 'titulo' 
	if (params.has('cuve')) 
	{ 
		document.getElementById('cuve').textContent = params.get('cuve'); 
	} 
	// Modificar el contenido si existe el parámetro 'contenido' 
	if (params.has('fch')) 
	{ 
		document.getElementById('fch').textContent = params.get('fch'); 
	} 
	if (params.has('nro')) 
	{ 
		document.getElementById('nro').textContent = params.get('nro'); 
	} 
	if (params.has('ptr')) 
	{ 
		document.getElementById('ptr').textContent = params.get('ptr'); 
	} 
});