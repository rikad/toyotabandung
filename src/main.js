let _ = x => document.querySelector(x)

function imageCarousel(next) {
    _('.current-slide').classList.remove(_('.current-slide').classList[1])
    _('.current-slide').classList.add(next)
}

function carouselAnimation( x ) {

}

(function () {
	_('.home').addEventListener("click", function(){
    	openNavLeft();
	});
	_('.gallery').addEventListener("click", function(){
    	alert('yes');
	});
	_('.prize').addEventListener("click", function(){
    	alert('yes');
	});
	_('.consult').addEventListener("click", function(){
    	alert('yes');
	});
})();

function openNavLeft() {
    _('.nav-left').style.width = "85vw";
}

function closeNavLeft() {
     _('.nav-left').style.width = "0";
}