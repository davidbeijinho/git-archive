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
