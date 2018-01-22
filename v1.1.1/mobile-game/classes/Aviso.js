function Aviso(){
	this.x = windowWidth / 3;
	this.y = windowHeight / 2;
	this.texto_aviso;
	this.aviso= function(){
		this.texto_aviso = "Dispositivo inconpativel.\nEste game funciona somente em smartphone.";
		textSize(32);
		fill(255);
		text(this.texto_aviso, this.x, this.y);
	};
};