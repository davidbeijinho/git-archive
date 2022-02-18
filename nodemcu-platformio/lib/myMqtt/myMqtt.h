#ifndef myMqtt_H
#define myMqtt_H

#ifndef MY_GLOBAL_FUN
#define MY_GLOBAL_FUN
#include <stdint.h>
 void myCallback(char* topic, uint8_t* payload, unsigned int length);   

#endif

#include "Arduino.h"
#include "PubSubClient.h"
#include "myLed.h"
#include "myBmp.h"

class myMqtt
{
public:
  myMqtt();
  void setup();
  void loop();
  void publish(const char* topic, const char* message);
  static void callback(char* topic, uint8_t* payload, unsigned int length);
  void reconnect();
  //static PubSubClient client;
};

#endif //  myMqtt_H
