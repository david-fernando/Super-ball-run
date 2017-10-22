var lagura = window.innerWidth - 10;
var altura = window.innerHeight - 4;
var aviso;
var controle;
var cenario;
var personagem;
var tela_inicial;
var inicia = false;
var obstaculos = [];
var pontos;
var game_over;
var fim_de_jogo = false;
var tela_de_pause;
var pausado = false;
function setup() {
	createCanvas(window.innerWidth - 10, window.innerHeight - 4);
	aviso = new Aviso();
	cenario = new Cenario();
	controle = new Controle();
	personagem = new Personagem();
	tela_inicial = new TelaInicial();
	obstaculos.push(new Obstaculos());
	pontos = new Pontos();
	game_over = new GameOver();
	tela_de_pause = new TeladePause();
	frameRate(60);
}

function draw() {
	if(WURFL.is_mobile == true && WURFL.form_factor == "Smartphone"){
		if(inicia == false && pausado == false){
		background(57, 209, 239);
	    cenario.chao();
	    controle.painel();
	    controle.bolaemvoltadassetas();
	    controle.texto_start_e_pause();
	    controle.direcional_superior();
	    controle.direcional_inferior();
	    controle.centro_do_direcional();
	    controle.direcional_direito();
	    controle.direcional_esquerdo();
	    controle.bolinha_no_centro_do_direcional();
		personagem.personagem();
		tela_inicial.tela_inicial();
	    controle.botao_start();
	    controle.botao_pause();
	}else if(inicia == true && fim_de_jogo == false){
		if(pausado == true && inicia == false){
		background(57, 209, 239);
	    cenario.chao();
	    controle.painel();
	    controle.bolaemvoltadassetas();
	    controle.texto_start_e_pause();
	    controle.direcional_superior();
	    controle.direcional_inferior();
	    controle.centro_do_direcional();
	    controle.direcional_direito();
	    controle.direcional_esquerdo();
	    controle.bolinha_no_centro_do_direcional();
		personagem.personagem();
		tela_de_pause.tela_de_pause();
	    controle.botao_start();
	    controle.botao_pause();
	}else{
		background(57, 209, 239);
		pontos.texto_pontos();
		if(frameCount % 21 == 0 && fim_de_jogo == false){
			obstaculos.push(new Obstaculos());
		}
		for(var i = 0; i < obstaculos.length; i++){
			obstaculos[i].cano();
	        obstaculos[i].entrada_do_cano();
	        obstaculos[i].movimento_do_cano();
	        if(obstaculos[i].impacto_com_o_cano(personagem.pos_x, personagem.pos_y)){
	        	fim_de_jogo = true;
	        }
	        if(fim_de_jogo == false){
	        	obstaculos[i].x = obstaculos[i].x;
	        }
	        if(obstaculos[i].posicao_x_da_entrada < personagem.pos_x - 60 && fim_de_jogo == false){
	        	pontos.pontuacao();
	        }
	    }
	    cenario.chao();
	    controle.painel();
	    controle.bolaemvoltadassetas();
	    controle.texto_start_e_pause();
	    controle.direcional_superior();
	    controle.direcional_inferior();
	    controle.centro_do_direcional();
	    controle.direcional_direito();
	    controle.direcional_esquerdo();
	    controle.bolinha_no_centro_do_direcional();
		personagem.personagem();
	    controle.botao_start();
	    controle.botao_pause();
	}
	}else if(fim_de_jogo == true){
		if(game_over.contagem_regressiva < 1){
	        		   inicia = false;
	        		   if(inicia == false){
	        			  fim_de_jogo = false;
	        			  pontos.pontos = 0;
	        		   }
	        	  }
		background(57, 209, 239);
	    cenario.chao();
	    controle.painel();
	    controle.bolaemvoltadassetas();
	    controle.texto_start_e_pause();
	    controle.direcional_superior();
	    controle.direcional_inferior();
	    controle.centro_do_direcional();
	    controle.direcional_direito();
	    controle.direcional_esquerdo();
	    controle.bolinha_no_centro_do_direcional();
		personagem.personagem();
		game_over.tela_game_over();
	    controle.botao_start();
	    controle.botao_pause();
	}
}else{
	background(66, 66, 66);
	aviso.aviso();
}
}
function mousePressed(){
	//console.log("mouseX: "+ mouseX + "\nmouseY: " + mouseY + "\nAltura: "+ altura + "\nLagura: " + lagura);
	var localizar_botao_start = dist(mouseX, mouseY,(window.innerWidth / 2) + (window.innerWidth / 4.7), (window.innerHeight / 2) + (window.innerHeight / 4));
	var localizar_botao_pause = dist(mouseX, mouseY,(window.innerWidth / 2) + (window.innerWidth / 2.4), (window.innerHeight / 2) + (window.innerHeight / 4));
	var localizar_direcional_superior = dist(mouseX, mouseY,window.innerWidth / 3.20, window.innerHeight / 1.48);
	if(localizar_botao_start < 95){
		//console.log(localizar_botao_start);
		//console.log("mouseX: "+ mouseX + "\nmouseY: " + mouseY + "\nAltura: "+ altura + "\nLagura: " + lagura);
		inicia = true;
		fim_de_jogo = false;
		pausado = false;
	}
	if(inicia == true){
		if(localizar_direcional_superior < 140){
			setTimeout(function(){ personagem.pular(); }, 100);
		    setTimeout(function(){ personagem.cair(); },1600);
		}
		if(localizar_botao_pause < 95){
			if(pausado == false){
				pausado = true;
				inicia = false;
			}else if (pausado == true){
				pausado = false;
				inicia = true;
			}
	    }
	}
}
