self.addEventListener('install', (ev) => {
	console.log('Service worker installatie gedaan');
});

self.addEventListener('activate', (ev) => {
	console.log('Service worker is nu actief');
});

self.addEventListener('fetch', (ev) => { 
	console.log(`Request onderschept met data: `);
	console.dir(ev.request);
	
	if (ev.request.url.contains('bgg'){
	
		let oudRequest = ev.request;
		let nieuweURL = oudRequest.url.replace('edwalter','stinow');
		
		ev.respondWith(
		
			//Hier wordt een Promise verwacht:
			
			async function(){
				let nieuwRequest = new Request(
					nieuweURL,
					{
						method: oudRequest.method,
						headers: oudRequest.headers,
						mode: oudRequest.mode
					}
				);
				
				return fetch(nieuwRequest);
			}
		);
	}
});