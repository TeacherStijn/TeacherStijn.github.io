self.addEventListener('message', function(msg){
	let reeks = new Uint8Array(msg.data);

	while (Atomics.load(reeks,0)==42){
		// Doe niets, wacht tot data is gewijzigd
	}

	self.postMessage(`Data gewijzigd naar: ` + Atomics.load(reeks,0));
	/*//setTimeout(
	//	function(){
			for (let i=0; i<1000000; i++){
				Atomics.add(msg.data,0,10);
				
				if (i%500) {
					Atomics.store(msg.data,5,10);
					console.log("Notified: " + Atomics.notify(5));
				}
				Atomics.wait();
				self.postMessage('Bijgewerkt');
			}
	//	}, 10000
	//);*/
});
