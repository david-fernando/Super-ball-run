function Controle(){
	this.x = windowWidth;
	this.y = windowHeight;
	this.controlador = loadImage("imagens/controle.png");
	this.direcional__superior_do_controlador_presssionado = loadImage("imagens/direcional_superior_pressionado.png");
	this.direcional__inferior_do_controlador_presssionado = loadImage("imagens/direcional_inferior_pressionado.png");
	this.direcional__direito_do_controlador_presssionado = loadImage("imagens/direcional_direito_pressionado.png");
	this.controle = function(){
		image(this.controlador, 0, this.y/ 2, this.x, this.y / 2 );
	}
	this.direcional_superior_pressionado = function(){
		image(this.direcional__superior_do_controlador_presssionado, 0, this.y/ 2, this.x, this.y / 2 );
	}
	this.direcional_inferior_pressionado = function(){
		image(this.direcional__inferior_do_controlador_presssionado, 0, this.y/ 2, this.x, this.y / 2 );
	}
	this.direcional_direito_pressionado = function(){
		image(this.direcional__direito_do_controlador_presssionado, 0, this.y/ 2, this.x, this.y / 2 );
	}
};
