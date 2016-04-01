$(window).load(function() {
	$('.middle img').fadeIn(300, function() {
		$('.maintitle').addClass("title-move");
		setTimeout(function() {
			$('.subtitle').addClass("title-move");
		}, 1000)
		setTimeout(function() {
			$('#goingDown').fadeIn(2000);
		}, 3000)
	})
})
var myApp = angular.module("myApp", ['fullPage.js', 'ngRoute']).run(['$rootScope', '$window', '$location', function($rootScope, $window, $location, $log) {
	$rootScope.$on('$locationChangeSuccess', function(event, data) {
		$rootScope.$broadcast('change', data);
	})
}])
myApp.controller('MainControl', ['$scope', '$location', function(scope, loca) {
	scope.vm = {
		sectionsColor: ['#aad9f9', '#ffffff', '#daf8f3', '#fde2c5', '#c8e6fb', '#ffffff'],
		anchors: ["/first-page", "/second-page", "/third-page", "/forth-page", "/fifth-page", "/sixth-page"],
		navigation: true,
		navigationPosition: 'right',
		scrollingSpeed: 1000,
		animateAnchor: true,
		afterLoad: function(a, b) {
			var index = b - 1;
			$("#fp-nav ul li").eq(index).find("a").addClass("active");
		}
	};
	scope.$on('change', function(event, data) {
		if (loca.url() === '/second-page') {
			$('#second-article main').addClass('fadeIn');
			var footer = $('#second-article footer');
			var animateQue = [
				function() {
					footer.find('img').eq(0).fadeIn(2000, function() {
						next();
					});

				},
				function() {
					footer.find('img').eq(1).fadeIn(2000, function() {
						next();
					});
				},
				function() {
					footer.find('img').eq(2).fadeIn(2000, function() {
						next();
					});
				}

			]
			footer.queue("ani", animateQue);

			function next() {
				footer.dequeue("ani");
			}
			next();

		} else if (loca.url() === '/third-page') {
			console.log('asd');
			$('#third-aritcle header').fadeIn(3000, function() {
				$('#third-aritcle p').fadeIn(3000, function() {
					$('#third-aritcle details').fadeIn(3000)
				})
			})
		} else if (loca.url() === '/forth-page') {
			$('#forth-aritcle header').fadeIn(3000, function() {
				$('#forth-aritcle p').fadeIn(3000, function() {
					$('#forth-aritcle details').fadeIn(3000)
				})
			})
		} else if (loca.url() === '/fifth-page') {
			$('#fifth-aritcle header').fadeIn(3000, function() {
				$('#fifth-aritcle p').fadeIn(3000, function() {
					$('#fifth-aritcle details').fadeIn(3000)
				})
			})
		}
	});
}])