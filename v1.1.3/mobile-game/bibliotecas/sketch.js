var lagura = window.innerWidth - 10;
var altura = window.innerHeight - 4;
var controle;
var cenario;
var personagem;
var tela_inicial;
var inicia = false;
var obstaculos = [];
var obstaculo;
var pontos;
var game_over;
var fim_de_jogo = false;
var tela_de_pause;
var pausado = false;
var tela_de_sobre;
var seleção = "jogar";
var escolha = null;
var mostrar_tela_de_sobre = false;
var mostrar_tela_inicial = true;
var apertou_botao_start = false;
var direcional_superior = false;
var direcional_inferior = false;
var direcional_direito = false;
function setup() {
	createCanvas(window.innerWidth - 10, window.innerHeight - 4);
	cenario = new Cenario();
	controle = new Controle();
	personagem = new Personagem();
	tela_inicial = new TelaInicial();
	obstaculos.push(new Obstaculos());
	obstaculo = new Obstaculos();
	pontos = new Pontos();
	game_over = new GameOver();
	tela_de_pause = new TeladePause();
	tela_de_sobre = new TeladeSobre();
	frameRate(60);
}

function draw() {
		if(inicia == false && pausado == false){
		background(57, 209, 239);
	    cenario.chao();
	    efeitodePressaoNoBotao();
		personagem.personagem();
		if(mostrar_tela_de_sobre == false || mostrar_tela_inicial == true){
			tela_inicial.tela_inicial();
			mostrar_tela_de_sobre = false;
			if(seleção == "jogar"){
				tela_inicial.selecionador_jogar();
			}else if(seleção == "sobre"){
				tela_inicial.selecionador_sobre();
			}
		}else if(mostrar_tela_de_sobre == true || mostrar_tela_inicial == false){
			tela_de_sobre.tela_de_sobre();
		}
	}else if(inicia == true && fim_de_jogo == false){
		background(57, 209, 239);
		pontos.texto_pontos();
           canodoMario();
	    cenario.chao();
	    personagem.personagem();
	    efeitodePressaoNoBotao();
	}
	if(pausado == true && inicia == false){
		background(57, 209, 239);
	    cenario.chao();
	    tela_de_pause.tela_de_pause();
	    if(direcional_superior == true){
	    		controle.direcional_superior_pressionado();
	    	}else{
	    	controle.controle();
	    }
		personagem.personagem();
	}else if(fim_de_jogo == true){
		background(57, 209, 239);
	    cenario.chao();
	    controle.controle();
	    personagem.personagem();
	    game_over.tela_game_over();
	    restauracaodeValoresDasVariaveis();
	}
}
function restauracaodeValoresDasVariaveis(){
		if(game_over.contagem_regressiva < 1){
	        inicia = false;
	        pausado = false;
	        if(inicia == false){
	        	fim_de_jogo = false;
	        	pontos.pontos = 0;
	        	game_over.contagem_regressiva = 10;
	        }
	    }
}
function efeitodePressaoNoBotao(){
		if(direcional_superior == true && mouseIsPressed){
	    	controle.direcional_superior_pressionado();
	    }else{
	    	controle.controle();
	    }
	    if(direcional_inferior == true && mouseIsPressed){
	    	controle.direcional_inferior_pressionado();
	    }else{
	    	controle.controle();
	    }
	    if(direcional_direito == true && mouseIsPressed){
	    	controle.direcional_direito_pressionado();
	    }else{
	    	controle.controle();
	    }
}
function canodoMario(){
		if(frameCount % 21 == 0 && fim_de_jogo == false){
			obstaculos.push(new Obstaculos());
		}
		for(var i = 0; i < obstaculos.length; i++){
			obstaculos[i].cano();
	        obstaculos[i].movimento_do_cano();
	        if(obstaculos[i].impacto_com_o_cano(personagem.pos_x, personagem.pos_y)){
	        	fim_de_jogo = true;
	        }
	        if(fim_de_jogo == false){
	        	obstaculos[i].posicao_x_do_cano = obstaculos[i].posicao_x_do_cano;
	        }
	        if(fim_de_jogo == true){
	        	obstaculos[i].resetar_posicao_do_cano();
	        }
	        if(obstaculos[i].posicao_x_do_cano < personagem.pos_x - 60 && fim_de_jogo == false){
	        	pontos.pontuacao();
	        }
	    }
}
function localizarBotaoStart(){
	    var localizar_botao_start = dist(mouseX, mouseY,(window.innerWidth / 2) + (window.innerWidth / 4.7), (window.innerHeight / 2) + (window.innerHeight / 4));
		if(localizar_botao_start < 95){
		if(seleção == "jogar" && apertou_botao_start == true) {
			inicia = true;
		    fim_de_jogo = false;
		    pausado = false;
		    apertou_botao_start = false;
		}
		if(mostrar_tela_de_sobre == true && apertou_botao_start == true){
		   mostrar_tela_inicial = true;
		   apertou_botao_start = false;
	    }
		if(seleção == "sobre" && apertou_botao_start == true && mostrar_tela_de_sobre == false){
            apertou_botao_start = false;
			mostrar_tela_de_sobre = true;
			mostrar_tela_inicial = false;
		}
	    if(apertou_botao_start == false){
			apertou_botao_start = true;
		}

	}
}
function localizarCursorDoMouse(){
	console.log("mouseX: "+ mouseX + "\nmouseY: " + mouseY + "\nAltura: "+ altura + "\nLagura: " + lagura);
}
function iniciodoJogo(){
	    var localizar_botao_pause = dist(mouseX, mouseY,(window.innerWidth / 2) + (window.innerWidth / 2.4), (window.innerHeight / 2) + (window.innerHeight / 4));
	    var localizar_direcional_superior = dist(mouseX, mouseY,window.innerWidth / 3.20, window.innerHeight / 1.48);
	    var localizar_direcional_inferior = dist(mouseX, mouseY,window.innerWidth / 3.20, window.innerHeight / 1.20);
		if(inicia == true && fim_de_jogo == false){
		    if(localizar_direcional_superior < 140){
			    personagem.pular();
		        setTimeout(function(){ personagem.cair(); },1600);
		        direcional_superior = true;
		}
		if(localizar_botao_pause < 95){
		    if(pausado == false){
			    pausado = true;
			    inicia = false;
		    }
	    }
	}else{
		jogoNaoIniciado(localizar_direcional_superior, localizar_direcional_inferior);
	}
}
function jogoNaoIniciado(localizar_direcional_superior, localizar_direcional_inferior){
		if(localizar_direcional_inferior < 140){
			seleção = "sobre";
			direcional_inferior = true;
		}else{
			direcional_inferior = false;
		}
		if(localizar_direcional_superior < 140){
			seleção = "jogar";
			direcional_superior = true;		
		}else{
			direcional_superior = false;
		}
}
function touchStarted(){
	//localizarCursorDoMouse();
	localizarBotaoStart();
	iniciodoJogo();
}
