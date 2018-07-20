function TeladeSobre(){
	this.pos_y = window.innerHeight / 2.4;
	this.pos_x = window.innerWidth / 1.2;
	this.tela_de_sobre = function(){
		noStroke();
		fill(107, 107, 106, 80);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.botao_voltar();
		fill(255);
		textAlign(LEFT);
		textSize(80);
		textFont("Arial");
		this.sobre();
		this.dados_tecnicos();
		this.desenvoldor();
		this.github();
		this.voltar();
	};
	this.sobre = function(){
		text("Sobre:", window.innerWidth / 35, window.innerHeight / 15);
	};
	this.dados_tecnicos = function(){
		text("Dados técnicos: \nVersão: 1.1.3",window.innerWidth / 35, window.innerHeight / 7);
	};
	this.desenvoldor = function(){
		text("Idéia, desenho e desenvolvimento:\nDavid Fernando da Mata Souza",window.innerWidth / 35, window.innerHeight / 4);
	};
	this.github = function(){
		text("GitHub:\nhttps://github.com/david-fernando/",window.innerWidth / 35, window.innerHeight / 2.8);
	};
	this.voltar = function(){
		textAlign(LEFT);
		text("voltar",window.innerWidth/ 1.2, window.innerHeight / 2.2);
	}
	this.botao_voltar = function(){
		fill("#6b6b6b");
		rect(this.pos_x, this.pos_y, 202, 130);
	};
};