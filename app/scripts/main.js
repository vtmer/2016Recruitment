var myApp = angular.module("myApp",['fullPage.js', 'ngRoute']);
myApp.controller('MainControl', ['$scope','$routeProvider' function(scope,route){
	scope.vm = {
		sectionsColor: ['#aad9f9', '#ffffff', '#daf8f3','#fde2c5','#c8e6fb','#ffffff'],
		anchors:["first-page","second-page","third-page","forth-page","fifth-page","sixth-page"],
		navigation: true,
		navigationPosition: 'right',
		scrollingSpeed:1000,
		animateAnchor: true,
		afterLoad:function(a,b) {
			var index = b-1;
			console.log(b,$("#fp-nav ul li").eq(index).find("a").addClass("active"));
			

		}

	};
	
}])

