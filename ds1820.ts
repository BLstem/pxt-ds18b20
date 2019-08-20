enum Pins{
  fake_element1,
  fake_element2
}
//% color=#2EFE2E
//% icon="\uf2cb"
namespace DS1820pxt {
    /**
     * initialises local variablesssss
     */
    //% blockId=probe_init
    //% block="connect temperature probe to %pin" shim=DS1820pxt::init
    export function init_pH(pin: Pins): void{
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
