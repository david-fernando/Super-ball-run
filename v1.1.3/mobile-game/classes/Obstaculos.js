function Obstaculos(){
	this.velocidade = 85.5;
	this.posicao_x_do_cano = (window.innerWidth / 2) + (window.innerWidth / 4)+ (window.innerWidth / 2.5);
  this.tamanho_y_do_cano =  150;
  this.cano_do_mario = loadImage("imagens/super-mario-brothers-147465_960_720.png");

	this.cano = function(){
      this.posicao_y_do_cano =  (window.innerHeight / 4) + (window.innerWidth / 3);
      this.tamanho_x_do_cano = 120;
      image(this.cano_do_mario ,this.posicao_x_do_cano, this.posicao_y_do_cano, this.tamanho_x_do_cano, this.tamanho_y_do_cano );
    };
    this.impacto_com_o_cano = function(posicao_x_do_personagem, posicao_y_do_personagem){
      this.posicao_x_do_personagem = posicao_x_do_personagem;
      this.posicao_y_do_personagem = posicao_y_do_personagem;
      this.localizar_obstaculo = dist(this.posicao_x_do_personagem - 140, this.posicao_y_do_personagem, this.posicao_x_do_cano, (window.innerHeight / 2) - (window.innerHeight / 26));
      if(this.localizar_obstaculo < 60){
        return true;
      }else{
        return false;
      }
    };
    this.resetar_posicao_do_cano = function(){
        this.posicao_x_do_cano = (window.innerWidth / 2) + (window.innerWidth / 4)+ (window.innerWidth / 2.5);
    };
    this.movimento_do_cano = function(){
      this.posicao_x_do_cano -= this.velocidade;
      this.posicao_x_da_area_de_impacto_superior -= this.velocidade;
    };
};