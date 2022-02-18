import TUIO.*;
import java.util.*;
TuioProcessing tuioClient;
float cursor_size = 15;
float object_size = 60;
float table_size = 760;
float scale_factor = 1;
PFont font;


int altura=400;
int largura=600;

pessoa alunos[];

void setup(){
	size(largura, altura);


	  //hint(ENABLE_NATIVE_FONTS);
	  font = createFont("Arial", 18);
	  scale_factor = height/table_size;

  // we create an instance of the TuioProcessing client
  // since we add "this" class as an argument the TuioProcessing class expects
  // an implementation of the TUIO callback methods (see below)
  tuioClient  = new TuioProcessing(this);
}

void draw(){
	background(255);
	desenhaTUIO();
}

//---------------------------------------------------------------------------------
//------------------------- TUIO --------------------------------------------------
//---------------------------------------------------------------------------------

void desenhaTUIO()
{
	textFont(font,18*scale_factor);
	float obj_size = object_size*scale_factor; 
	float cur_size = cursor_size*scale_factor; 
	desenhaObjetos(obj_size);
	desenhaCursores(cur_size);
}
void desenhaObjetos(float tamanho)
{
	Vector tuioObjectList = tuioClient.getTuioObjects();
	for (int i=0;i<tuioObjectList.size();i++) {
		TuioObject tobj = (TuioObject)tuioObjectList.elementAt(i);
		stroke(0);
		fill(0);
		pushMatrix();
		translate(tobj.getScreenX(width),tobj.getScreenY(height));
		rotate(tobj.getAngle());
		rect(-tamanho/2,-tamanho/2,tamanho,tamanho);
		popMatrix();
		fill(255);
		text(""+tobj.getSymbolID(), tobj.getScreenX(width), tobj.getScreenY(height));
	}
}
void desenhaCursores(float tamanho)
{
	Vector tuioCursorList = tuioClient.getTuioCursors();
	for (int i=0;i<tuioCursorList.size();i++) {
		TuioCursor tcur = (TuioCursor)tuioCursorList.elementAt(i);
		Vector pointList = tcur.getPath();

		if (pointList.size()>0) {
			stroke(0,0,255);
			TuioPoint start_point = (TuioPoint)pointList.firstElement();;
			for (int j=0;j<pointList.size();j++) {
				TuioPoint end_point = (TuioPoint)pointList.elementAt(j);
				line(start_point.getScreenX(width),start_point.getScreenY(height),end_point.getScreenX(width),end_point.getScreenY(height));
				start_point = end_point;
			}

			stroke(192,192,192);
			fill(192,192,192);
			ellipse( tcur.getScreenX(width), tcur.getScreenY(height),tamanho,tamanho);
			fill(0);
			text(""+ tcur.getCursorID(),  tcur.getScreenX(width)-5,  tcur.getScreenY(height)+5);
		}
	}
}
//################################################################################################
//############################# OBEJTOS (FIDUCIAS) #################################################
//################################################################################################
// these callback methods are called whenever a TUIO event occurs

// ADICIONA PESSOA
void addTuioObject(TuioObject tobj) {
	println("add object "+tobj.getSymbolID()+" ("+tobj.getSessionID()+") "+tobj.getX()+" "+tobj.getY()+" "+tobj.getAngle());
}

// REMOVE PESSOA
void removeTuioObject(TuioObject tobj) {
	println("remove object "+tobj.getSymbolID()+" ("+tobj.getSessionID()+")");
}

// MOVE PESSOA
void updateTuioObject (TuioObject tobj) {
	println("update object "+tobj.getSymbolID()+" ("+tobj.getSessionID()+") "+tobj.getX()+" "+tobj.getY()+" "+tobj.getAngle()
		+" "+tobj.getMotionSpeed()+" "+tobj.getRotationSpeed()+" "+tobj.getMotionAccel()+" "+tobj.getRotationAccel());
}


//################################################################################################
//############################# CURSORES (DEDOS) #################################################
//################################################################################################
// ADICIONA TOQUE
void addTuioCursor(TuioCursor tcur) {
	println("add cursor "+tcur.getCursorID()+" ("+tcur.getSessionID()+ ") " +tcur.getX()+" "+tcur.getY());
}

// MOVE TOQUE
void updateTuioCursor (TuioCursor tcur) {
	println("update cursor "+tcur.getCursorID()+" ("+tcur.getSessionID()+ ") " +tcur.getX()+" "+tcur.getY()
		+" "+tcur.getMotionSpeed()+" "+tcur.getMotionAccel());
}

// REMOVE TOQUE
void removeTuioCursor(TuioCursor tcur) {
	println("remove cursor "+tcur.getCursorID()+" ("+tcur.getSessionID()+")");
}

// called after each message bundle
// representing the end of an image frame
void refresh(TuioTime bundleTime) { 
	redraw();
}