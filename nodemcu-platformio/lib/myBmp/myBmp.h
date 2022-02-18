#ifndef myBmp_H
#define myBmp_H

#include "Arduino.h"
#include "Adafruit_BMP085.h"

class myBmp
{
public:
  myBmp();
  void setup();
  void printData();
  float readTemperature();
  float readPressure();
  float readAltitude();
  float readSealevelPressure();
  Adafruit_BMP085 _bmp;
};

#endif //  myBmp_H
