#include "myBmp.h"
#include "Adafruit_BMP085.h"

Adafruit_BMP085 _bmp;

// BMP085
// Device Pin	Espruino

// 1      VCC   3.3
// 2      SDA   D1
// 3      SCL	D2
// 4      XCLR
// 5      EOC
// 6      GND   GND

// BMP085 MODES
// Mode	Name	                    Conversion time >=
// 0	BMP085_MODE_ULTRALOWPOWER	10 ms
// 1	BMP085_MODE_STANDARD	    13 ms
// 2	BMP085_MODE_HIGHRES	        19 ms
// 3	BMP085_MODE_ULTRAHIGHRES	31 ms

myBmp::myBmp()
{
}

void myBmp::setup()
{
    if (!_bmp.begin(0, D1, D2))
    {
        Serial.println("Could not find a valid BMP085 sensor, check wiring!");
        while (1)
        {
        }
    }
}

void myBmp::printData()
{
    Serial.print("Temperature = ");
    Serial.print(_bmp.readTemperature());
    Serial.println(" *C");

    Serial.print("Pressure = ");
    Serial.print(_bmp.readPressure());
    Serial.println(" Pa");

    // Calculate altitude assuming 'standard' barometric
    // pressure of 1013.25 millibar = 101325 Pascal
    Serial.print("Altitude = ");
    Serial.print(_bmp.readAltitude());
    Serial.println(" meters");

    Serial.print("Pressure at sealevel (calculated) = ");
    Serial.print(_bmp.readSealevelPressure());
    Serial.println(" Pa");

    // you can get a more precise measurement of altitude
    // if you know the current sea level pressure which will
    // vary with weather and such. If it is 1015 millibars
    // that is equal to 101500 Pascals.
    Serial.print("Real altitude = ");
    Serial.print(_bmp.readAltitude(101500));
    Serial.println(" meters");

    Serial.println();
    delay(500);
}