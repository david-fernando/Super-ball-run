function TelaInicial(){
	this.tela_inicial = function(){
		noStroke();
		fill(107, 107, 106, 80);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.logo();
		this.aperte_start();
	};
	this.logo = function(){
		textSize(150);
		fill(232, 183, 9);
		text(" Super \nBall \n run",window.innerWidth / 3, window.innerHeight / 7);
	};
	this.aperte_start = function(){
		textSize(100);
		fill(255);
		text("  Aperte \n --start--",window.innerWidth / 2.5, window.innerHeight / 2.5);
	};
};