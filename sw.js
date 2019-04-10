self.addEventListener('install', (ev) => {
	console.log('Service worker installatie gedaan');
});

self.addEventListener('activate', (ev) => {
	console.log('Service worker is nu actief');
});

self.addEventListener('fetch', (ev) => {
	
	// Aanpassen request en doorsturen + op abboneren:
	console.log(`Onderschept! Data = ${ev.request.url}`);
	
	ev.respondWith(
	
		/* Mooier is al dan niet met cache te werken, maar gaat nu over
		   het concept van onderscheppen */
		return fetch(ev.request).then(
			res=>{ console.log(`Goed gegaan? ${res}`); }
		);		
	);
	
});