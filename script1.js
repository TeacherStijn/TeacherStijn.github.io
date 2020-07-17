self.addEventListener('message', function(msg){
	//setTimeout(
	//	function(){
			for (let i=0; i<msg.data.length; i++){
				Atomics.add(msg.data,i,10);
				self.postMessage('Bijgewerkt naar 10?');
			}
	//	}, 10000
	//);
});