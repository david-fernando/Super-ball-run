function TelaInicial(){
	this.tela_inicial = function(){
		noStroke();
		fill(107, 107, 106, 80);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.logo();
		this.aperte_start();
		this.sobre();
	};
	this.logo = function(){
		textSize(150);
		fill(232, 183, 9);
		textLeading(150);
		text("Super\n Ball\nrun",window.innerWidth / 2.5, window.innerHeight / 7);
	};
	this.aperte_start = function(){
		textSize(100);
		fill(255);
		text("Jogar",window.innerWidth / 2.5, window.innerHeight / 2.9);
	};
	this.sobre = function(){
		fill(255);
		text("Sobre",window.innerWidth / 2.5, window.innerHeight / 2.4);
	};
	this.credito = function(){
		fill(255);
		text("Crédito");
	};
};