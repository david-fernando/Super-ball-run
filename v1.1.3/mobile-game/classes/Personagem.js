function Personagem(){
	this.pos_y = (window.innerHeight / 2) - (window.innerHeight / 25);
	this.pos_x = window.innerWidth / 2;
	this.velocidade = 170;
	this.velocidade_de_caida = 3;
	this.gravidade = 1;
	this.teto_maximo = (window.innerHeight / 2) + (window.innerHeight / 1.5);
	this.chao = (window.innerHeight / 2) - (window.innerHeight / 25);
	this.personagem = function(){
		fill(232, 191, 30);
		ellipse(this.pos_x,this.pos_y,80,80);
	};
	this.pular = function(){
		    this.pos_y += -this.velocidade, this.gravidade;
	};
	this.cair = function(){
		if(this.pos_y < this.teto_maximo){
			this.pos_y -= +this.velocidade_de_caida, 0.5;
		}
		if(this.pos_y < this.chao){
			this.pos_y = (window.innerHeight / 2) - (window.innerHeight / 25);
		}
	};
};