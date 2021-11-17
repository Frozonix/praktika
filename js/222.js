///////////////////////////////перетаскивание громкости
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
  	}; 
} 
////////////////////////////////////////////////////////////////


///////////////////////////////перетаскивание на таймлайне
let elTimeline = document.getElementById('EllipseTimeline'); 
let x_elTimeline = 0
let shiftTimeline = 0

elTimeline.onmousedown = function(e) { 
	let coords = getCoords(elTimeline); 
	let shiftX = e.clientX - parseInt(x_elTimeline);
	console.log(shiftX) 

	moveAt(e); 

	function moveAt(e) { 
		elTimeline.style.left = e.pageX - shiftX + 'px'; 
		x_elTimeline = elTimeline.style.left 
		console.log(parseInt(elTimeline.style.left))
		shiftTimeline = (parseFloat(elTimeline.style.left)/318)*100
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




$('.timeline').on('mouseenter', function () { //главный серый таймлайн
	if(Song) {

		var
		offset = $(this).offset(),
		w = $(this).width()
		$('.timeline').on('mousemove', function (e) {

			var
			offset = $(this).offset(),
			w = $(this).width(),
			x=e.pageX - offset.left,
			xproc = (x*100)/w,
			sec = (xproc*Song.duration)/100

			//console.log(sec)
			$('.timeline').on('click', function () {
				//console.log("1")
				$('.red-timeline').css({'width':xproc+'%'})

				x_elTimeline = parseFloat(shiftTimeline)*318/100 
				shiftTimeline = parseFloat((sec/Song.duration)*100)
				console.log(shiftTimeline)
				Song.currentTime = sec

			})

		})
	}
	

	
})
$('.red-timeline').on('mouseenter', function () { //главный красный таймлайн
	if(Song) {

		var
		offset = $(this).offset(),
		w = $(this).width()
		$('.red-timeline').on('mousemove', function (e) {

			var
			offset = $(this).offset(),
			w = $('.timeline').width(),
			x=e.pageX - offset.left,
			xproc = (x*100)/w,
			sec = (xproc*Song.duration)/100

			//console.log(sec)
			$('.red-timeline').on('click', function () {
				console.log("1")
				$('.red-timeline').css({'width':xproc+'%'})
				x_elTimeline = parseFloat(shiftTimeline)*318/100 
				shiftTimeline = parseFloat((sec/Song.duration)*100)
				console.log(shiftTimeline)
				Song.currentTime = sec
			})

		})
	}
})
$('.gain-timeline').on('mouseenter', function () {   //громкость серый таймлайн
	if(Song) {

		
		$('.gain-timeline').on('mousemove', function (e) {

			var
			offset = $(this).offset(),
			w = $(this).width(),
			x=e.pageX - offset.left,
			xproc = (x*100)/w
			console.log("2")
			$('.gain-timeline').on('click', function () {
				$('.gain-red-timeline').css({'width':xproc+'%'})
				console.log("1") /////////////////////////почему-то увеличивается в разы быстрее
				elGain.style.left = x_elGain + "px"
				
				Song.volume = xproc/100
				if(xproc < 3){
					Song.volume = 0
					vol = 0
					$('.gain-red-timeline').css({'width':0+'%'})
				}
				else {
					Song.volume = xproc/100
					vol = xproc/100
				
				}
			})

		})
	}
	
})
$('.gain-red-timeline').on('mouseenter', function () { //громкость красный таймлайн
	if(Song) {

		
		$('.gain-red-timeline').on('mousemove', function (e) {

			var
			offset = $(this).offset(),
			w = $('.gain-timeline').width(),
			x=e.pageX - offset.left,
			xproc = (x*100)/w


			//console.log(sec)
			$('.gain-red-timeline').on('click', function () {
				$('.gain-red-timeline').css({'width':xproc+'%'})
				console.log(xproc)
				console.log("1")
				if(xproc < 3){
					Song.volume = 0
					vol = 0
					$('.gain-red-timeline').css({'width':0+'%'})
				}
				else {
					if(xproc>100) { xproc=100}
					elGain.style.left = x_elGain + "px"
					
					Song.volume = xproc/100
					vol = xproc/100
				}
				
			})

		})
	}
	
})