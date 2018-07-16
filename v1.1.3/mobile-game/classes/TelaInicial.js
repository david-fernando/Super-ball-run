function TelaInicial(){
	this.logo_tipo = loadImage("imagens/logo-tipo3.png");
	this.selecionador_de_jogar = loadImage("imagens/selecionador_jogar.png");
	this.selecionador_de_sobre = loadImage("imagens/selecionador_sobre.png");
	this.tela_inicial = function(){
		noStroke();
		fill(107, 107, 106, 80);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.logo();
	};
	this.logo = function(logo_tipo){
		image(this.logo_tipo,window.innerWidth / 3, window.innerHeight / 10, window.innerWidth/2.5, window.innerHeight/5);
	};
	this.selecionador_jogar = function(){
		image(this.selecionador_de_jogar,window.innerWidth / 3.3, window.innerHeight / 3.3, window.innerWidth/3, window.innerHeight/7.3);
	}
	this.selecionador_sobre = function(){
		image(this.selecionador_de_sobre,window.innerWidth / 3.3, window.innerHeight / 3.3, window.innerWidth/3, window.innerHeight/7.3);
	}
};
