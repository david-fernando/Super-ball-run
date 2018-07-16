function Obstaculos(){
	this.velocidade = 95;
	this.x = (window.innerWidth / 2) + (window.innerWidth / 4)+ (window.innerWidth / 2.5);
	this.posicao_x_da_entrada = (window.innerWidth / 2) + (window.innerWidth / 1.6) + 12;
  this.tamanho_y_do_cano =  150;

	this.cano = function(){
      stroke(0);
      strokeWeight(2);
      fill(95, 211, 57);
      this.posicao_y_do_cano =  (window.innerHeight / 4) + (window.innerWidth / 3);
      this.tamanho_x_do_cano = 80;
      rect(this.x, this.posicao_y_do_cano, this.tamanho_x_do_cano, this.tamanho_y_do_cano );
    };
    this.entrada_do_cano = function(){
      stroke(0);
      strokeWeight(2);
      fill(95, 211, 57);
      this.posicao_y_do_entrada =  (window.innerHeight / 4) + (window.innerWidth / 3.3);
      this.tamanho_x_do_entrada = 120;
      this.tamanho_y_do_entrada =  50;
      rect(this.posicao_x_da_entrada, this.posicao_y_do_entrada, this.tamanho_x_do_entrada, this.tamanho_y_do_entrada );
    };
    this.impacto_com_o_cano = function(posicao_x_do_personagem, posicao_y_do_personagem){
      this.posicao_x_do_personagem = posicao_x_do_personagem;
      this.posicao_y_do_personagem = posicao_y_do_personagem;
      this.localizar_obstaculo = dist(this.posicao_x_do_personagem - 140, this.posicao_y_do_personagem, this.x, (window.innerHeight / 2) - (window.innerHeight / 26));
      if(this.localizar_obstaculo < 60){
        return true;
      }else{
        return false;
      }
    };
    this.resetar_posicao_do_cano = function(){
        this.x = (window.innerWidth / 2) + (window.innerWidth / 4)+ (window.innerWidth / 2.5);  
        this.tamanho_y_do_cano =  150;
    };
    this.movimento_do_cano = function(){
      this.x -= this.velocidade;
      this.posicao_x_da_entrada -= this.velocidade;
      this.posicao_x_da_area_de_impacto_superior -= this.velocidade;
    };
};