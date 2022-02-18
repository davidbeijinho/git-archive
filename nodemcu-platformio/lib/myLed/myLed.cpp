#include "myLed.h"


myLed::myLed()
{
}

void myLed::setup(int red_pin, int green_pin, int blue_pin)
{
    red_light_pin = red_pin;
    green_light_pin = green_pin;
    blue_light_pin = blue_pin;
    
    pinMode(red_light_pin, OUTPUT);
    pinMode(green_light_pin, OUTPUT);
    pinMode(blue_light_pin, OUTPUT);
}

void myLed::off()
{
    analogWrite(red_light_pin, LOW);
    analogWrite(green_light_pin, LOW);
    analogWrite(blue_light_pin, LOW);
}

void myLed::setColor(int red_light_value, int green_light_value, int blue_light_value)
{
    analogWrite(red_light_pin, red_light_value);
    analogWrite(green_light_pin, green_light_value);
    analogWrite(blue_light_pin, blue_light_value);
}