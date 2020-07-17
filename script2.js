self.addEventListener('message', function(msg){
	setTimeout(
		function(){
			Atomics.add(msg.data,0,20);
			self.postMessage('Bijgewerkt naar 20?');			
		}, 1000
	);
});