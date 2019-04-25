self.addEventListener('install', (ev) => {
	// In geval er nog een oudere Service Worker versie is,
	// zal hij blijven wachten met installeren totdat
	// de andere weg is.

	// Daarom de volgende regel, die naar de 'activate' fase gaat.
	// Levert overigens een Promise op, maar die levert weer 'undefined' op
	// (per definitie). Dus daar hoeven we niets mee te doen.
	self.skipWaiting();
	console.log('Service worker installatie gedaan');
});

self.addEventListener('activate', (ev) => {
	console.log('Service worker is nu actief');
});

self.addEventListener('fetch', (ev) => {
	ev.respondWith(
	
		// Deze functie wilt een Promise; 
		// 'async function(){..}() wordt door JavaScript 
		// AUTOMATISCH in een Promise verpakt! :-)
		
		async function() {
	
			console.log(`Request onderschept met data: `);
			console.dir(ev.request);
			
			if (ev.request.url.indexOf('bgg')>-1){
			
				let oudRequest = ev.request;
				let nieuweURL = oudRequest.url.replace('edwalter','stinow');
			
				let nieuwRequest = new Request(
					nieuweURL,
					{
						method: oudRequest.method,
						headers: oudRequest.headers,
						mode: oudRequest.mode,
						credentials: oudRequest.credentials
					}
				);
			
				return fetch(nieuwRequest); //Hier wordt een Promise verwacht
			} else {
				return fetch(ev.request);
			}
		}()
	);
});

self.addEventListener('push', ev => {
	let toonBerichtPromise$ = self.registration.showNotification('Speciaal bericht voor u!');

	ev.waitUntil(toonBerichtPromise$);
})
