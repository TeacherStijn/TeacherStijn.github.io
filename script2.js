self.addEventListener('message', function(msg){
	let reeks = new Uint8Array(msg.data);

	while (Atomics.load(reeks,0)==42){
		// Doe niets, wacht tot data is gewijzigd
	}

	self.postMessage(`Data gewijzigd naar: ` + Atomics.load(reeks,0));
});
