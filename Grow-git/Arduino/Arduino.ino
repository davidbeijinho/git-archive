const int analogInPin = A0;

String escrever;

int sensorValue = 0;

void setup() 
{
  Serial.begin(9600); 
}

void loop() 
{

  sensorValue = analogRead(analogInPin);            

  escrever="P1:A0:"+String(sensorValue);
  
  Serial.println(escrever);      
 
  delay(2);                     
}
