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
		return fetch(ev.request);	
	);
	
});