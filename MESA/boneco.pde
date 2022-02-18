class boneco
{


	Movie filme;
	PImage foto;
	char tipo;
	boolean mostra ;
	int id;
boolean topo;
float angle;
float angleA;
	boneco (int _id , PImage _foto)
	{
		id=_id;
		foto=_foto;
		tipo='P';
		topo=false;
		angle=0;
		angleA=0;
		mostra=true;
	}

	boneco (int _id , Movie _filme)
	{
		id=_id;
		filme=_filme;
		tipo='M';
		topo=false;
		angle=0;
		angleA=0;
		mostra=true;
	}

	int getId(){return id;}
	char getTipo(){return  tipo;}
	PImage getFoto(){return foto;}
	Movie getFilme(){return filme;}
	void ativa(){mostra=true;}
	void inativa(){mostra=false;}
	boolean estado(){return mostra;}
	void vaiTopo(){topo=true;}
	void vaiBoto(){topo=false;}
	boolean getTopo(){return topo;} 
void setAngle(float _angle){angle=_angle;}
void setAngleF(float _angle){angleA=_angle;}
float getAngle(){return angle;}
void trocaAngle(){ angle=angleA;}
}
