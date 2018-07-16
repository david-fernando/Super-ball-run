function Controle(){
	this.x = windowWidth;
	this.y = windowHeight;
	this.controlador = loadImage("imagens/controle.png");
	this.direcional__superior_do_controlador_presssionado = loadImage("imagens/direcional_superior_pressionado.png")
	this.controle = function(){
		image(this.controlador, 0, this.y/ 2, this.x, this.y / 2 );
	}
	this.direcional_superior_pressionado = function(){
		image(this.direcional__superior_do_controlador_presssionado, 0, this.y/ 2, this.x, this.y / 2 );
	}
	this.painel = function(){
		 fill(255);
		 rect(0, this.y/ 2, this.x, this.y / 2 );
	};
	this.direcional_superior = function(){
		fill(66, 66, 66);
		noStroke();
		this.posicao_x_do_direcional_superior = (window.innerWidth / 2) - (window.innerWidth / 4);
		this.posicao_y_do_direcional_superior = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 24);
	    this.tamanho_y_do_direcional_superior = window.innerHeight / 8;
	    this.tamanho_x_do_direcional_superior = window.innerWidth / 10;
		rect(this.posicao_x_do_direcional_superior, this.posicao_y_do_direcional_superior, this.tamanho_x_do_direcional_superior, this.tamanho_y_do_direcional_superior, 10);
	};
	this.direcional_inferior = function(){
         fill(66, 66, 66);
         noStroke();
         this.tamanho_x_do_direcional_inferior = window.innerWidth / 10;
	     this.tamanho_y_do_direcional_inferior = window.innerHeight / 8;
	     this.posicao_x_do_direcional_inferior = (window.innerWidth / 2) - (window.innerWidth / 4) ;
	     this.posicao_y_do_direcional_inferior = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 8) + (window.innerHeight / 14);
	     rect(this.posicao_x_do_direcional_inferior, this.posicao_y_do_direcional_inferior, this.tamanho_x_do_direcional_inferior, this.tamanho_y_do_direcional_inferior, 10);
	};
	this.centro_do_direcional = function(){
		fill(66, 66, 66);
		noStroke();
	    this.tamanho_x_do_centro = (window.innerHeight / 16) ;
	    this.tamanho_y_do_centro = window.innerWidth / 10;
	    this.posicao_x_do_centro = (window.innerWidth / 2) - (window.innerWidth / 4) ;
	    this.posicao_y_do_centro = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 25);
	    rect(this.posicao_x_do_centro, this.posicao_y_do_centro, this.tamanho_x_do_centro, this.tamanho_y_do_centro);
	};
	this.direcional_direito = function(){
		fill(66, 66, 66);
		noStroke();
	    this.tamanho_x_do_direcional_direito = (window.innerHeight / 8);
	    this.tamanho_y_do_direcional_direito = window.innerWidth / 10;
	    this.posicao_x_do_direcional_direito = (window.innerWidth / 2) - (window.innerWidth / 8) - (window.innerWidth / 20);
	    this.posicao_y_do_direcional_direito = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 25);
	    rect(this.posicao_x_do_direcional_direito, this.posicao_y_do_direcional_direito, this.tamanho_x_do_direcional_direito, this.tamanho_y_do_direcional_direito, 10);
	};
	this.direcional_esquerdo = function(){
		fill(66, 66, 66);
		noStroke();
        this.tamanho_x_do_direcional_direito = (window.innerHeight / 8);
	    this.tamanho_y_do_direcional_direito = window.innerWidth / 10;
	    this.posicao_x_do_direcional_direito = (window.innerWidth / 2) - (window.innerWidth / 4) - (window.innerWidth / 7);
	    this.posicao_y_do_direcional_direito = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 25);
	    rect(this.posicao_x_do_direcional_direito, this.posicao_y_do_direcional_direito, this.tamanho_x_do_direcional_direito, this.tamanho_y_do_direcional_direito, 10);
	};
	this.bolaemvoltadassetas = function(){
		fill(150,80);
	    color(0);
	    stroke(0, 0, 0, 10);
	    strokeWeight(8);
        this.tamanho_x_da_ellipse = (window.innerWidth / 3) + (window.innerWidth / 4);
	    this.tamanho_y_da_ellipse = (window.innerHeight / 5) + (window.innerHeight / 5);
	    this.posicao_x_da_ellipse = (window.innerWidth / 2.5) - (window.innerWidth / 10.5);
	    this.posicao_y_da_ellipse = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 25) + (window.innerHeight / 28);
	    ellipse(this.posicao_x_da_ellipse, this.posicao_y_da_ellipse, this.tamanho_x_da_ellipse, this.tamanho_y_da_ellipse);
	};
	this.bolinha_no_centro_do_direcional = function(){
		noStroke();
	    fill(0,0,0, 95);
	    this.tamanho_x_da_bolinha = window.innerWidth / 12;
	    this.tamanho_y_da_bolinha = window.innerHeight / 20;
	    this.posicao_x_da_bolinha = (window.innerWidth / 2) - (window.innerWidth / 8) - (window.innerWidth / 14);
	    this.posicao_y_da_bolinha = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 14);
	    ellipse(this.posicao_x_da_bolinha, this.posicao_y_da_bolinha, this.tamanho_x_da_bolinha, this.tamanho_y_da_bolinha);
    };
    this.texto_start_e_pause = function(){
    	this.texto_start = "start";
	    this.texto_pause = "pause";
	    this.posicao_x_do_texto_start = (window.innerWidth / 2) - (window.innerWidth / 200) + (window.innerWidth / 16) + (window.innerWidth / 10.5) ;
	    this.posicao_y_do_texto_start = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 7);
	    this.posicao_x_do_texto_pause = (window.innerWidth / 2) - (window.innerWidth / 200) + (window.innerWidth / 5) + (window.innerWidth / 7.5) ;
	    this.posicao_y_do_texto_pause = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 9) + (window.innerHeight / 7);
	    textSize(42);
	    fill(66, 66, 66);
			textFont("Arial");
	    text(this.texto_start, this.posicao_x_do_texto_start, this.posicao_y_do_texto_start);
	    text(this.texto_pause, this.posicao_x_do_texto_pause, this.posicao_y_do_texto_pause);
	};
	this.botao_start = function(){
		fill(66 ,66, 66);
	    this.tamanho_x_do_botao_start = window.innerWidth / 20;
	    this.tamanho_y_do_botao_start = (window.innerHeight / 10);
	    this.posicao_x_do_botao_start = (window.innerWidth / 100) + (window.innerWidth / 60) + (window.innerWidth / 3.5);
	    this.posicao_y_do_botao_start = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 11) + (window.innerHeight / 45);
	    translate(this.tamanho_x_do_botao_start, this.tamanho_y_do_botao_start);
	    rotate(50);
	    rect(this.posicao_x_do_botao_start, this.posicao_y_do_botao_start, this.tamanho_x_do_botao_start, this.tamanho_y_do_botao_start, 20);
	};
	this.botao_pause = function(){
		fill(66 ,66, 66);
	    this.tamanho_x_do_botao_pause = window.innerWidth / 20;
	    this.tamanho_y_do_botao_pause = (window.innerHeight / 10);
	    this.posicao_x_do_botao_pause = (window.innerWidth / 100) + (window.innerWidth / 5) + (window.innerWidth / 3.5);
	    this.posicao_y_do_botao_pause = (window.innerHeight / 2) + (window.innerHeight / 16) + (window.innerHeight / 10.5) + (window.innerHeight / 21.5);
	    rect(this.posicao_x_do_botao_pause, this.posicao_y_do_botao_pause, this.tamanho_x_do_botao_pause, this.tamanho_y_do_botao_pause, 20);
	};
};
