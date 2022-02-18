#include "myIr.h"
#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRrecv.h>
#include <IRutils.h>
#include <stdlib.h>
#define _OPEN_SYS_ITOA_EXT

// An IR detector/demodulator is connected to GPIO pin 14(D5 on a NodeMCU
// board).
const uint16_t kRecvPin = D3;

IRrecv irrecv(kRecvPin);

decode_results results;
myIr::myIr()
{
}

void myIr::setup(myMqtt pub)
{
    publisher = pub;
    irrecv.enableIRIn(); // Start the receiver
}

void myIr::printData()
{
    if (irrecv.decode(&results))
    {
        String stringCode = uint64ToString(results.value, HEX);
        Serial.print("DETECT CODE -> ");
        Serial.print(stringCode);
        Serial.println("");


  int bufferSize = sizeof(uint64_t) * 8 + 1;
    char buffer[bufferSize];
    stringCode.toCharArray(buffer, bufferSize);
        publisher.publish("infrared", buffer);
        irrecv.resume(); // Receive the next value
    }
}
