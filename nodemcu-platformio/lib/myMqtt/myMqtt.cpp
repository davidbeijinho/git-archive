#include "myMqtt.h"
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char *mqtt_server = "192.168.0.17";
WiFiClient espClient;
extern myLed LED;
extern myBmp BMP;
extern PubSubClient client;
myMqtt::myMqtt()
{
}

String getValue(String data, char separator, int index)
{
  int found = 0;
  int strIndex[] = {0, -1};
  int maxIndex = data.length() - 1;

  for (int i = 0; i <= maxIndex && found <= index; i++)
  {
    if (data.charAt(i) == separator || i == maxIndex)
    {
      found++;
      strIndex[0] = strIndex[1] + 1;
      strIndex[1] = (i == maxIndex) ? i + 1 : i;
    }
  }
  return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}

void myMqtt::callback(char *topic, uint8_t *payload, unsigned int length)
{
  String topicString = String(topic);
  //String payloadString = String(payload, length);
  String payloadString = (char *)payload;

  Serial.println("Message arrived");
  Serial.print("Topic: ");
  Serial.println(topicString);
  Serial.print("Payload: ");
  Serial.println(payloadString);

  if (topicString == "/nodemcu/led/off")
  {
    Serial.print("RECIEVE LED OFF");
    LED.off();
  }
  else if (topicString == "/nodemcu/led/color")
  {
    // int result[3];
    // int r = 0;
    // int t = 0;

    // for (int i = 0; i < payloadString.length(); i++)
    // {
    //   if (payloadString.charAt(i) == ',')
    //   {
    //     result[t] = payloadString.substring(r, i).toInt();
    //     r = (i + 1);
    //     t++;
    //   }
    // }
      Serial.print("RECIEVE LED COLOR");
    LED.setColor(getValue(payloadString, ',', 0).toInt(), getValue(payloadString, ',', 1).toInt(), getValue(payloadString, ',', 2).toInt());
  }
  else if (topicString == "/nodemcu/bmp/update")
  {
    String string_readTemperature = String(BMP.readTemperature());
    char buffer_readTemperature[string_readTemperature.length()];
    string_readTemperature.toCharArray(buffer_readTemperature, string_readTemperature.length());
    client.publish("nodemcu/bpm/Temperature", buffer_readTemperature);

    String string_readPressure = String(BMP.readPressure());
    char buffer_readPressure[string_readPressure.length()];
    string_readPressure.toCharArray(buffer_readPressure, string_readPressure.length());
    client.publish("nodemcu/bpm/Pressure", buffer_readPressure);

    String string_readAltitude = String(BMP.readAltitude());
    char buffer_readAltitude[string_readAltitude.length()];
    string_readAltitude.toCharArray(buffer_readAltitude, string_readAltitude.length());
    client.publish("nodemcu/bpm/Altitude", buffer_readAltitude);

    String string_readSealevelPressure = String(BMP.readSealevelPressure());
    char buffer_readSealevelPressure[string_readSealevelPressure.length()];
    string_readSealevelPressure.toCharArray(buffer_readSealevelPressure, string_readSealevelPressure.length());
    client.publish("nodemcu/bpm/SealevelPressure",buffer_readSealevelPressure);
  }
  else
  {
    Serial.print("UNKNOW TOPIC");
  }
}

void myMqtt::publish(const char *topic, const char *message)
{
  if (client.connected())
  {
    client.publish(topic, message);
  }
  else
  {
    Serial.print("NOT CONNECTED");
  }
}

void myMqtt::reconnect()
{
  // Loop until we're reconnected
  while (!client.connected())
  {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "NODEMCU";
    ///clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str()))
    {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("TEST-TOPIC", "TEST-PAYLOAD");
      // ... and resubscribe
      client.subscribe("/nodemcu/#");
    }
    else
    {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void myMqtt::loop()
{
  if (!client.connected())
  {
    reconnect();
  }
  client.loop();
}

void myMqtt::setup()
{
  client = PubSubClient(espClient);

  client.setServer(mqtt_server, 3000);
  client.setCallback(myCallback);
}

void myCallback(char *topic, uint8_t *payload, unsigned int length)
{
  myMqtt::callback(topic, payload, length);
}