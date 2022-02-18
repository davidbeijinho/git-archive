#ifndef myLed_H
#define myLed_H

#include "Arduino.h"

class myLed
{
public:
  myLed();
  void setup(int red_pin, int green_pin, int blue_pin);
  void off();
  void setColor(int red_light_value, int green_light_value, int blue_light_value);
  int red_light_pin;
  int green_light_pin;
  int blue_light_pin;
};

#endif //  myLed_H
