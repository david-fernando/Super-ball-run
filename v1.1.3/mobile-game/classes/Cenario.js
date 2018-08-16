function Cenario(){
	this.piso = loadImage("imagens/chao.png");
	this.chao = function(){
	   this.posicao_x_do_chao = 0;
       this.posicao_y_do_chao =  (window.innerHeight / 2) - 60;
       this.tamanho_x_do_chao = window.innerWidth;
       this.tamanho_y_do_chao = 125;
       image(this.piso, this.posicao_x_do_chao, this.posicao_y_do_chao, this.tamanho_x_do_chao, this.tamanho_y_do_chao);
	};
    
};