self.addEventListener('message', function(msg){
	let reeks = new Uint8Array(msg.data);

	/*	while (Atomics.load(reeks,0)==42){
		// Doe niets, wacht tot data is gewijzigd
	}*/

	// Wacht maximaal 15sec op een wijziging in de array
	Atomics.wait(reeks, 0, 15000);

	self.postMessage(`Data gewijzigd naar: ` + Atomics.load(reeks,0));
});
