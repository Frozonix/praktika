$(document).ready(function () {
	function getPosition(e) {
		var x = (y = 0);

		if (!e) {
			var e = window.event;
		}

		if (e.pageX || e.pageY) {
			x = e.pageX;
			y = e.pageY;
		} else if (e.clientX || e.clientY) {
			x =
				e.clientX +
				document.body.scrollLeft +
				document.documentElement.scrollLeft;
			y =
				e.clientY +
				document.body.scrollTop +
				document.documentElement.scrollTop;
		}

		return { x: x, y: y };
	}

	///////////////////////////////перетаскивание на громкости
	let elGain = document.getElementById("EllipseGain");
	let x_elGain = 84;

	elGain.addEventListener('mousedown', function (e) {
		let coords = getCoords(elGain);
		let shiftX = e.clientX - parseInt(x_elGain);

		moveAt(e);

		function moveAt(e) {
			elGain.style.left = e.pageX - shiftX + "px";
			x_elGain = parseFloat(elGain.style.left);
			$(".gain-red-timeline").css({
				width: parseFloat(elGain.style.left) + 1 + "%",
			});
		}

		document.onmousemove = function (e) {
			moveAt(e);
			let checker = elGain.style.left;

			let coord = getPosition(e);

			checker = parseInt(checker);
			console.log(checker);
			if (checker < 0) {
				x_elGain = 0;
				$(".gain-red-timeline").css({ width: 0 + "%" });
				elGain.style.left = x_elGain + "px";
				Song.volume = 0;
				elGain.onmouseup();
			}
			if (checker > 88) {
				x_elGain = 88;
				$(".gain-red-timeline").css({ width: 100 + "%" });
				elGain.style.left = x_elGain + "px";
				Song.volume = 1;
				elGain.onmouseup();
			}
			if (coord.y < 505 || coord.y > 528) {
				elGain.onmouseup();
			}
		};
		
		elGain.onmouseup = function () {
			elGain.style.left = x_elGain + "px";
			document.onmousemove = null;
			elGain.onmouseup = null;
		};
	});
	



  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    let x = document.getElementById("grt").style.width;
    console.log(x);
    return {
      left: box.left + pageXOffset,
    };
  }
  ////////////////////////////////////////////////////////////////

  ///////////////////////////////перетаскивание на таймлайне
  let elTimeline = document.getElementById("EllipseTimeline");
  let x_elTimeline = 0;
  let shiftTimeline = 0;

	elTimeline.addEventListener("mousedown", function (e) {
    let coords = getCoords(elTimeline);
    let shiftX = e.clientX - parseInt(x_elTimeline);
    console.log(shiftX);

    moveAt(e);

    function moveAt(e) {
      elTimeline.style.left = e.pageX - shiftX + "px";
      x_elTimeline = elTimeline.style.left;
      console.log(parseInt(elTimeline.style.left));
      shiftTimeline = (parseFloat(elTimeline.style.left) / 318) * 100;
      $(".red-timeline").css({ width: shiftTimeline + "%" });
      Song.currentTime = parseFloat((shiftTimeline * Song.duration) / 100);
    }

    document.onmousemove = function (e) {
      moveAt(e);
      let checker = elTimeline.style.left;

      checker = parseInt(checker);

      let coord = getPosition(e);

      console.log(checker);

      if (checker < 0) {
        x_elTimeline = 0;
        $(".red-timeline").css({ width: 0 + "%" });
        elTimeline.style.left = x_elTimeline + "px";

        elTimeline.onmouseup();
      }
      if (checker > 318) {
        x_elGain = 318;
        $(".red-timeline").css({ width: 100 + "%" });
        elTimeline.style.left = x_elTimeline + "px";

        elTimeline.onmouseup();
      }
      if (coord.y < 505 || coord.y > 525) {
        elTimeline.onmouseup();
      }
		};
		
    elTimeline.onmouseup = function () {
      elTimeline.style.left = x_elTimeline + "px";
      console.log(elTimeline.style.left);
      document.onmousemove = null;
      elTimeline.onmouseup = null;
    };
	});

	

	
  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    let x = document.getElementById("rt").style.width;
    console.log(x);
    return {
      left: box.left + pageXOffset,
    };
  }
  ////////////////////////////////////////////////////////////////

  let cover = {
    a0: (document.getElementById("a0").style.backgroundImage =
      "url('img/audioplayer/covers/с1.jpg')"),
    a1: (document.getElementById("a1").style.backgroundImage =
      "url('img/audioplayer/covers/с2.jpg')"),
    a2: (document.getElementById("a2").style.backgroundImage =
      "url('img/audioplayer/covers/с1.jpg')"),
    a3: (document.getElementById("a3").style.backgroundImage =
      "url('img/audioplayer/covers/с2.jpg')"),
    a4: (document.getElementById("a4").style.backgroundImage =
      "url('img/audioplayer/covers/с1.jpg')"),
    a5: (document.getElementById("a5").style.backgroundImage =
      "url('img/audioplayer/covers/с2.jpg')"),
    a6: (document.getElementById("a6").style.backgroundImage =
      "url('img/audioplayer/covers/с1.jpg')"),
    a7: (document.getElementById("a7").style.backgroundImage =
      "url('img/audioplayer/covers/с2.jpg')"),
    a8: (document.getElementById("a8").style.backgroundImage =
      "url('img/audioplayer/covers/с1.jpg')"),
    a9: (document.getElementById("a9").style.backgroundImage =
      "url('img/audioplayer/covers/с2.jpg')"),
    a10: (document.getElementById("a10").style.backgroundImage =
      "url('img/audioplayer/covers/с1.jpg')"),
    a11: (document.getElementById("a11").style.backgroundImage =
      "url('img/audioplayer/covers/с3.jpg')"),
  };

	var id_song = 1;
	var Song = 1;
	var vol = 1; //vol для сейва громкости при переключении песни

  var tracklist = [
    (track1 = ["a0", "tracklist/Castle_Bravo_Порталы.mp3"]),
    (track2 = ["a1", "tracklist/1.mp3"]),
    (track3 = ["a2", "tracklist/Castle_Bravo_Порталы.mp3"]),
    (track4 = ["a3", "tracklist/1.mp3"]),
    (track5 = ["a4", "tracklist/Castle_Bravo_Порталы.mp3"]),
    (track6 = ["a5", "tracklist/1.mp3"]),
    (track7 = ["a6", "tracklist/Castle_Bravo_Порталы.mp3"]),
    (track8 = ["a7", "tracklist/1.mp3"]),
    (track9 = ["a8", "tracklist/Castle_Bravo_Порталы.mp3"]),
    (track10 = ["a9", "tracklist/1.mp3"]),
    (track11 = ["a10", "tracklist/Castle_Bravo_Порталы.mp3"]),
    (track12 = ["a11", "tracklist/2.mp3"]),
  ];

  let keysFromCover = Object.keys(cover);
  let valuesFromCover = Object.values(cover);
  let id = 0;
  let x = 0;
  let counterTime = "";
  let minutes = 0;
  let seconds = 0;
  let lastRandoms = [];

  function playNewSong(id, x) {
    let curtime,
      cur = -100;

    lastPlay = id; //передаем id играющей песни
    //console.log(x)
    //console.log(id)
		Song = new Audio(tracklist[x][1]);
		
    Song.play();

    Song.addEventListener("timeupdate", function () {
			curtime = Math.ceil(Song.currentTime);
			
			//		console.log((parseInt(Song.currentTime/60)+':'+parseInt(Song.currentTime%60)))
			
      cur =
        100 -
        ((parseInt(Song.duration) - Math.ceil(Song.currentTime)) * 100) /
          parseInt(Song.duration);
      /*console.log(cur)* текущее время на таймлайне */
			$(".red-timeline").css({ width: cur + "%" });
			
      if (curtime % 60 < 10) {
        $(".first-time").text(
          parseInt(curtime / 60) + ":0" + parseInt(curtime % 60)
        );
      } else {
        $(".first-time").text(
          parseInt(curtime / 60) + ":" + parseInt(curtime % 60)
        );
      }

      //чтобы в случае окончания трека по таймлайну, кнопка менялась на треугольник и трек ставился на паузу
      if (Song.currentTime == this.duration) {
        document.getElementById("stopSong").style.backgroundImage =
          "url('img/audioplayer/play.svg')";
        Song.pause();
      }
    });

    Song.addEventListener("loadedmetadata", function () {
      if (this.duration % 60 < 10) {
        $(".second-time").text(
          parseInt(this.duration / 60) +
            ":0" +
            parseInt((this.duration % 60) + 1)
        );
      } else {
        $(".second-time").text(
          parseInt(this.duration / 60) +
            ":" +
            parseInt((this.duration % 60) + 1)
        );
      }
    });
  }

  function swapPicture(k) {
    for (i = 0; i < keysFromCover.length; i++) {
      //замена картинки на играющий сейчас трек
      if (keysFromCover[i] == k) {
        let value = valuesFromCover[i];
        document.getElementById("cover-play").style.backgroundImage = value;
      }
    }

    console.log("картинка сменилась и эта функция не действует в потоке");
  }

	let lastPlay = "none"; //переменная была вынесена, чтобы при каждом клике не обновлялась на none
	
	document.getElementById("allTracks").onclick = function () {
		
    document.addEventListener("click", open, false);

    console.log("1");

    function open(e) {
      swapPicture(e.target.id);

      for (i = 0; i < tracklist.length; i++) {
        if (tracklist[i][0] == e.target.id) {
          //включает трек
          if (tracklist[i][0] !== lastPlay) {
            //чтобы при игре трека и повторном нажатии на картинку трек не начинался заново
						id = tracklist[i][0];
						
            if (Song) {
              if (id == lastPlay) {
              } else {
                Song.pause();
                x = i;
                playNewSong(id, x);
              }
            } else {
              x = i;
              playNewSong(id, x);
            }
          }
        }
      } //замена картинки на играющий сейчас трек
    }
	};
	
  $(".timeline").on("mouseenter", function () {
    //главный серый таймлайн
    if (Song) {
      var offset = $(this).offset(),
        w = $(this).width();
      $(".timeline").on("mousemove", function (e) {
        var offset = $(this).offset(),
          w = $(this).width(),
          x = e.pageX - offset.left,
          xproc = (x * 100) / w,
          sec = (xproc * Song.duration) / 100;

        //console.log(sec)
        $(".timeline").on("click", function () {
          //console.log("1")
          $(".red-timeline").css({ width: xproc + "%" });

          x_elTimeline = parseFloat((xproc * 318) / 100);
          shiftTimeline = parseFloat((sec / Song.duration) * 100);
          console.log(shiftTimeline);
          Song.currentTime = sec;
        });
      });
    }
  });

  $(".red-timeline").on("mouseenter", function () {
    //главный красный таймлайн
    if (Song) {
      var offset = $(this).offset(),
        w = $(this).width();
      $(".red-timeline").on("mousemove", function (e) {
        var offset = $(this).offset(),
          w = $(".timeline").width(),
          x = e.pageX - offset.left,
          xproc = (x * 100) / w,
          sec = (xproc * Song.duration) / 100;

        //console.log(sec)
        $(".red-timeline").on("click", function () {
          console.log("1");
          $(".red-timeline").css({ width: xproc + "%" });
          x_elTimeline = parseFloat((xproc * 318) / 100);
          shiftTimeline = parseFloat((sec / Song.duration) * 100);
          console.log(shiftTimeline);
          Song.currentTime = sec;
        });
      });
    }
  });

  $(".gain-timeline").on("mouseenter", function () {
    //громкость серый таймлайн
    if (Song) {
      $(".gain-timeline").on("mousemove", function (e) {
        var offset = $(this).offset(),
          w = 88,
          x = e.pageX - offset.left,
          xproc = (x * 100) / w;
        console.log("2");
        $(".gain-timeline").on("click", function () {
          $(".gain-red-timeline").css({ width: xproc + "%" });
          console.log("1"); /////////////////////////почему-то увеличивается в разы быстрее

          console.log(elGain.style.left);
          Song.volume = xproc / 100;
          if (xproc < 3) {
            Song.volume = 0;
            vol = 0;
            $(".gain-red-timeline").css({ width: 0 + "%" });

            if (xproc < 0) {
              Song.volume = 0;
              vol = 0;
              $(".gain-red-timeline").css({ width: 0 + "%" });
            }
          } else {
            Song.volume = xproc / 100;
          }

          x_elGain = (xproc * w) / 100;
          elGain.style.left = x_elGain + "px";
        });
      });
    }
	});
	
  $(".gain-red-timeline").on("mouseenter", function () {
    //громкость красный таймлайн
    //ЗДЕСЬ ИДУТ СКАЧКИ!!!!!!!!!!!!!!!!!!!!!
    if (Song) {
      $(".gain-red-timeline").on("mousemove", function (e) {
        var offset = $(this).offset(),
          w = 88,
          x = e.pageX - offset.left,
          xproc = parseFloat(x * 100) / w;

        //console.log(sec)
        $(".gain-red-timeline").on("click", function () {
          $(".gain-red-timeline").css({ width: xproc + "%" });
          console.log(xproc);
          console.log("1");
          console.log(elGain.style.left);

          if (xproc > 100) {
            xproc = 100;
          }
          if (xproc < 3) {
            Song.volume = 0;
            vol = 0;
            $(".gain-red-timeline").css({ width: 0 + "%" });
          } else {
            Song.volume = xproc / 100;
            if (xproc < 0) {
              Song.volume = 0;
              vol = 0;
              $(".gain-red-timeline").css({ width: 0 + "%" });
            }
          }

          x_elGain = (xproc * w) / 100;
          elGain.style.left = x_elGain + "px";
        });
      });
    }
	});

  	
  $(".timeline").on("mouseleave", function onMouseleave() {
    console.log('TIMELINE, mouseleave')

    $(".timeline").off("mousemove");
    $(".timeline").off("click");
  })

  $(".red-timeline").on("mouseleave", function onMouseleave() {
    console.log('RED-TIMELINE, mouseleave')

    $(".red-timeline").off("mousemove");
    $(".red-timeline").off("click");
  })

  $(".gain-timeline").on("mouseleave", function onMouseleave() {
    console.log('GAIN-TIMELINE, mouseleave')

    $(".gain-timeline").off("mousemove");
    $(".gain-timeline").off("click");
  })

  $(".gain-red-timeline").on("mouseleave", function onMouseleave() {
    console.log('GAIN-RED-TIMELINE, mouseleave')

    $(".gain-red-timeline").off("mousemove");
    $(".gain-red-timeline").off("click");
  })
	
  $(".stop").on("click", function () {
    //пауза песни
    console.log(x);
    if (Song.paused) {
      document.getElementById("stopSong").style.backgroundImage =
        "url('img/audioplayer/stop.svg')";
      Song.play();
    } else {
      document.getElementById("stopSong").style.backgroundImage =
        "url('img/audioplayer/play.svg')";
      Song.pause();
    }
  });

  $(".left").on("click", function () {
    //левее
    let newId = id.slice(1);

    if (x == 0) {
      Song.pause(id);
      newId = "a" + 11;
      console.log("Это старый id " + id + "это новый id " + newId);
      x = 11;
      id = newId;
      playNewSong(id, x);

      swapPicture(newId);

      document.getElementById("stopSong").style.backgroundImage =
        "url('img/audioplayer/stop.svg')"; //чтобы в случае нажатия кнопка play не оставалась

      console.log(newId);
      console.log(id);
    } else {
      Song.pause(id);
      newId = "a" + (Number(newId) - 1);
      console.log("Это старый id " + id + "это новый id " + newId);
      x--;
      id = newId;
      playNewSong(id, x);

      swapPicture(newId);

      document.getElementById("stopSong").style.backgroundImage =
        "url('img/audioplayer/stop.svg')"; //чтобы в случае нажатия кнопка play не оставалась

      console.log(newId);
      console.log(id);
    }
  });

  $(".right").on("click", function () {
    //правее
    let newId = id.slice(1);
    if (x == 11) {
      Song.pause(id);
      newId = "a" + 0;
      console.log("Это старый id " + id + "это новый id " + newId);
      x = 0;
      id = newId;
      playNewSong(id, x);

      swapPicture(newId);

      document.getElementById("stopSong").style.backgroundImage =
        "url('img/audioplayer/stop.svg')"; //чтобы в случае нажатия кнопка play не оставалась

      console.log(newId);
      console.log(id);
    } else {
      Song.pause(id);
      newId = "a" + (Number(newId) + 1);
      console.log("Это старый id " + id + "это новый id " + newId);
      x++;
      id = newId;
      playNewSong(id, x);

      swapPicture(newId);

      document.getElementById("stopSong").style.backgroundImage =
        "url('img/audioplayer/stop.svg')"; //чтобы в случае нажатия кнопка play не оставалась

      console.log(newId);
      console.log(id);
    }
  });
  $(".random-button").on("click", function () {
    //рандом трека
    if (Song) {
      Song.pause(id);
    }
    x = Math.floor(Math.random() * (11 - 0 + 1));
    console.log("Рандом: " + x);
    if (lastRandoms.length > 0 && lastRandoms.length < 8) {
      for (i = 0; i < lastRandoms.length; i++) {
        //попытка разнообразить рандом
        if (x == lastRandoms[i]) {
          while (x == lastRandoms[i]) {
            x = Math.floor(Math.random() * (11 - 0 + 1));
            console.log("Новый X: " + x);
          }
          for (j = 0; j < lastRandoms.length; j++) {
            if (x == lastRandoms[i]) {
              x = Math.floor(Math.random() * (11 - 0 + 1));
              console.log("Новый X2: " + x);
            }
          }
        }
      }
    }

    if (lastRandoms.length == 8) {
      lastRandoms = [];
    }
    lastRandoms.push(x);

    console.log(lastRandoms);
    id = "a" + x;

    document.getElementById("stopSong").style.backgroundImage =
      "url('img/audioplayer/stop.svg')"; //чтобы в случае нажатия кнопка play не оставалась
    playNewSong(id, x);
    swapPicture(id);
  });
});

/*
(function($){
$(document).ready(function(){
	$(".red-timeline").each(function(){
		var insert_val=$(this).find(".calс_tab_p_input_val");
		var curr_slide=$(this).slider({
			min:parseInt($(this).attr("data-min")),
			max:parseInt($(this).attr("data-max")),
			step:parseFloat($(this).attr("data-step")),
			value:parseInt($(this).attr("data-val")),
			stop: function(event, ui) {
				insert_val.val(curr_slide.slider("value"));
				//calc(); можно подключить функцию обработки/расчета если надо
			},
			slide: function(event, ui){
				setTimeout(function(){
					insert_val.val(curr_slide.slider("value"));
					//calc(); можно подключить функцию обработки/расчета если надо
				},30);
			}
		});
		
		insert_val.on("change",function(){
			var this_val=$(this).val();
			
			var tmp_1=curr_slide.slider("value");
			var tmp_2=this_val;
		
			if(tmp_1!=tmp_2){
				curr_slide.slider("value",tmp_2);
				//calc(); можно подключить функцию обработки/расчета если надо
			}
		});
		
		insert_val.val($(this).attr("data-val")).trigger("change");
		
	});
});
})(jQuery);
*/
