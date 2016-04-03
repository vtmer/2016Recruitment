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
		resize:true,
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
					footer.find('img').eq(0).animate({opacity:1},1000, function() {
						next();
					});

				},
				function() {
					footer.find('img').eq(1).animate({opacity:1},1000, function() {
						next();
					});
				},
				function() {
					footer.find('span').eq(0).animate({opacity:1},1000, function() {
						next();
					});
				},
				function() {
					footer.find('span').eq(1).animate({opacity:1},1000, function() {
						next();
					});
				},
				function() {
					footer.find('span').eq(2).animate({opacity:1},1000, function() {
						next();
					});
				},
				function() {
					footer.find('img').eq(2).animate({opacity:1},1000, function() {
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
			$('#third-aritcle header').animate({opacity:1,bottom:0+'px'},3000,function() {
				$('#third-aritcle p').animate({opacity:1},2000, function() {
					$('#third-aritcle details').animate({opacity:1},2000)
				})
			})
		} else if (loca.url() === '/forth-page') {
			$('#forth-aritcle header').animate({opacity:1,bottom:0+'px'},2000, function() {
				$('#forth-aritcle p').animate({opacity:1},2000, function() {
					$('#forth-aritcle details').animate({opacity:1},2000)
				})
			})
		} else if (loca.url() === '/fifth-page') {
			$('#fifth-aritcle header').animate({opacity:1,bottom:0+'px'},2000, function() {
				$('#fifth-aritcle p').animate({opacity:1},2000, function() {
					$('#fifth-aritcle details').animate({opacity:1},2000)
				})
			})
		}
	});
}])
	$(function consoleinfo() {
					           
					
console.log("    ___           ___           ___           ___           ___      \n"+  
		    "   /\\__\\         /\\  \\         /\\__\\         /\\  \\         /\\  \     \n" +   
		    "  /:/  /         \\:\\  \\       /::|  |       /::\\  \\       /::\\  \\    \n"+  
		    " /:/  /           \\:\\  \\     /:|:|  |      /:/\\:\\  \\     /:/\\:\\  \\   \n"+ 
		    "/:/__/  ___       /::\\  \\   /:/|:|__|__   /::\\~\\:\\  \\   /::\\~\\:\\  \\  \n"+
		    "|:|  | /\\__\\     /:/\\:\\__\\ /:/ |::::\\__\\ /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\ \n"+
		    "|:|  |/:/  /    /:/  \\/__/ \\/__/~~/:/  / \\:\\~\\:\\ \\/__/ \\/_|::\\/:/  / \n"+
		    "|:|__/:/  /    /:/  /            /:/  /   \\:\\ \\:\\__\\      |:|::/  /  \n"+
		    " \\::::/__/     \\/__/            /:/  /     \\:\\ \\/__/      |:|\\/__/   \n"+
		    "  ~~~~                         /:/  /       \\:\\__\\        |:|  |     \n"+   
		    "                               \\/__/         \\/__/         \\|__|     \n"  
					
					);
					console.log("一个人在看代码？不如和我们一起写代码吧！");
					console.log("发邮件给我们：xs@vtmer.com")
				}
			)