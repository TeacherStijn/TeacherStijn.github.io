self.addEventListener('message', function(msg){
	setTimeout(
		function(){
			Atomics.add(msg.data,0,10);
			self.postMessage('Bijgewerkt naar 10?');
		}, 10000
	);
});