import {TipoHoja, Impresiones, Impresora, Operario} from "../impresora"
describe('Calcular costo total', ()=>{
    it("Con Hojas A1 y A3, uno con color y otro sin color", () =>{
        let impresora = new Impresora("LENOVO")
        let operarioTest = new Operario("Testor", impresora)
        let impresion_1 = new Impresiones(TipoHoja.A1,15,true) 
        let impresion_2 = new Impresiones(TipoHoja.A3,12,false)
        operarioTest.enviarImpresion(impresion_1)
        operarioTest.enviarImpresion(impresion_2)
        let resObt = impresora.calcularCostoTotal()
        let resEsp = 73.5
        expect(resEsp).toEqual(resObt)
    })
})