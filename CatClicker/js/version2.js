function Cat(name){
	this.name=name;
	this.clicks=0;

	this.clicked = function(){
		this.clicks++;
	};
}

(function(){
	var model={
		init:function(){
			for(var x=0; x<10; x++){
				var cat = new Cat("Cat "+(x+1));
				this.cats.push(cat);
			}
			controller.addCats(this.cats);
		},
		existCatImg:function(url){
			var http = new XMLHttpRequest();
			http.open('HEAD', url, false);
			http.send();
			return http.status != 404;
		},
		handleClick:function(cat){
			cat.clicked();
		},
		cats:[]

	};

	var view = {
		init:function(){
			this.container = document.getElementsByClassName("cats")[0];
			this.inited=true;
		},
		container:null,
		inited:false,
		main:null,
		renderCats:function(cats){
			for(var x=0; x<cats.length; x++){
				var cat = cats[x];
				var main = document.createElement("div");
				main.className="cat";
				var div = document.createElement("div");
				div.className="img";

				if (controller.existCatImg('img/cat' + x + '.jpg')) {
					div.style.background = 'url("img/cat' + x + '.jpg") no-repeat';
				} else {
					div.style.background = 'url("img/cat6.jpg") no-repeat';
				}
				div.style.backgroundSize = 'cover';
				var h4= document.createElement("h4");
				h4.textContent=cat.name;
				
				main.appendChild(div);
				main.appendChild(h4);
				main.onclick = function(main, cat, x){
					return function(){
						view.handleClick(main, cat, x);
					};
				}(main, cat, x);
				this.container.appendChild(main);
			}
		},
		
		handleClick:function(div, cat, x){
			view.changeMainDiv(div);
			controller.handleClick(cat);
			view.changeMainImg(x)
			view.changeMainText(cat)			
		},
		changeMainDiv:function(div){
			if(view.main !== null)
				view.main.style.display='inline-block';
			else
				document.getElementById("theme").style.display="none";
			view.main = div;

			var mainDiv = document.getElementById("catDisplay");
			if(mainDiv.style.display==='none')
				mainDiv.style.display='inline-block';

			div.style.display='none';
		},
		changeMainImg:function(x){
			var img = document.getElementById("mainCatImg");
			if (controller.existCatImg('img/cat' + x + '.jpg')) {
				img.style.background = 'url("img/cat' + x + '.jpg") no-repeat';
			} else {
				img.style.background = 'url("img/cat6.jpg") no-repeat';
			}
			img.style.backgroundSize = 'cover';
		},
		changeMainText :function(cat){
			document.getElementById("totalClicksMain").textContent = cat.clicks;
			document.getElementById("mainCatName").textContent = cat.name;
		}
	};

	var controller={
		init:function(){
			view.init();
			while(!view.inited){
				setTimeout(function(){
					console.log("view not inited");
					view.init();

				}, 500);
			}
			model.init();
		},

		addCats:function(cats){
			console.log(cats);
			view.renderCats(cats);
		},
		existCatImg:function(url){
			return model.existCatImg(url);
		},
		handleClick:function(cat){
			model.handleClick(cat);
		}
	};

	controller.init();
})();