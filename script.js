var li = document.getElementsByTagName("li");

Array.from(li).forEach( function(element, index) {
	element.addEventListener("click",()=>{
		var active = document.getElementsByClassName("active");
		active[0].className = "";
		element.className = "active";
	})
});

var hamburger = document.getElementById("hamburger");
var blc = document.getElementById("blc");
var blur = document.getElementById("blur");

hamburger.addEventListener("click", ()=>{
	if (hamburger.className=="") {
		blur.style.display = 'block';
		setTimeout(()=>{
			blur.style.opacity = '1';
			hamburger.className="is-active";
			blc.style.left = '0';
		}, 100);
	}else{
		setTimeout(()=>{
			blur.style.display = 'none';
		}, 300);
		blur.style.opacity = '0'
		hamburger.className="";
		blc.style.left = '-230px';
	}
})

var blur2 = document.getElementById("blur2");
var imgs = document.getElementsByClassName("imgs");
var imgs2 = document.getElementsByClassName("imgs2");
var imgp = document.getElementById("imgp");
var imgp2 = document.getElementById("imgp2");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var plus = document.getElementById("plus");
var moins = document.getElementById("moins");
var photos2 = document.getElementById("photos2");
var cont = document.getElementById("cont");
var ph = 0;
var cn = 0;

Array.from(imgs).forEach( function(element, index) {
	element.addEventListener("click", ()=>{
		ph=index;
		imgp.src = element.src;
		var act = document.getElementsByClassName("imact");
		act[0].className = act[0].className.replace(" imact", "");
		element.className = element.className + " imact";
	});
});

Array.from(imgs2).forEach( function(element, index) {
	element.addEventListener("click", ()=>{
		imgp2.src = element.src;
		var act = document.getElementsByClassName("imact2");
		act[0].className = act[0].className.replace(" imact2", "");
		element.className = element.className + " imact2";
	});
});


imgp.addEventListener("click", ()=>{
	blur2.style.display = 'flex';
	imgp2.src = imgp.src;
	var act = document.getElementsByClassName("imact2");
	act[0].className = act[0].className.replace(" imact2", "");
	imgs2[ph].className = imgs2[ph].className + " imact2";
	setTimeout(()=>{
		blur2.style.opacity = '1';
	}, 100);
});

close.addEventListener("click",()=>{
	blur2.style.opacity = '0';
	setTimeout(()=>{
		blur2.style.display = 'none';
	}, 300);
});

next.addEventListener("click",()=>{
	ph++;
	if (ph == 4 ) {
		ph = 0;
	}
	imgp2.src = imgs[ph].src;
	var act = document.getElementsByClassName("imact2");
	act[0].className = act[0].className.replace(" imact2", "");
	imgs2[ph].className = imgs2[ph].className + " imact2";
});

prev.addEventListener("click",()=>{
	ph--;
	if (ph == -1 ) {
		ph = 3;
	}
	imgp2.src = imgs[ph].src;
	var act = document.getElementsByClassName("imact2");
	act[0].className = act[0].className.replace(" imact2", "");
	imgs2[ph].className = imgs2[ph].className + " imact2";
});

plus.addEventListener("click", ()=>{
	if (cn < 25) {
		cn++;
		cont.textContent = cn;
	}
});

moins.addEventListener("click", ()=>{
	if (cn > 0) {
		cn--;
		cont.textContent = cn;
	}
});

var pan = document.getElementById("pan");
var cart = document.getElementById("cart");
var btn = document.getElementById("btn");
var vidcart = document.getElementById("vidcart");
var concart = document.getElementById("concart");
var pann = document.getElementById("pann");
var crtsvg = document.getElementById("crtsvg");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var itm = 0;


pan.addEventListener("click", ()=>{

	if (cart.style.display == 'block') {
		cart.style.display = 'none';	
	} else {
		cart.style.display = 'block';
	}
});

btn.addEventListener("click", ()=>{
	if (cn==0) {
		alert("Select number of items");
	} else {
		itm = itm + cn;
		p1.textContent = "$125.00 x "+itm;
		p2.textContent = "$"+125*itm+".00";
		pann.textContent = itm;
		concart.style.display = 'block';
		pann.style.display = 'flex';
		vidcart.style.display = 'none';
	}
});

crtsvg.addEventListener("click",()=>{
	itm = 0;
	concart.style.display = 'none';
	pann.style.display = 'none';
	vidcart.style.display = 'flex';
});


var next1 = document.getElementById("next1");
var prev1 = document.getElementById("prev1");

next1.addEventListener("click",()=>{
	ph++;
	if (ph == 4 ) {
		ph = 0;
	}
	imgp.src = imgs[ph].src;
	var act = document.getElementsByClassName("imact");
	act[0].className = act[0].className.replace(" imact", "");
	imgs[ph].className = imgs[ph].className + " imact";
});

prev1.addEventListener("click",()=>{
	ph--;
	if (ph == -1 ) {
		ph = 3;
	}
	imgp.src = imgs[ph].src;
	var act = document.getElementsByClassName("imact");
	act[0].className = act[0].className.replace(" imact", "");
	imgs[ph].className = imgs[ph].className + " imact";
});

var load = document.getElementById("box"); 
setTimeout(()=>{
	load.style.opacity = '0';
	setTimeout(()=>{
		load.style.display = 'none';
	}, 500);
}, 1000);
