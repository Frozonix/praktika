///////////////////////////////перетаскивание на громкости
let elGain = document.getElementById('EllipseGain'); 
let x_elGain = 84

elGain.onmousedown = function(e) { 
	let coords = getCoords(elGain); 
	let shiftX = e.clientX - parseInt(x_elGain);
	console.log(shiftX) 

	moveAt(e); 

	function moveAt(e) { 
		elGain.style.left = e.pageX - shiftX + 'px'; 
		x_elGain = elGain.style.left
		console.log(parseInt(elGain.style.left))
		$('.gain-red-timeline').css({'width':parseInt(elGain.style.left) + 1 + '%'}) 
	} 

	document.onmousemove = function(e) { 

		moveAt(e);
		let checker = elGain.style.left 

		checker = parseInt(checker)
		console.log(checker)
		 if(checker<0) {
		 	x_elGain=0
		 	$('.gain-red-timeline').css({'width':0+'%'})
		 	elGain.style.left = x_elGain + "px"
		 	Song.volume = 0
		 	elGain.onmouseup()
		 }
		 if(checker>88) {
		 	x_elGain=88
		 	$('.gain-red-timeline').css({'width':100+'%'})
		 	elGain.style.left = x_elGain + "px"
		 	Song.volume = 1
		 	elGain.onmouseup()
		 }
	}; 
	elGain.onmouseup = function() { 
			elGain.style.left = x_elGain + 'px'; 
			console.log(elGain.style.left)
			document.onmousemove = null; 
			elGain.onmouseup = null; 

	}; 
} 
elGain.ondragstart = function() { return false; }; 
function getCoords(elem) { 
		let box = elem.getBoundingClientRect(); 
		let x = document.getElementById("grt").style.width
		console.log(x)
		return { 
		left: box.left + pageXOffset 
  	} 
} 
////////////////////////////////////////////////////////////////





///////////////////////////////перетаскивание на таймлайне
let elTimeline = document.getElementById('EllipseTimeline'); 
let x_elTimeline = 0

elTimeline.onmousedown = function(e) { 
	let coords = getCoords(elTimeline); 
	let shiftX = e.clientX - parseInt(x_elTimeline);
	console.log(shiftX) 

	moveAt(e); 

	function moveAt(e) { 
		elTimeline.style.left = e.pageX - shiftX + 'px'; 
		x_elTimeline = elTimeline.style.left 
		console.log(parseInt(elTimeline.style.left))
		let shiftTimeline = (parseFloat(elTimeline.style.left)/318)*100
		$('.red-timeline').css({'width':shiftTimeline  + '%'}) 
		Song.currentTime = parseFloat((shiftTimeline*Song.duration)/100)
	} 

	document.onmousemove = function(e) { 

		moveAt(e);
		let checker = elTimeline.style.left 

		checker = parseInt(checker)
		console.log(checker)
		 
	}; 
	elTimeline.onmouseup = function() { 
			elTimeline.style.left = x_elTimeline + 'px'; 
			console.log(elTimeline.style.left)
			document.onmousemove = null; 
			elTimeline.onmouseup = null; 

	}; 
} 
elTimeline.ondragstart = function() { return false; }; 
function getCoords(elem) { 
		let box = elem.getBoundingClientRect(); 
		let x = document.getElementById("rt").style.width
		console.log(x)
		return { 
		left: box.left + pageXOffset 
  	} 
} 
////////////////////////////////////////////////////////////////