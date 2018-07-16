function TeladePause(){
	this.tela_de_pause = function(){
		noStroke();
		fill(107, 107, 106, 80);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.texto_de_pause();
	};
	this.texto_de_pause = function(){
		textSize(100);
		fill(255);
		text("--pausado--",window.innerWidth / 3, window.innerHeight / 4);
	};
};