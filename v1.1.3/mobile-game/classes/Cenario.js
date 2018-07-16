function Cenario(){
	this.chao = function(){
	   this.posicao_x_do_chao = 0;
       this.posicao_y_do_chao =  (window.innerHeight / 2) - 60;
       this.tamanho_x_do_chao = window.innerWidth;
       this.tamanho_y_do_chao = window.innerHeight  / 2;
       fill(193, 148, 63);
       rect(this.posicao_x_do_chao, this.posicao_y_do_chao, this.tamanho_x_do_chao, this.tamanho_y_do_chao);
	};
    
};