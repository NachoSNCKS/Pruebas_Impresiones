export enum TipoHoja{
    A1, A2, A3, A4
}

export class Impresiones{
    tipo : TipoHoja
    cantidad : number
    color : boolean

    constructor(tipo : TipoHoja, cantidad : number, color : boolean){
        this.tipo = tipo
        this.cantidad = cantidad
        this.color = color
    }
}

export class Impresora{
    nombre : string
    colaImpresion : Impresiones[]
    //costoEspec : number
    //ordImpresion : number

    constructor(nombre : string){
        this.nombre = nombre
        this.colaImpresion = []
        //this.costoEspec = 0
    }
    
    //Aqui haremos todos nuestros calculos
    calcularCosto(ordImpresion : number) : number{
        let costoEspec = 0
        let costoColor = 0
        let costoTipoHoja = 0
        let cantidadHojas = this.colaImpresion[ordImpresion].cantidad
        let conColor = this.colaImpresion[ordImpresion].color
        let tipoDeHoja = this.colaImpresion[ordImpresion].tipo

        if(conColor == true){
            costoColor = 1.5
            if(tipoDeHoja == 0){
                costoTipoHoja = 3
            }else if(tipoDeHoja == 1){
                costoTipoHoja = 2
            }else if(tipoDeHoja == 2){
                costoTipoHoja = 1
            }else if(tipoDeHoja == 3){
                costoTipoHoja = 0.5
            }
        }else{
            costoColor = 0.5
            if(tipoDeHoja == 0){
                costoTipoHoja = 3
            }else if(tipoDeHoja == 1){
                costoTipoHoja = 2
            }else if(tipoDeHoja == 2){
                costoTipoHoja = 1
            }else if(tipoDeHoja == 3){
                costoTipoHoja = 0.5
            }
        }
        costoEspec = cantidadHojas * costoTipoHoja * costoColor
        return costoEspec;
    }
    calcularCostoTotal() : number{
        let costoAcum = 0
        let costoColor = 0
        let costoTipoHoja = 0
        for (let i = 0; i < this.colaImpresion.length ; i++){
            let cantidadHojas = this.colaImpresion[i].cantidad
            let conColor = this.colaImpresion[i].color
            let tipoDeHoja = this.colaImpresion[i].tipo
            if(conColor == true){
                costoColor = 1.5
                if(tipoDeHoja == 0){
                    costoTipoHoja = 3
                }else if(tipoDeHoja == 1){
                    costoTipoHoja = 2
                }else if(tipoDeHoja == 2){
                    costoTipoHoja = 1
                }else if(tipoDeHoja == 3){
                    costoTipoHoja = 0.5
                }
            }else{
                costoColor = 0.5
                if(tipoDeHoja == 0){
                    costoTipoHoja = 3
                }else if(tipoDeHoja == 1){
                    costoTipoHoja = 2
                }else if(tipoDeHoja == 2){
                    costoTipoHoja = 1
                }else if(tipoDeHoja == 3){
                    costoTipoHoja = 0.5
                }
            }
            costoAcum = costoAcum + cantidadHojas * costoColor * costoTipoHoja
        }
        return costoAcum;
    }
    //Aqui mostraremos todos nuestros calculos
    mostrarImpresiones(){
        for (let i = 0 ; i < this.colaImpresion.length; i++){
            console.log(this.colaImpresion[i].tipo)
        }
    }

}

export class Operario{
    nombre : string
    impresion : Impresiones
    impresora : Impresora

    constructor(nombre : string, impresora : Impresora){
        this.nombre = nombre
        this.impresora = impresora
    }

    enviarImpresion(impresion){
        this.impresora.colaImpresion.push(impresion)
    }
}

let main = () => {
    //Primero simularemos ver la cola de impresion

    //1. Instanciamos el objeto impresora
    let impresora = new Impresora("HP")

    //2. Instaciamos en objeto Operario
    let operarioPrincipal = new Operario("Ignacio", impresora)

    //3. Instanciamos las impresiones
    let impresion1 = new Impresiones(TipoHoja.A2, 3, true)
    let impresion2 = new Impresiones(TipoHoja.A4, 5, true)

    //4. Enviamos las impresiones a la cola
    operarioPrincipal.enviarImpresion(impresion1)
    operarioPrincipal.enviarImpresion(impresion2)

    //Mostramos las impresion
    //impresora.mostrarImpresiones()
    //console.log(impresora.calcularCosto(0))
    //5. Mostramos el costo total de todas las impresiones
    //console.log(impresora.calcularCostoTotal())

}
//main()