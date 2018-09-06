//% color=#2EFE2E
//% icon="\uf2cb"
namespace DS1820pxt {

    enum Pins{
      P0=  3,
      P1=  2,
      P2=  1,
      P3=  4,
      P4=  5,
      P5=  17,
      P6=  12,
      P7=  11,
      P8=  18,
      P9=  10,
      P10= 6,
      P11= 26,
      P12= 20,
      P13= 23,
      P14= 22,
      P15= 21,
      P16= 16,
      P19= 0,
      P20= 30
    }

    /**
     * initialises local variablesssss
     */
    //% blockId=probe_init
    //% block="connect temperature probe to %pin" shim=DS1820pxt::init
    export function init(pin: Pins): void{
    }

    /**
     * get temperature to 1 decimal place (*10)
     */
    //% blockId = get_temp
    //% block="temperature" shim=DS1820pxt::temp1dp
    export function temp1dp(): number{
    return 0
    }
}
