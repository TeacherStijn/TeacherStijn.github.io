self.addEventListener('message', function(msg){
	//setTimeout(
	//	function(){
			for (let i=0; i<msg.data.length; i++) {
				Atomics.add(msg.data,i,20);
				self.postMessage('Bijgewerkt naar 20?');			
			}
	//	}, 1000
	//);
});