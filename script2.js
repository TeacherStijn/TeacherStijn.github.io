self.addEventListener('message', function(msg){
	//setTimeout(
	//	function(){
			for (let i=0; i<1000000; i++){
				Atomics.add(msg.data,0,20);
				
				if (i%700) {
					Atomics.store(msg.data,10,20);
					console.log("Notified: " + Atomics.notify(10));
				}
				Atomics.wait();
				self.postMessage('Bijgewerkt');
			}
	//	}, 1000
	//);
});