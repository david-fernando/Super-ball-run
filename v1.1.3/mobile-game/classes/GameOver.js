function GameOver(){
	this.contagem_regressiva = 10;
	this.super_mario_bros_font = loadFont("fonts/smbfont.ttf");
	this.game_over = loadImage("imagens/game_over_sem_fundo.png");
	this.tela_game_over = function(){
		noStroke();
		fill(0);
		rect(0,0,window.innerWidth , window.innerHeight / 2);
		this.texto_da_tela_de_game_over();
	    this.Contagem_Regressiva();
	};
	this.texto_da_tela_de_game_over = function(){
		//textSize(150);
		fill(255);
		//textFont(this.super_mario_bros_font);
		//text("Game Over",window.innerWidth / 4.5, window.innerHeight / 4);
		image(this.game_over, window.innerWidth / 4, window.innerHeight / 5.5, 640, 200);
		textSize(160)
		textFont(this.super_mario_bros_font);
		text(this.contagem_regressiva,window.innerWidth / 2.2, window.innerHeight / 3, 1600);
	};
	this.Contagem_Regressiva = function(){
			this.contagem_regressiva -= setTimeout(function(){1},30000);
	};
};
