function Selecionador() {
	this.pos_y = window.innerHeight / 3.2;
	this.pos_x = window.innerWidth / 2.6;
	//this.pos_y = window.innerHeight / 2.6;
	this.selecionador = function(){
		fill("#6b6b6b");
		rect(this.pos_x, this.pos_y ,300, 130);
	};
};