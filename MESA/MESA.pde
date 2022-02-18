//ABRIR FILES       #
//MOVER FILES       #
//RODAR FILES       #
//FECHAR FILES      #
//REPRODUZIR VIDEOS
//PARAR VIDEOS
//CONFIG OFFSETS - para fiducial
	//POS-X
	//POS-Y
	//ESCALA
	//FORMA CIRCULO
	//FORMA RECT , LARGURA e ALTURA
	import processing.video.*;
	import TUIO.*;
	import java.util.*;
	import oscP5.*;
	import netP5.*;
	import tuioZones.*;
	import java.util.Collections;
//CONFIGURAVEIS

//botao de fechar
int larguraClose=50;
int alturaColse=50;

//carregar objetos
int larguraInicial=300;
int alturaInicial=200;

//Fiducial
int  numMarcadores=10;
color corMarcador=color(255,0,0);
float offsetX=0;
float offsetY=0;
char tipoForma ='r'; // tambem pode ser circulo 'c'
float tamX=200;//para circulo usar so este
float tamY=200;
int grossuraLinha=10;

int altura=600;
int largura=800;


TUIOzoneCollection zones;
TuioProcessing tuioClient;
int idAgora;
PImage agora;
PImage closeIcon;	
PImage carregador;
ArrayList userAtivo;
ArrayList marcadores;
ArrayList aux_arrl;
ArrayList unico;
String aux_str;
boneco bonecoAgora;

void setup()
{
	size(largura, altura);
	closeIcon = loadImage("close.png");

 	tuioClient  = new TuioProcessing(this,3333);//TUIO REACTIVISION
 	zones=new TUIOzoneCollection(this,3335);//TUIO TOQUES
 	

 	

 	userAtivo=new ArrayList();
 	marcadores = new ArrayList();
 	for (int i=0;i<numMarcadores;i++)
 	{
 		unico = new ArrayList();
 		java.io.File folder = new java.io.File(dataPath(str(i)));
 		java.io.FilenameFilter imgFilter = new java.io.FilenameFilter() 
 		{
 			public boolean accept(File dir, String name) 
 			{
 				return ( name.toLowerCase().endsWith(".png") || name.toLowerCase().endsWith(".PNG") ||name.toLowerCase().endsWith(".jpg")||name.toLowerCase().endsWith(".JPG"));
 			}
 		};		
 		if (folder.list(imgFilter)!=null)
 		{
 			String[] filenames = folder.list(imgFilter);
 			for (int a = 0; a < filenames.length; a++) 
 			{
 				unico.add(filenames[a]);
 			}
 		}
 		marcadores.add(unico);
 	}
 }

 void draw()
 {
 	background(255);
 	if (userAtivo.size()>0)
 	{
 		for (int b = 0; b<userAtivo.size(); b++)
 		{
 			bonecoAgora=(boneco) userAtivo.get(b);
 			int idd=bonecoAgora.getId();
 			if (zones.isZonePressed("close"+str(idd) )  ) 
 			{
 				bonecoAgora.inativa();
 			}
 			else if ((zones.isZonePressed("zona"+str(idd) )      ) && (bonecoAgora.estado()) ) 
 			{
 				bonecoAgora.vaiTopo();
 			}
 			else  if  (bonecoAgora.estado()) 
 			{
 				if (bonecoAgora.getTopo())
 				{
 					bonecoAgora.vaiBoto();
 					userAtivo.remove(b);
 					bonecoAgora.trocaAngle();
 					userAtivo.add(bonecoAgora);
 				}
 				agora=bonecoAgora.getFoto();
 				pushMatrix();
 				translate(zones.getZoneX("zona"+str(idd))+(zones.getZoneWidth("zona"+str(idd))/2), zones.getZoneY("zona"+str(idd))+(zones.getZoneHeight("zona"+str(idd))/2));
 				rotate(radians(bonecoAgora.getAngle()));
 				image(agora,-(zones.getZoneWidth("zona"+str(idd))/2),-(zones.getZoneHeight("zona"+str(idd))/2),zones.getZoneWidth("zona"+str(idd)),zones.getZoneHeight("zona"+str(idd)) );
 				image(closeIcon,-((zones.getZoneWidth("zona"+str(idd))/2)+larguraClose/2), -((zones.getZoneHeight("zona"+str(idd))/2)+alturaColse/2),larguraClose,alturaColse);
 				popMatrix();

 			}
 		}
 		for (int b = 0; b<userAtivo.size(); b++)
 		{
 			bonecoAgora=(boneco) userAtivo.get(b);

 			if( (bonecoAgora.getTopo()  ) && (bonecoAgora.estado()) )
 			{
 				int idd=bonecoAgora.getId();
 				agora=bonecoAgora.getFoto();
 				pushMatrix();
 				translate(zones.getZoneX("zona"+str(idd))+(zones.getZoneWidth("zona"+str(idd))/2), zones.getZoneY("zona"+str(idd))+(zones.getZoneHeight("zona"+str(idd))/2));
 				float angleAux =map(zones.getGestureRotation("zona"+str(idd)),0,1,0,360   );
 				rotate(radians(bonecoAgora.getAngle()+angleAux));
 				bonecoAgora.setAngleF(bonecoAgora.getAngle()+angleAux);
 				image(agora,-(zones.getZoneWidth("zona"+str(idd))/2),-(zones.getZoneHeight("zona"+str(idd))/2),zones.getZoneWidth("zona"+str(idd)),zones.getZoneHeight("zona"+str(idd)) );
 				image(closeIcon,-((zones.getZoneWidth("zona"+str(idd))/2)+larguraClose/2), -((zones.getZoneHeight("zona"+str(idd))/2)+alturaColse/2),larguraClose,alturaColse);
 				popMatrix();
 			}
 		} 
 	}









Vector tuioObjectList = tuioClient.getTuioObjects();
for (int i=0;i<tuioObjectList.size();i++) {
	TuioObject tobj = (TuioObject)tuioObjectList.elementAt(i);
	stroke(corMarcador);
	strokeWeight(grossuraLinha);
	noFill();
	pushMatrix();
	translate(tobj.getScreenX(width),tobj.getScreenY(height));
	rotate(tobj.getAngle());
	rect(-tamX/2,-tamY/2,tamX,tamY);
	popMatrix();
}



//-----------------

}
//--------
void addTuioCursor(TuioCursor tcur) {}
void updateTuioCursor (TuioCursor tcur) {}
void removeTuioCursor(TuioCursor tcur) {}
void updateTuioObject (TuioObject tobj) {}
void refresh(TuioTime bundleTime) { 	redraw();}
void addTuioObject(TuioObject tobj) {carregarUser(tobj.getSymbolID());}
void removeTuioObject(TuioObject tobj) 
{	
	if (idAgora==tobj.getSymbolID())
	{
		for (int b = 0; b<userAtivo.size(); b++)
		{

			bonecoAgora=(boneco) userAtivo.get(b);
			int idd=bonecoAgora.getId();
			zones.killZone("zona"+str(idd));
			zones.killZone("close"+str(idd));
		}
		userAtivo.clear();
	}
}
//-------
void carregarUser(int _userID)
{
	if (_userID<=marcadores.size())
	{
		idAgora=_userID;
		PImage imgAUX;
		userAtivo=new ArrayList();
		aux_arrl=(ArrayList) marcadores.get(_userID);
		for (int b = 0; b<aux_arrl.size(); b++)
		{
			aux_str=(String) aux_arrl.get(b);
			imgAUX = loadImage(str(_userID)+"/"+aux_str);
			boneco auxBoneco= new boneco(b,imgAUX);
			userAtivo.add(auxBoneco);
			zones.setZone("zona"+str(b), int(random(larguraInicial, width- larguraInicial)),int(random(alturaInicial, height- alturaInicial)),larguraInicial,alturaInicial);
			zones.setZone("close"+str(b),zones.getZoneX("zona"+str(b)), zones.getZoneY("zona"+str(b)) ,larguraClose,alturaColse);
			zones.attachZoneTo("close"+str(b),"zona"+str(b));
			zones.setZoneParameter("zona"+str(b),"DRAGGABLE",true);
			zones.setZoneParameter("zona"+str(b),"THROWABLE",true);
			zones.setZoneParameter("zona"+str(b),"SCALABLE",true);
		}
	}
}