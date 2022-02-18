import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class backOffice extends PApplet {

int altura=500;
int largura=700;
public void setup(){
	size(largura, altura);
}

public void draw(){
		background(255);
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "backOffice" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
