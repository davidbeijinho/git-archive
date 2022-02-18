#include "myWifi.h"
#include <ESP8266WiFi.h>

// Replace with your network credentials
const char *ssid = "";
const char *password = "";

myWifi::myWifi()
{
}

void myWifi::setup()
{
    Serial.print("Connecting to ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.println("WiFi connected.");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}

void myWifi::printData()
{
}