self.addEventListener('install', (ev) => {
	console.log('Service worker installatie gedaan');
});

self.addEventListener('activate', (ev) => {
	console.log('Service worker is nu actief');
});

self.addEventListener('fetch', (ev) => {
	
	// Aanpassen request en doorsturen + op abboneren:
	ev.respondWith(
		function() {
			console.log(`Onderschept! Data = ${ev.request.url}`);
			return fetch(ev.request);
		}
		
	);
	
});