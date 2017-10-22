function GameOver(){
	this.contagem_regressiva = 10;
	this.tela_game_over = function(){
		noStroke();
		fill(0);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.texto_da_tela_de_game_over();
		this.Contagem_Regressiva();
	};
	this.texto_da_tela_de_game_over = function(){
		textSize(150);
		fill(255);
		text("Game Over",window.innerWidth / 4, window.innerHeight / 7);
		textSize(100)
		text("\nContagem regressiva: " + this.contagem_regressiva,window.innerWidth / 7, window.innerHeight / 3.5); 
	};
	this.Contagem_Regressiva = function(){
			this.contagem_regressiva -= 1;
	};
};