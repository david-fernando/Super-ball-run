function Pontos(){
	this.pontos = 0;
	this.texto_pontos = function(){
		textSize(60);
		fill(66, 66, 66);
		text("Pontos: " + this.pontos, window.innerWidth - 480, window.innerHeight / 35);
	};
	this.pontuacao = function(){
			this.pontos +=1;

	};
};