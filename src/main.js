let _ = x => document.querySelector(x)

function imageCarousel(next) {
    _('.current-slide').classList.remove(_('.current-slide').classList[1])
    _('.current-slide').classList.add(next)
}

function carouselAnimation( x ) {

}

(function () {

	//scroll bug fixed top
	window.onscroll = function () {
    	if (document.body.scrollTop > _('.head').offsetHeight && _('.nav-container').style.position != 'fixed') {
    		_('.nav-container').style.position = 'fixed';
    	}
    	if (document.body.scrollTop < _('.head').offsetHeight && _('.nav-container').style.position != 'stiky') {
    		_('.nav-container').style.position = 'sticky';
    	}
	}


	//listener
	_('.humberger').addEventListener("click", function(){
    	openNavLeft();
	});
	_('.gallery').addEventListener("click", function(){
    	openNavLeft();
	});
	_('.prize').addEventListener("click", function(){
    	openNavLeft();
	});
	_('.consult').addEventListener("click", function(){
    	openNavLeft();
	});

	let product = document.querySelectorAll('.product')
	product.forEach(function (item) {
		item.addEventListener("click", function(){
	    	descPush();
		});
	})

})();

function openNavLeft() {
    _('.nav-left').style.width = "85vw";
}

function descPush() {
    _('.description-push').style.width = "90vw";
}
function closeDescPush() {
    _('.description-push').style.width = "";
}

function closeNavLeft() {
     _('.nav-left').style.width = "0";
}

