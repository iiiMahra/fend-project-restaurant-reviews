if ('serviceWorker' in navigator) {
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('/sw.js').then(function(register){
			//If the Registration succeed 
			console.log('ServiceWorker registration is successful');
		}, function(error){
			//If the Registration failed 
			console.log('ServiceWorker registration failed' + error);
		});
	});
}
