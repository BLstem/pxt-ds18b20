// Auto-generated. Do not edit.


    declare enum Pins {
      //% block="P0"
      P0=  3,
      //% block="P1"
      P1=  2,
      //% block="P2"
      P2=  1,
      //% block="P3"
      P3=  4,
      //% block="P4"
      P4=  5,
      //% block="P5"
      P5=  17,
      //% block="P6"
      P6=  12,
      //% block="P7"
      P7=  11,
      //% block="P8"
      P8=  18,
      //% block="P9"
      P9=  10,
      //% block="P10"
      P10= 6,
      //% block="P11"
      P11= 26,
      //% block="P12"
      P12= 20,
      //% block="P13"
      P13= 23,
      //% block="P14"
      P14= 22,
      //% block="P15"
      P15= 21,
      //% block="P16"
      P16= 16,
      //% block="P19"
      P19= 0,
      //% block="P20"
      P20= 30
    }
declare namespace DS1820pxt {
}


    /** DS1820 Dallas 1-Wire Temperature Probe
     *
     * Example:
     * @code
     * #include "mbed.h"
     * #include "DS1820.h"
     *
     * DS1820 probe(DATA_PIN);
     *
     * int main() {
     *     while(1) {
     *         probe.convertTemperature(true, DS1820::all_devices);         //Start temperature conversion, wait until ready
     *         printf("It is %3.1foC\r\n", probe.temperature());
     *         wait(1);
     *     }
     * }
     * @endcode
     */

    declare enum devices {
    this_device = 0,
    }

// Auto-generated. Do not edit. Really.
