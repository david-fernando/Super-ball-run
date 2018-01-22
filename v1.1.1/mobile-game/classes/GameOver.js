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
		text("Game Over",window.innerWidth / 4.5, window.innerHeight / 4);
		textSize(160)
		text(this.contagem_regressiva,window.innerWidth / 2.2, window.innerHeight / 3); 
	};
	this.Contagem_Regressiva = function(){
			this.contagem_regressiva -= 1;
	};
};