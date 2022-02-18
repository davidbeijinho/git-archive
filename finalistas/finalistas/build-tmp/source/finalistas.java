import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import TUIO.*; 
import java.util.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class finalistas extends PApplet {



TuioProcessing tuioClient;
float cursor_size = 15;
float object_size = 60;
float table_size = 760;
float scale_factor = 1;
PFont font;


int altura=400;
int largura=600;

pessoa alunos[];

public void setup(){
	size(largura, altura);


	  //hint(ENABLE_NATIVE_FONTS);
	  font = createFont("Arial", 18);
	  scale_factor = height/table_size;

  // we create an instance of the TuioProcessing client
  // since we add "this" class as an argument the TuioProcessing class expects
  // an implementation of the TUIO callback methods (see below)
  tuioClient  = new TuioProcessing(this);
}

public void draw(){
	background(255);
	desenhaTUIO();
}

//---------------------------------------------------------------------------------
//------------------------- TUIO --------------------------------------------------
//---------------------------------------------------------------------------------

public void desenhaTUIO()
{
	textFont(font,18*scale_factor);
	float obj_size = object_size*scale_factor; 
	float cur_size = cursor_size*scale_factor; 
	desenhaObjetos(obj_size);
	desenhaCursores(cur_size);
}
public void desenhaObjetos(float tamanho)
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
public void desenhaCursores(float tamanho)
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

// these callback methods are called whenever a TUIO event occurs

// called when an object is added to the scene
public void addTuioObject(TuioObject tobj) {
	println("add object "+tobj.getSymbolID()+" ("+tobj.getSessionID()+") "+tobj.getX()+" "+tobj.getY()+" "+tobj.getAngle());
}

// called when an object is removed from the scene
public void removeTuioObject(TuioObject tobj) {
	println("remove object "+tobj.getSymbolID()+" ("+tobj.getSessionID()+")");
}

// called when an object is moved
public void updateTuioObject (TuioObject tobj) {
	println("update object "+tobj.getSymbolID()+" ("+tobj.getSessionID()+") "+tobj.getX()+" "+tobj.getY()+" "+tobj.getAngle()
		+" "+tobj.getMotionSpeed()+" "+tobj.getRotationSpeed()+" "+tobj.getMotionAccel()+" "+tobj.getRotationAccel());
}

// called when a cursor is added to the scene
public void addTuioCursor(TuioCursor tcur) {
	println("add cursor "+tcur.getCursorID()+" ("+tcur.getSessionID()+ ") " +tcur.getX()+" "+tcur.getY());
}

// called when a cursor is moved
public void updateTuioCursor (TuioCursor tcur) {
	println("update cursor "+tcur.getCursorID()+" ("+tcur.getSessionID()+ ") " +tcur.getX()+" "+tcur.getY()
		+" "+tcur.getMotionSpeed()+" "+tcur.getMotionAccel());
}

// called when a cursor is removed from the scene
public void removeTuioCursor(TuioCursor tcur) {
	println("remove cursor "+tcur.getCursorID()+" ("+tcur.getSessionID()+")");
}

// called after each message bundle
// representing the end of an image frame
public void refresh(TuioTime bundleTime) { 
	redraw();
}
 class conteudo 
{
	int id;
	int idObra;

	//--------------------------------------
	//  CONSTRUCTOR
	//--------------------------------------
	
	 conteudo () {
		// expression
	}
}
 class obra 
{
	int id;
	int idPessoa;
	String fichaTecnica;

	conteudo conteudos[];

	//--------------------------------------
	//  CONSTRUCTOR
	//--------------------------------------
	
	 obra () {
		// expression
	}
}
 class pessoa 
{
	
	int id;
	String nome;
	int idCurso;
	int anoInicio;
	int anoFinal;
	String biografia;

	int posX;
	int posY;
	int largura;
	int altura;

	obra pecas[];//array de obras
	//--------------------------------------
	//  CONSTRUCTOR
	//--------------------------------------
	
	 pessoa () {
		// expression
	}
}
// import TUIO.*;
// import java.util.*;
// TuioProcessing tuioClient;

// // these are some helper variables which are used
// // to create scalable graphical feedback
// float cursor_size = 15;
// float object_size = 60;
// float table_size = 760;
// float scale_factor = 1;
// PFont font;

// void setup()
// {
//   //size(screen.width,screen.height);
//   size(640,480);
//   noStroke();
//   fill(0);
  
//   loop();
//   frameRate(30);
//   //noLoop();
  
//   //hint(ENABLE_NATIVE_FONTS);
//   font = createFont("Arial", 18);
//   scale_factor = height/table_size;
  
//   // we create an instance of the TuioProcessing client
//   // since we add "this" class as an argument the TuioProcessing class expects
//   // an implementation of the TUIO callback methods (see below)
//   tuioClient  = new TuioProcessing(this);
// }

// // within the draw method we retrieve a Vector (List) of TuioObject and TuioCursor (polling)
// // from the TuioProcessing client and then loop over both lists to draw the graphical feedback.
// void draw()
// {
//   background(255);
//   textFont(font,18*scale_factor);
//   float obj_size = object_size*scale_factor; 
//   float cur_size = cursor_size*scale_factor; 
   
//   Vector tuioObjectList = tuioClient.getTuioObjects();
//   for (int i=0;i<tuioObjectList.size();i++) {
//      TuioObject tobj = (TuioObject)tuioObjectList.elementAt(i);
//      stroke(0);
//      fill(0);
//      pushMatrix();
//      translate(tobj.getScreenX(width),tobj.getScreenY(height));
//      rotate(tobj.getAngle());
//      rect(-obj_size/2,-obj_size/2,obj_size,obj_size);
//      popMatrix();
//      fill(255);
//      text(""+tobj.getSymbolID(), tobj.getScreenX(width), tobj.getScreenY(height));
//    }
   
//    Vector tuioCursorList = tuioClient.getTuioCursors();
//    for (int i=0;i<tuioCursorList.size();i++) {
//       TuioCursor tcur = (TuioCursor)tuioCursorList.elementAt(i);
//       Vector pointList = tcur.getPath();
      
//       if (pointList.size()>0) {
//         stroke(0,0,255);
//         TuioPoint start_point = (TuioPoint)pointList.firstElement();;
//         for (int j=0;j<pointList.size();j++) {
//            TuioPoint end_point = (TuioPoint)pointList.elementAt(j);
//            line(start_point.getScreenX(width),start_point.getScreenY(height),end_point.getScreenX(width),end_point.getScreenY(height));
//            start_point = end_point;
//         }
        
//         stroke(192,192,192);
//         fill(192,192,192);
//         ellipse( tcur.getScreenX(width), tcur.getScreenY(height),cur_size,cur_size);
//         fill(0);
//         text(""+ tcur.getCursorID(),  tcur.getScreenX(width)-5,  tcur.getScreenY(height)+5);
//       }
//    }
   
// }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "finalistas" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
