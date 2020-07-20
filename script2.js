self.addEventListener('message', function(msg){
	while (Atomics.read(msg.data,0)==42){
		// Doe niets, wacht tot data is gewijzigd
	}

	self.postMessage(`Data gewijzigd naar: ` + Atomics.read(msg.data,0));
});
