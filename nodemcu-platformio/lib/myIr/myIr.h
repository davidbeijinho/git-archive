#ifndef myIr_H
#define myIr_H

#include "Arduino.h"
#include "myMqtt.h"

class myIr
{
public:
  myIr();
  void setup(myMqtt publisher);
  void printData();
  myMqtt publisher;
};

#endif //  myIr_H
